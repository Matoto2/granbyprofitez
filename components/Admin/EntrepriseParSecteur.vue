<template>
	<div>
		<h3 class="text-center">Entreprises par secteur</h3>
		<PieChart :chartData="chartData" :chartOptions="chartOptions"></PieChart>
	</div>
</template>
<script>
export default {
	data(){
		return {
			chartData: {
				labels: [],
				datasets: [
					{
						data: [],
						backgroundColor: []
					}
				]
			},
			chartOptions: {
				legend: {
					labels: {
						fontColor: '#495057'
					}
				},
				plugins: {
					datalabels: {
						formatter: (value, ctx) => {
							let sum = ctx.dataset.data.length;
							return (value * 100 / sum).toFixed(2) + "%";
						},
						color: '#fff',
					}
				}
			}
		}
	},
	async fetch(){
		let response = await this.$axios.get('/stats/totaux_secteurs')
		let data = []
		let labels = []
		const bgcolors = []
		if(response.data.success){
			const colors = ["#003f5c","#d45087","#665191","#a05195","#f95d6a","#2f4b7c","#ff7c43","#ffa600"]
			const secteurs = await this.$store.getters["filters/secteurs"]
			const keys = Object.keys(response.data.data)
			keys.forEach((key) => {
				labels.push(secteurs[key])
				data.push(response.data.data[key].length)
				bgcolors.push(colors[key])
			})

			this.chartData = {
				labels: labels,
				datasets: [
					{
						data: data,
						backgroundColor: bgcolors
					}
				]
			}
		}

	}
}
</script>
