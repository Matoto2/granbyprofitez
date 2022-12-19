<template>
	<Panel v-if="business.length" header="En attente d'approbation" style="margin-bottom: 1rem">
		<ul>
			<li v-for="b in business" :key="b.id">
				<NuxtLink :to="'/admin/entreprises/'+b.id">{{b.nom}}</NuxtLink>
			</li>
		</ul>
	</Panel>
</template>
<script>
import Panel from 'primevue/panel'
export default {
	components: {
		Panel
	},
	data(){
		return {
			business: []
		}
	},
	async fetch(){
		let response = await this.$axios.$post('/users/not_confirmed', {
			token: this.$store.getters["auth/get_token"]
		})
		this.business = response.data
	}
}
</script>
