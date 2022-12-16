<template>
	<div style="margin: 1rem 0">
		<div class="dates-wrapper">
			<div class="date-field">
				<label for="debut">Date début</label>
				<Calendar id="debut" @date-select="value => debut = value" :value="debutJournee" :maxDate="new Date()"></Calendar>
			</div>
			<div class="date-field">
				<label for="fin">Date fin</label>
				<Calendar id="fin" @date-select="value => fin = value" :value="finJournee" :minDate="debut"></Calendar>
			</div>
		</div>

		<DataTable :value="jobs" class="p-datatable-sm">
			<template #header>
				<div style="text-align: left">
					<Button icon="pi pi-external-link" label="Exporter en .csv" @click="exportCSV" />
				</div>
			</template>
			<Column field="dateCreated" header="Date">
				<template #body="slotProps">
					{{$moment(slotProps.data.dateCreated).format('YYYY-MM-DD')}}
				</template>
			</Column>
			<Column field="business.business" header="Employeur"></Column>
			<Column field="title" header="Emploi"></Column>
			<Column field="status" header="Statut"></Column>
			<Column field="secteurs" header="Secteurs">
				<template #body="slotProps">
					<span v-for="(secteur, key) in slotProps.data.secteurs">{{key>0 ? ', ':''}}{{secteurs[secteur]}}</span>
				</template>
			</Column>
			<Column field="postes_dispo" header="Nb de poste"></Column>
		</DataTable>
	</div>
</template>
<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Calendar from "primevue/calendar"
import Button from "primevue/button"
import {arrayToCSVDownload} from "@/helpers/arrayToCSVDownload";
export default {
	components: {DataTable, Column,Calendar,Button},
	middleware({store}){
		if(!store.getters["filters/secteurs"])
			store.dispatch('filters/filters')
	},
	computed:{
		secteurs(){
			return this.$store.getters["filters/secteurs"]
		},
		debutJournee(){
			return this.$moment(this.debut).startOf('day').toDate()
		},
		finJournee(){
			return this.$moment(this.fin).endOf('day').toDate()
		}
	},
	data(){
		return {
			jobs: [],
			debut: this.$moment().startOf('month').toDate(),
			fin: this.$moment().toDate(),
			csv_jobs: []
		}
	},
	watch: {
		async debutJournee(){
			await this.getJobs()
		},
		async finJournee(){
			await this.getJobs()
		}
	},
	async fetch(){
		await this.getJobs()
	},
	methods: {
		async getJobs(){
			const response = await this.$axios.$post('/jobs/list', {
				withBusiness: true,
				withArchived: true,
				sort: 'dateCreated',
				filters: {
					debut: this.debutJournee,
					fin: this.finJournee
				},
				status: 'all'
			})
			this.jobs = response.jobs
		},
		async getCSVJobs(){
			const response = await this.$axios.$post('/stats/csv_emplois', {
				filters: {
					debut: this.debutJournee,
					fin: this.finJournee
				}
			})
			this.csv_jobs = response.jobs
		},
		async exportCSV(){
			await this.getCSVJobs()
			arrayToCSVDownload(this.csv_jobs, 'stats-emplois-'+this.$moment(this.debut).format('YYYY-MM-DD')+'-au-'+this.$moment(this.fin).format('YYYY-MM-DD'))
		}
	}
}
</script>
<style scoped>
.dates-wrapper{
	display: flex;
	gap: 1rem;
	margin-bottom: 1rem;
}
.date-field{
	display: flex;
	flex-direction: column;
}
.p-datatable-sm{
	font-size: .85rem
}
</style>
