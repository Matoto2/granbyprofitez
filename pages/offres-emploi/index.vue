<template>
	<div>
		<BannerPage image="/images/tempo1.jpg" h1="Offres d'emploi"></BannerPage>
		<JobSearch @query="query"></JobSearch>

		<JobsDisplay :jobs="jobs"></JobsDisplay>
	</div>
</template>
<script>
export default {
	data(){
		return {
			jobs: [],
			filters: {},
		}
	},
	async fetch(){
		await this.query()
	},
	methods: {
		async query(filters){
			this.filters = filters
			let jobs = await this.$axios.$post('/jobs/list', {withBusiness: true, filters: this.filters})
			this.jobs = jobs.jobs
		}
	}
}
</script>
