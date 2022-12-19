<template>
	<div>
		<AdminLayout title="Mes emplois">
			<DataTable :loading="tableLoading"
					   :paginator="true"
					   :rows="10"
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
						<InputText v-model="filters['global'].value" placeholder="Recherche" />
					</div>

				</template>
				<template #empty>
					Aucun emploi trouvé.
				</template>
				<Column field="title" header="Titre" :sortable="true"></Column>
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
				<Column :headerStyle="{width: '109px','text-align': 'center'}">
					<template #body="{data}">
						<NuxtLink :to="'/admin/emplois/'+data.id">
							<Button type="button" icon="pi pi-file-edit"></Button>
						</NuxtLink>
						<Button type="button"
								v-tooltip.top="'Supprimer mon emploi'"
								title="Supprimer mon emploi"
								@click="del(data.id)"
								class="p-button-danger"
								icon="pi pi-trash"></Button>
					</template>
				</Column>
			</DataTable>
		</AdminLayout>
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
		auth: {role: ['admin']}
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
		const resp = await this.$dataApi.getJobsList(false, 'publish', true)
		this.jobs = resp.jobs
		this.tableLoading = false
	},
	methods: {
		initFilters() {
			this.filters = {
				'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
			}
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
