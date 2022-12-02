<template>
	<div class="box-carte-interactive">
		<GMap
			ref="gMap"
			:cluster="{options: {styles: clusterStyle}}"
			:center="{lat: centerLat, lng: centerLng}"
			:options="{fullscreenControl: false, streetViewControl: false, mapTypeControl: false, zoomControl: true, gestureHandling: 'cooperative'}"
			:zoom="12"
			@bounds_changed="checkForMarkers"
		>
			<GMapMarker
				v-for="location in locations"
				:key="location.id"
				:position="{lat: location.lat, lng: location.lng}"
				@click="currentLocation = location"
			>
				<GMapInfoWindow>
					<strong class="business_name">{{ location.name }}</strong>
					<address>{{ location.address }},<br>{{ location.city }}, {{location.province}} {{location.postal_code}}</address>
					<div class="contact">
						<div><a v-if="location.phone_1" :href="'tel:'+location.phone_1">Téléphone: {{location.phone_1}}</a></div>
						<div><a v-if="location.email_1" :href="'mailto:'+location.email_1">Courriel: {{location.email_1}}</a></div>
						<div><a v-if="location.website" target="_blank" :href="location.website">Voir le site web</a></div>
					</div>
					<div>{{location.description}}</div>
				</GMapInfoWindow>
			</GMapMarker>
		</GMap>
	</div>
</template>
<script>
export default {
	props: ['locations', 'centerLat', 'centerLng'],
	data() {
		return {
			currentLocation: {},
			locationsVisibleOnMap: "",
			clusterStyle: [
				{
					url:
						"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
					width: 56,
					height: 56,
					textColor: "#fff"
				}
			],
		};
	},

	methods: {
		checkForMarkers() {
			this.locations.forEach((location, i) => {
				location.visible = this.$refs.gMap.map
					.getBounds()
					.contains(this.$refs.gMap.markers[i].getPosition());
			});

			this.locationsVisibleOnMap = this.locations
				.filter(l => l.visible)
				.map(l => l.name)
				.join(", ");
		}
	}

};

</script>
<style scoped>
.box-carte-interactive{
	position: relative;
}
.contact{
	margin: 1rem 0;
}
.contact a{
	text-decoration: none;
	padding: .2rem 0;
	display: inline-block;
}
.business_name{
	font-size: 1rem;
}
</style>
