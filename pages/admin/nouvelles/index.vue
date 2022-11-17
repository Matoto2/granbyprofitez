<template>
	<div>
		<AdminLayout title="Nouvelles">
			<NuxtLink class="p-button p-component" to="/admin/nouvelles/add">
				Ajouter +
			</NuxtLink>

			<DataTable :loading="tableLoading" :value="news">
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
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Button from 'primevue/button';

export default {
	middleware: 'auth',
	meta: {
		auth: {role: ['admin']}
	},
	components: {
		DataTable,
		Column,
		Button,
	},
	data(){
		return {
			news: [],
			tableLoading: true,
		}
	},
	async fetch(){
		const resp = await this.$axios.$get('/news/list')
		this.news = resp.news
		this.tableLoading = false
	},
	methods: {
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
