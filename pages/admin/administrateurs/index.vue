<template>
	<div>
		<AdminLayout title="Administrateurs">
			<NuxtLink class="p-button p-component" to="/admin/administrateurs/add">
				Ajouter +
			</NuxtLink>

			<DataTable :loading="tableLoading"
					   :paginator="true"
					   :rows="10"
					   :value="users"
					   showGridlines
					   :filters.sync="filters"
					   filterDisplay="menu"
					   :globalFilterFields="['nameFirst','nameLast','email']"
					   class="p-datatable-sm"
					   responsiveLayout="scroll">
				<template #header>
					<div class="datatable-header-row">
						<InputText v-model="filters['global'].value" placeholder="Recherche" />
					</div>

				</template>
				<template #empty>
					Aucun admin trouvé.
				</template>
				<Column field="nameFirst" header="Prénom"></Column>
				<Column field="nameLast" header="Nom"></Column>
				<Column field="email" header="Courriel"></Column>
				<Column :headerStyle="{width: '109px', 'text-align': 'center'}">
					<template #body="{data}">
						<NuxtLink :to="'/admin/administrateurs/'+data.id">
							<Button type="button" icon="pi pi-file-edit"></Button>
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
			users: [],
			tableLoading: true,
			filters: {}
		}
	},
	async fetch(){
		const resp = await this.$dataApi.getAdmins()
		this.users = resp.users
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
					const result = await this.$dataApi.deleteUser(id)
					if(result.success){
						this.$toast.add({severity:'success', summary: 'Succès!', detail:'suppression effectué', life: 3000});
					} else{
						this.$toast.add({severity:'error', summary: 'Erreur!', detail:result.error, life: 3000});
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
