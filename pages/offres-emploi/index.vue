<template>
	<div>
		<BannerPage image="/images/tempo1.jpg" h1="Offres d'emploi"></BannerPage>
		<JobSearch @query="query"></JobSearch>

		<div class="container row-top total-jobs">
			<span>{{totalItems}} emplois trouvé{{totalItems > 1 ? 's':''}}</span>
		</div>
		<div class="container row-top sort-row">
			<Dropdown :value="sort" @change="onSort" :options="sortOptions" optionLabel="label" optionValue="value"></Dropdown>
		</div>
		<div ref="joblist" id="joblist" class="is-anchor"></div>
		<JobsDisplay :jobs="jobs"></JobsDisplay>
		<Paginator v-if="totalItems" :first="offset" :rows="perPage" :totalRecords="totalItems" @page="onPage($event)"></Paginator>
	</div>
</template>
<script>
import Paginator from 'primevue/paginator'
import Dropdown from 'primevue/dropdown'
export default {
	components: {
		Paginator, Dropdown
	},
	data(){
		return {
			jobs: [],
			filters: {},
			sortOptions: [
				{value: 'dateRemonte', label: 'Trier par défaut'},
				{value: 'dateCreated', label: 'Trier par nouveauté'}
			],
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
		sort(){
			return this.$store.getters["sort/get_sorting"]
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
		async onSort(event){
			await this.$store.dispatch('sort/storeSorting', event.value)
			await this.query()
		},
		async query(filters){
			this.filters = filters
			let jobs = await this.$axios.$post('/jobs/list', {
				withBusiness: true,
				filters: this.filters,
				sort: this.sort,
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
.row-top{
	max-width: 1500px;
	display: flex;
	justify-content: flex-end;
}
.total-jobs{
	margin-top: 2rem;
	font-weight: 600
}
.sort-row{
	margin-top: 1rem;
}
</style>
