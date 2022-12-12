<template>
	<div>
		<Chart type="pie" :data="chartData" :options="chartOptions" :plugins="plugins" />
	</div>
</template>
<script>
import Chart from "primevue/chart";
import ChartDataLabels from 'chartjs-plugin-datalabels';

export default {
	props: ['chartData', 'chartOptions'],
	components: {
		Chart,
	},
	data(){
		return {
			plugins: [ChartDataLabels]
		}
	}
}
</script>
