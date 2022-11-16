<template>
	<div>
		<AdminLayout title="Nouvelles">
			<DataTable :value="news">
				<Column headerStyle="width: 3rem" field="date" header="Date"></Column>
				<Column field="title" header="Titre"></Column>
				<Column headerStyle="width: 50px; text-align: center">
					<template #body>
						<Button type="button" icon="pi pi-file-edit"></Button>
						<Button type="button" class="p-button-danger" icon="pi pi-trash"></Button>
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
			news: [
				{id: 1, title: 'test 1', date: '2022-01-01'},
				{id: 1, title: 'test 2', date: '2022-01-02'},
			]
		}
	}
}
</script>
