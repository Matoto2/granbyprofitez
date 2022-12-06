<template>
	<div>
		<BannerPage image="/images/tempo1.jpg"></BannerPage>

		<div class="container job-wrapper">
			<div class="row-intro">
				<div class="logo-business">
					<img :src="user?.logo?.sizes?.large?.source_url" alt="">
				</div>
				<div class="job-name">
					<h1>{{ user.business }}</h1>
				</div>
			</div>
			<div class="details-row">
				<div class="col1">
					<div class="sect-details">
						<h2>Détails</h2>
						<span>Compagnie</span>
						<h3>{{ user.business }}</h3>
						<ul>
							<li>SECTEURS D’ACTIVITÉ : ALIMENTATION / BOISSONS</li>
						</ul>
					</div>
					<div class="sect-informations">
						<h2>Informations</h2>
						<ul>
							<li>Spécifications reliées à l’emploi : Permanent</li>
						</ul>
					</div>
				</div>
				<div class="col2">
					<div class="contenu-annonce" v-html="user.about"></div>
				</div>
			</div>
		</div>

	</div>
</template>
<script>
export default {
	async asyncData({ params, $axios, error }) {
		const user = await $axios.$post(`/users/get`, {
			id: params.id
		})
		if(user.success)
			return { user: user.user }
		else
			error({ statusCode: 404, message: "Oups, cette page n'existe pas." })
	}
}
</script>
