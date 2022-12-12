<template>
	<div>
		<BusinessLayout title="Mes emplois">
			<NuxtLink class="p-button p-component" to="/gestion/emplois/add">
				Ajouter +
			</NuxtLink>

			<DataTable :loading="tableLoading"
					   :value="jobs"
					   showGridlines
					   :filters.sync="filters"
					   filterDisplay="menu"
					   :globalFilterFields="['title']"
					   sortField="dateUpdated"
					   :sortOrder="-1"
					   responsiveLayout="scroll">
				<template #header>
					<div class="datatable-header-row">
						<div>
							<Button label="Tous" @click="filters['status'].value = ''" class="p-button-text" />
							<Button label="Publié" @click="filters['status'].value = 'publish'" class="p-button-text" />
							<Button label="Brouillon" @click="filters['status'].value = 'draft'" class="p-button-text" />
						</div>
						<InputText v-model="filters['global'].value" placeholder="Recherche" />
					</div>

				</template>
				<template #empty>
					Aucun emploi trouvé.
				</template>
				<Column field="title" header="Titre" :sortable="true"></Column>
				<Column headerStyle="width: 3rem" field="status" header="Status" :sortable="true">
					<template #body="{data}">
						<span>{{data.status==='publish' ? 'Publié':'Brouillon'}}</span>
					</template>
				</Column>
				<Column headerStyle="width: 3rem" field="dateUpdated" header="Date m.à.j" :sortable="true">
					<template #body="{data}">
						<span>{{$moment(data.dateUpdated).format('DD MMM YYYY HH:mm')}}</span>
					</template>
				</Column>
				<Column headerStyle="width: 3rem" field="dateCreated" header="Date créé" :sortable="true">
					<template #body="{data}">
						<span>{{$moment(data.dateCreated).format('DD MMM YYYY HH:mm')}}</span>
					</template>
				</Column>
				<Column headerStyle="width: 50px; text-align: center">
					<template #body="{data}">
						<NuxtLink class="p-button" :to="'/gestion/emplois/'+data.id">
							<i class="pi pi-file-edit"></i>
						</NuxtLink>
						<Button type="button" @click="del(data.id)" class="p-button-danger" icon="pi pi-trash"></Button>
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
			filters: {}
		}
	},
	async fetch(){
		const resp = await this.$dataApi.getJobsList(this.$store.getters['auth/user_id'], 'all')
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
		del(id){
			this.$confirm.require({
				message: 'Êtes-vous sûr? Cette opération est irréversible.',
				header: 'Confirmation',
				icon: 'pi pi-exclamation-triangle',
				accept: async () => {
					this.tableLoading = true
					const result = await this.$dataApi.deleteJob(id)
					if(result.success){
						this.$toast.add({severity:'success', summary: 'Succès!', detail:'suppression effectué', life: 3000});
					} else{
						this.$toast.add({severity:'error', summary: 'Erreur!', detail:"Un problème est survenu. Veuillez contacter l'administrateur", life: 3000});
					}
					this.tableLoading = false
					this.$nuxt.refresh()
				},
			});
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
