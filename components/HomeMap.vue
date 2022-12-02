<template>
	<div class="grid-home-map">
		<InteractiveMap v-if="mapLocations.length"
						:locations="mapLocations"
						:centerLat="45.40372"
						:centerLng="-72.73419"
		></InteractiveMap>
		<div class="right">
			<div class="filter">
				<span>Filtre:</span>
				<Dropdown v-model="selectedCategory" optionValue="value" optionLabel="label" :options="categories"></Dropdown>
			</div>
			<div class="liste-entreprises">
				<div v-for="location in mapLocations">
					<h2>{{location.name}}</h2>
					<address>{{ location.address }},<br>{{ location.city }}, {{location.province}} {{location.postal_code}}</address>
					<div class="contact">
						<div><a v-if="location.phone_1" :href="'tel:'+location.phone_1">Téléphone: {{location.phone_1}}</a></div>
						<div><a v-if="location.email_1" :href="'mailto:'+location.email_1">Courriel: {{location.email_1}}</a></div>
						<div><a v-if="location.website" target="_blank" :href="location.website">Voir le site web</a></div>
					</div>
					<div>{{location.description}}</div>
					<button v-if="location.lat" type="button">Voir sur la carte</button>
				</div>
			</div>
		</div>

	</div>

</template>
<script>
import Dropdown from "primevue/dropdown";

export default {
	components: {
		Dropdown
	},
	data(){
		return {
			selectedCategory: 0,
			categories: [],
			mapLocations: []
		}
	},
	async fetch(){
		this.mapLocations = this.$store.getters["locations/all_locations"]
		if(!this.mapLocations.length){
			await Promise.all([
				this.$store.dispatch('locations/storeAllLocations'),
				this.$store.dispatch('locations/storeCategories'),
			])

			this.mapLocations = this.$store.getters["locations/all_locations"]
		}

		const storecategories = this.$store.getters["locations/categories"]

		const cats = Object.keys(storecategories).map(v => {
			return {
				value: v,
				label: storecategories[v]
			}
		})
		cats.unshift({
			value: 0,
			label: 'Toutes les catégories'
		})
		this.categories = cats

	},
}
</script>
<style scoped>
.grid-home-map{
	display: grid;
	grid-template-columns: 1fr 1fr;
}
.liste-entreprises{
	margin-left: 3rem;
	height: 80%;
	overflow: auto
}
.liste-entreprises > div{
	border-bottom: 1px solid #c9ccd0;
	padding: 2rem;
}
.liste-entreprises h2{
	margin-top: 0;
}
.right{
	height: 70vh;
}
.right .filter{
	height: 20%;
	display: flex;
	align-items: center;
	background-color: #f2f2f2;
	padding-left: 3rem;
}
</style>
