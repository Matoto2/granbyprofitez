<template>
	<div>
		<BannerPage image="/images/tempo1.jpg" h1="Offres d'emploi"></BannerPage>
		<JobSearch @query="query"></JobSearch>

		<div class="container total-jobs">
			<span>{{totalItems}} emplois trouvé{{totalItems > 1 ? 's':''}}</span>
		</div>
		<div ref="joblist" id="joblist" class="is-anchor"></div>
		<JobsDisplay :jobs="jobs"></JobsDisplay>
		<Paginator v-if="totalItems" :first="offset" :rows="perPage" :totalRecords="totalItems" @page="onPage($event)"></Paginator>
	</div>
</template>
<script>
import Paginator from 'primevue/paginator'
export default {
	components: {
		Paginator
	},
	data(){
		return {
			jobs: [],
			filters: {},
			perPage: 100,
			totalItems: 0,
		}
	},
	async fetch(){
		await this.query()
	},
	computed: {
		page(){
			return this.$store.getters["filters/currentPage"] ?? 1
		},
		offset(){
			return (this.page-1) * this.perPage
		}
	},
	methods: {
		async onPage(event){
			await this.$store.dispatch('filters/storeCurrentPage', (event.page + 1))
			this.$refs.joblist.scrollIntoView()
			await this.query()
		},
		async query(filters){
			this.filters = filters
			let jobs = await this.$axios.$post('/jobs/list', {
				withBusiness: true,
				filters: this.filters,
				pagination: {
					page: this.page,
					perPage: this.perPage
				}
			})
			this.totalItems = jobs.pagination.totalItems
			this.jobs = jobs.jobs
		}
	}
}
</script>
<style scoped>
.total-jobs{
	max-width: 1500px;
	display: flex;
	justify-content: flex-end;
	margin-top: 2rem;
	font-weight: 600
}
</style>
