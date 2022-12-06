<template>
	<div class="homepage">
		<HomeBanner></HomeBanner>

		<HomeSearch></HomeSearch>

		<BarreTitreTexte>
			<template #title>
				Profitez<span><TypeWrite :displayTextArray="displayTextArray"></TypeWrite></span>
			</template>
			<template>
				Quelques lignes de texte pour améliorer le référencement naturel sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua at.
			</template>
		</BarreTitreTexte>

		<HomeImgLinks></HomeImgLinks>

		<div class="home-jobs-slider">
			<JobsSlider :jobs="jobs">
				<template #title>
					<h2 class="h2">Nouvelles offres d'emploi</h2>
				</template>
			</JobsSlider>
			<div class="btn-wrapper">
				<NuxtLink :to="{name: 'offres-emploi'}" class="btn">Tous les emplois disponibles</NuxtLink>
			</div>
		</div>

		<div class="home-map-services">
			<h2 class="h2">Consultez la carte des services à Granby et région</h2>
			<client-only>
				<HomeMap></HomeMap>
			</client-only>
		</div>

		<HomeGalerie></HomeGalerie>

	</div>
</template>

<script>
export default {
	data(){
		return {
			displayTextArray: [
				"des grands espaces",
				"des opportunités",
				"des emplois",
				"de la vie",
				"de la nature",
			],
		}
	},
	async asyncData({ $axios }) {
		const jobsToShow = 10
		const jobs = await $axios.$post(`/jobs/list`, {
			withBusiness: true,
			pagination: {
				page: 1,
				perPage: jobsToShow
			}
		})
		return { jobs: jobs.jobs ?? [] }
	}
}
</script>
<style scoped>
.home-jobs-slider{
	background-color: #3A7DBB;
	padding: 8rem 0;
}
.home-jobs-slider h2{
	color: #fff;
	margin-top: 0;
}
.home-jobs-slider .btn-wrapper{
	display: flex;
	justify-content: center;
	margin-top: 3rem;
}
.home-map-services h2{
	text-align: center;
	padding: 3rem 0;
}
</style>
