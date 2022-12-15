<template>
	<div class="p-fluid grid formgrid">
		<div class="col-12">
			<h3>Inscriptions aux alertes emplois par filtres</h3>
		</div>
		<div class="md:col-6">
			<TableStatsAlert :value="secteurs" :total="total" header="Secteurs"></TableStatsAlert>
		</div>
		<div class="md:col-6">
			<TableStatsAlert :value="horaire" :total="total" header="Horaire"></TableStatsAlert>
		</div>
		<div class="md:col-6">
			<TableStatsAlert :value="categoriesPro" :total="total" header="Cat. Prof."></TableStatsAlert>
		</div>
		<div class="md:col-6">
			<TableStatsAlert :value="type_emploi" :total="total" header="Type d'emploi"></TableStatsAlert>
		</div>

		<div class="p-datatable-sm p-datatable p-component p-datatable-responsive-stack">
			<div class="p-datatable-wrapper">
				<table class="p-datatable-table">
					<tbody class="p-datatable-tbody">
					<tr>
						<td><strong>Récurrence quotidienne</strong></td>
						<td>{{recurrence.daily}}</td>
					</tr>
					<tr>
						<td><strong>Récurrence hebdomadaire</strong></td>
						<td>{{recurrence.weekly}}</td>
					</tr>
					<tr>
						<td><strong>International</strong></td>
						<td>{{international}}</td>
					</tr>
					<tr>
						<td><strong>Total d'inscrits</strong></td>
						<td>{{total}}</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>


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
	data(){
		return {
			secteurs: [],
			categoriesPro: [],
			type_emploi: [],
			horaire: [],
			international: 0,
			recurrence: {},
			total: 0,
			secteurs_data: {},
			categoriesPro_data: {},
			type_emploi_data: {},
			horaire_data: {}
		}
	},
	async fetch(){
		const response = await this.$axios.$get('/stats/alertes_emplois')
		this.secteurs = response.secteurs
		this.categoriesPro = response.categoriesPro
		this.type_emploi = response.type_emploi
		this.horaire = response.horaire
		this.international = response.international
		this.recurrence = response.recurrence
		this.total = response.totaux
		this.secteurs_data = response.secteurs_data
		this.categoriesPro_data = response.categoriesPro_data
		this.type_emploi_data = response.type_emploi_data
		this.horaire_data = response.horaire_data
	}
}
</script>
