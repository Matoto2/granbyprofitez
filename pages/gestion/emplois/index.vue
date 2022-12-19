<template>
	<div>
		<BusinessLayout title="Mes emplois">
			<NuxtLink class="p-button p-component" to="/gestion/emplois/add">
				Ajouter +
			</NuxtLink>

			<DataTable :loading="tableLoading"
					   :paginator="true"
					   :rows="10"
					   :rowClass="rowClass"
					   :value="jobs"
					   showGridlines
					   :filters.sync="filters"
					   filterDisplay="menu"
					   :globalFilterFields="['title']"
					   sortField="dateUpdated"
					   :sortOrder="-1"
					   class="p-datatable-sm"
					   responsiveLayout="scroll">
				<template #header>
					<div class="datatable-header-row">
						<div>
							<Button label="Tous" @click="filters['status'].value = ''" class="p-button-text" />
							<Button label="Publié" @click="filters['status'].value = 'publish'" class="p-button-text" />
							<Button label="Brouillon" @click="filters['status'].value = 'draft'" class="p-button-text" />
							<Button label="Inactif" @click="filters['status'].value = 'inactive'" class="p-button-text" />
						</div>
						<InputText v-model="filters['global'].value" placeholder="Recherche" />
					</div>

				</template>
				<template #empty>
					Aucun emploi trouvé.
				</template>
				<Column field="title" header="Titre" :sortable="true"></Column>
				<Column field="status" header="Status" :sortable="true">
					<template #body="{data}">
						<span>{{data.status==='publish' ? 'Publié':(data.status==='draft')?'Brouillon':'Inactif'}}</span>
					</template>
				</Column>
				<Column :headerStyle="{width: '10rem'}" field="dateUpdated" header="Date m.à.j" :sortable="true">
					<template #body="{data}">
						<span>{{$moment(data.dateUpdated).format('DD MMM YYYY HH:mm')}}</span>
					</template>
				</Column>
				<Column :headerStyle="{width: '10rem'}" field="dateCreated" header="Date créé" :sortable="true">
					<template #body="{data}">
						<span>{{$moment(data.dateCreated).format('DD MMM YYYY HH:mm')}}</span>
					</template>
				</Column>
				<Column :headerStyle="{width: '10rem'}" field="dateRemonte" header="Remonter" :sortable="true">
					<template #body="{data}">
						{{data.status !== 'publish' ? 'Emploi non-publié':remonteTimeLeft(currentDate, data.dateRemonte).timeLeft}}
					</template>
				</Column>
				<Column :headerStyle="{width: '158px','text-align': 'center'}">
					<template #body="{data}">
						<NuxtLink :to="'/gestion/emplois/'+data.id">
							<Button type="button" icon="pi pi-file-edit"></Button>
						</NuxtLink>
						<Button :disabled="data.status !== 'publish' || !remonteTimeLeft(currentDate, data.dateRemonte).ok"
								type="button"
								v-tooltip.top="'Remonter mon emploi\n1 fois aux 7 jours'"
								title="Remonter mon emploi"
								class="p-button-success"
								@click="remonteJob(data.id)"
								icon="pi pi-angle-double-up"></Button>
						<Button type="button"
								v-tooltip.top="'Supprimer mon emploi'"
								title="Supprimer mon emploi"
								@click="del(data.id)"
								class="p-button-danger"
								icon="pi pi-trash"></Button>
					</template>
				</Column>
			</DataTable>
		</BusinessLayout>
	</div>
</template>

<script>
import {FilterMatchMode,FilterOperator} from 'primevue/api/';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

export default {
	middleware: 'auth',
	meta: {
		auth: {role: ['business']}
	},
	components: {
		DataTable,
		Column,
		Button,
		InputText
	},
	created() {
		this.initFilters();
	},
	data(){
		return {
			jobs: [],
			tableLoading: true,
			filters: {},
			currentDate: this.$moment()
		}
	},
	async fetch(){
		const resp = await this.$dataApi.getJobsList(this.$store.getters['auth/user_id'], 'all', true)
		this.jobs = resp.jobs
		this.tableLoading = false
	},
	methods: {
		initFilters() {
			this.filters = {
				'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
				'status': {value: null, matchMode: FilterMatchMode.EQUALS},
			}
		},
		remonteJob(id){
			this.$confirm.require({
				message: "Cette action ne peut-être effectué qu'une seule fois aux 7 jours. Désirez-vous remonter votre annonce?",
				header: 'Confirmation',
				icon: 'pi pi-exclamation-triangle',
				accept: async () => {
					this.tableLoading = true
					const result = await this.$axios.$post('/jobs/remonte', {
						token: this.$store.getters["auth/get_token"],
						id: id
					})
					if(result.success){
						this.$toast.add({severity:'success', summary: 'Succès!', detail:'Vous avez bien remonté votre emploi!', life: 3000});
					} else{
						this.$toast.add({severity:'error', summary: 'Erreur!', detail:result.message ?result.message:"Un problème est survenu. Veuillez contacter l'administrateur", life: 3000});
					}
					this.tableLoading = false
					this.$nuxt.refresh()
				},
			});
		},
		del(id){
			this.$confirm.require({
				message: 'Êtes-vous sûr? Cette opération est irréversible.',
				header: 'Confirmation',
				icon: 'pi pi-exclamation-triangle',
				accept: async () => {
					this.tableLoading = true
					const result = await this.$dataApi.deleteJob(id)
					if(result.success){
						this.$toast.add({severity:'success', summary: 'Succès!', detail:'Suppression effectué', life: 3000});
					} else{
						this.$toast.add({severity:'error', summary: 'Erreur!', detail:result.message ?result.message:"Un problème est survenu. Veuillez contacter l'administrateur", life: 3000});
					}
					this.tableLoading = false
					this.$nuxt.refresh()
				},
			});
		},
		remonteTimeLeft(currentDate, dateRemonte){
			const remonte = this.$moment(dateRemonte).add(7,'d')
			const time = remonte.diff(currentDate)
			return {
				ok: currentDate.isAfter(remonte),
				time: time,
				timeLeft: time <= 0 ?'Possible de remonter!':remonte.fromNow()
			}
		},
		rowClass(data){
			let rowclass = ''
			switch (data.status){
				case 'draft':
					rowclass = 'row-draft'
					break;
				case 'inactive':
					rowclass = 'row-inactive'
					break;
				default:
					rowclass = ''
			}
			return rowclass
		}
	}
}
</script>
<style scoped>
.datatable-header-row{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>

<style>
.p-datatable .p-datatable-tbody > tr.row-draft{
	background-color: #f2f2f2;
}
.p-datatable .p-datatable-tbody > tr.row-inactive{
	background-color: #ffc8c8;
}
</style>
