<template>
	<div style="margin: 1rem 0">
		<DataTable :value="value" class="p-datatable-sm">
			<Column field="label" :header="header"></Column>
			<Column field="qty" header="Insc." :headerStyle="{width: '3rem'}"></Column>
			<Column header="%" :headerStyle="{width: '3rem'}">
				<template #body="slotProps">
					{{pour(slotProps.data.qty)}}%
				</template>
			</Column>
		</DataTable>
	</div>

</template>
<script>
import DataTable from "primevue/datatable"
import Column from "primevue/column"
export default {
	components: {
		DataTable,
		Column
	},
	props: ["value", "total", "header"],
	methods: {
		pour(qty){
			return ((qty / this.total) * 100).toFixed(1)
		}
	}
}
</script>
