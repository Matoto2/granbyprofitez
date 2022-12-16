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

		<DataTable :value="stats" sortField="date" :sortOrder="1" class="p-datatable-sm" ref="dtSentCv">
			<template #header>
				<div style="text-align: left">
					<Button icon="pi pi-external-link" label="Exporter en .csv" @click="exportCSV" />
				</div>
			</template>
			<Column field="date" header="Date" :sortable="true">
				<template #body="slotProps">
					{{$moment(slotProps.data.date).format('YYYY-MM-DD')}}
				</template>
			</Column>
			<Column field="business" header="Employeur"></Column>
			<Column field="job" header="Emploi"></Column>
			<Column field="name" header="Nom"></Column>
			<Column field="phone" header="Téléphone"></Column>
			<Column field="postal_code" header="Code postal"></Column>
			<Column field="email" header="Courriel"></Column>
			<Column field="files" header="Fichiers">
				<template #body="slotProps">
					<div v-for="file in slotProps.data.files">
						<a target="_blank" :href="file.url ?? file.source_url">{{(file.name ?? file.title.rendered).substring(0,10)}}</a>
					</div>
				</template>
			</Column>
			<Column field="agreed" header="Accepté">
				<template #body="slotProps">
					{{slotProps.data.agreed ? 'Oui':'Non'}}
				</template>
			</Column>
		</DataTable>
	</div>

</template>
<script>
import DataTable from "primevue/datatable"
import Column from "primevue/column"
import Calendar from "primevue/calendar"
import Button from "primevue/button"
import {arrayToCSVDownload} from "@/helpers/arrayToCSVDownload";
export default {
	components: {
		DataTable,Column,Calendar,Button
	},
	computed:{
		debutJournee(){
			return this.$moment(this.debut).startOf('day').toDate()
		},
		finJournee(){
			return this.$moment(this.fin).endOf('day').toDate()
		}
	},
	data(){
		return {
			debut: this.$moment().startOf('month').toDate(),
			fin: this.$moment().toDate(),
			stats: []
		}
	},
	watch: {
		async debutJournee(){
			await this.getCV()
		},
		async finJournee(){
			await this.getCV()
		}
	},
	async fetch(){
		await this.getCV()
	},
	methods: {
		async getCV(){
			const response = await this.$axios.$post('/stats/sent_cv', {
				debut: this.debutJournee,
				fin: this.finJournee
			})
			this.stats = response.data
		},
		async exportCSV(){
			arrayToCSVDownload(this.stats, 'stats-cv-'+this.$moment(this.debut).format('YYYY-MM-DD')+'-au-'+this.$moment(this.fin).format('YYYY-MM-DD'))
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
