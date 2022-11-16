<template>
	<div>
		<AdminLayout title="Utilisateurs">
			<DataTable :value="users">
				<Column headerStyle="width: 3rem" field="id" header="ID"></Column>
				<Column field="name" header="Nom"></Column>
				<Column field="role" header="Rôle"></Column>
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
		Button
	},
	data(){
		return {
			users: [
				{
					id: '12342131123-1231231-21312',
					name: 'Martin Carpentier',
					role: 'admin',
				},
				{
					id: '323232323-1231231-21312',
					name: 'Bob Smith',
					role: 'business',
				},
				{
					id: '42342232131123-1233213211231-21312',
					name: 'Yvon Brulé',
					role: 'business',
				}
			]
		}
	}
}
</script>
