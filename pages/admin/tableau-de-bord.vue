<template>
	<div>
		<AdminLayout title="Tableau de bord">
			<Panel>
				<div class="p-fluid grid formgrid">
					<div class="p-field col-12 md:col-4"></div>
					<Chart type="pie" :data="chartData" :options="chartOptions" />
				</div>
			</Panel>

		</AdminLayout>
	</div>
</template>

<script>
import Panel from "primevue/panel"
import Chart from 'primevue/chart'
export default {
	middleware: 'auth',
	meta: {
		auth: {role: ['admin']}
	},
	components: {
		Chart,
		Panel
	},
	data(){
		return {
			chartData: {
				labels: ['A','B','C'],
				datasets: [
					{
						data: [300, 50, 100],
						backgroundColor: [
							"#42A5F5",
							"#66BB6A",
							"#FFA726"
						],
						hoverBackgroundColor: [
							"#64B5F6",
							"#81C784",
							"#FFB74D"
						]
					}
				]
			},
			chartOptions: {
				legend: {
					labels: {
						fontColor: '#495057'
					}
				}
			}
		}
	}
}
</script>
