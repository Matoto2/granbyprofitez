<template>
	<div>
		<AdminLayout title="Nouvelles">
			<NuxtLink class="p-button p-component" to="/admin/nouvelles/add">
				Ajouter +
			</NuxtLink>

			<DataTable :loading="tableLoading"
					   :value="news"
					   showGridlines
					   :filters.sync="filters"
					   filterDisplay="menu"
					   :globalFilterFields="['title']"
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
					Aucune nouvelle trouvé.
				</template>
				<Column field="title" header="Titre"></Column>
				<Column headerStyle="width: 3rem" field="status" header="Status">
					<template #body="{data}">
						<span>{{data.status==='publish' ? 'Publié':'Brouillon'}}</span>
					</template>
				</Column>
				<Column headerStyle="width: 3rem" field="posted_date" header="Date">
					<template #body="{data}">
						<span>{{$moment(data.posted_date).format('DD MMM YYYY HH:mm')}}</span>
					</template>
				</Column>
				<Column headerStyle="width: 50px; text-align: center">
					<template #body="{data}">
						<NuxtLink class="p-button" :to="'/admin/nouvelles/'+data.id">
							<i class="pi pi-file-edit"></i>
						</NuxtLink>
						<Button type="button" @click="del(data.id)" class="p-button-danger" icon="pi pi-trash"></Button>
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
			news: [],
			tableLoading: true,
			filters: {}
		}
	},
	async fetch(){
		const resp = await this.$axios.$get('/news/list')
		this.news = resp.news
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
					const result = await this.$axios.$post('/news/delete', {
						token: this.$store.getters['auth/get_token'],
						id: id
					})
					if(result.success){
						this.$toast.add({severity:'success', summary: 'Succès!', detail:'Supression effectué', life: 3000});
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
