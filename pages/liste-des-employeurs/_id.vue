<template>
	<div>
		<BannerPage image="/images/tempo1.jpg"></BannerPage>

		<div class="container job-wrapper">
			<div class="row-intro">
				<div class="logo-business">
					<nuxt-img v-if="user?.logo[0]?.media_details?.sizes?.full?.source_url" :src="user.logo[0].media_details.sizes.full.source_url" />
				</div>
				<div class="job-name">
					<h1>{{ user.business }}</h1>
					<div class="secteur-activite" v-if="currentSecteur"><span>Secteur d'activité : {{currentSecteur}}</span></div>
				</div>
			</div>
			<div class="details-row">
				<div class="col1">
					<div class="sect-details">
						<h2>Informations</h2>
						<div v-if="user.responsable_rh" class="section">
							<span class="title">Responsable RH</span>
							<span class="info">{{user.responsable_rh}}</span>
						</div>
						<div v-if="user.nb_employe" class="section">
							<span class="title">Bombres d'employés</span>
							<span class="info">{{user.nb_employe}}</span>
						</div>
						<div v-if="user.produits" class="section">
							<span class="title">Produits</span>
							<span v-html="user.produits.replace(/\n/g, '<br>')" class="info"></span>
						</div>
						<div class="section section-lines">
							<span class="title">Coordonnées</span>
							<span class="info" v-if="user.telephone">
								<a target="_blank" :href="'tel:'+user.telephone">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M484.6 330.6C484.6 330.6 484.6 330.6 484.6 330.6l-101.8-43.66c-18.5-7.688-40.2-2.375-52.75 13.08l-33.14 40.47C244.2 311.8 200.3 267.9 171.6 215.2l40.52-33.19c15.67-12.92 20.83-34.16 12.84-52.84L181.4 27.37C172.7 7.279 150.8-3.737 129.6 1.154L35.17 23.06C14.47 27.78 0 45.9 0 67.12C0 312.4 199.6 512 444.9 512c21.23 0 39.41-14.44 44.17-35.13l21.8-94.47C515.7 361.1 504.7 339.3 484.6 330.6zM457.9 469.7c-1.375 5.969-6.844 10.31-12.98 10.31c-227.7 0-412.9-185.2-412.9-412.9c0-6.188 4.234-11.48 10.34-12.88l94.41-21.91c1-.2344 2-.3438 2.984-.3438c5.234 0 10.11 3.094 12.25 8.031l43.58 101.7C197.9 147.2 196.4 153.5 191.8 157.3L141.3 198.7C135.6 203.4 133.8 211.4 137.1 218.1c33.38 67.81 89.11 123.5 156.9 156.9c6.641 3.313 14.73 1.531 19.44-4.219l41.39-50.5c3.703-4.563 10.16-6.063 15.5-3.844l101.6 43.56c5.906 2.563 9.156 8.969 7.719 15.22L457.9 469.7z"/></svg>
									<span>{{user.telephone}}</span>
								</a>
							</span>
							<span class="info" v-if="user.website">
								<a target="_blank" :href="user.website">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 96C0 60.65 28.65 32 64 32H448C483.3 32 512 60.65 512 96V416C512 451.3 483.3 480 448 480H64C28.65 480 0 451.3 0 416V96zM160 128H480V96C480 78.33 465.7 64 448 64H160V128zM128 64H64C46.33 64 32 78.33 32 96V128H128V64zM32 160V416C32 433.7 46.33 448 64 448H448C465.7 448 480 433.7 480 416V160H32z"/></svg>
									<span>{{user.website}}</span>
								</a>
							</span>
							<span class="info" v-if="user.email">
								<a target="_blank" :href="'mailto:'+user.email">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.6 36.9c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256C5.5 266.3-.7 277.8 .1 290s8.4 22.9 19.6 27.6L160 376v93c0 23.8 19.3 43 43 43c13.1 0 25.4-5.9 33.6-16.1l52.8-66 .1 0 114.2 47.6c9.1 3.8 19.4 3.2 28-1.6s14.5-13.3 16-23l64-416zm-253 380.2l-47 58.8c-2.1 2.6-5.3 4.1-8.6 4.1c-6.1 0-11-4.9-11-11V389.3l66.6 27.8zm43.1-16.7l-96.6-40.3L474.1 70.5 416 448 301.8 400.4zM450.5 48.8L173.6 347 32 288 450.5 48.8z"/></svg>
									<span>{{user.email}}</span>
								</a>
							</span>
							<span class="info" v-if="user.address">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M272 192C272 236.2 236.2 272 192 272C147.8 272 112 236.2 112 192C112 147.8 147.8 112 192 112C236.2 112 272 147.8 272 192zM192 240C218.5 240 240 218.5 240 192C240 165.5 218.5 144 192 144C165.5 144 144 165.5 144 192C144 218.5 165.5 240 192 240zM384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384zM192 32C103.6 32 32 103.6 32 192C32 207.6 37.43 229 48.56 255.4C59.47 281.3 74.8 309.4 92.14 337.5C126.2 392.8 166.6 445.7 192 477.6C217.4 445.7 257.8 392.8 291.9 337.5C309.2 309.4 324.5 281.3 335.4 255.4C346.6 229 352 207.6 352 192C352 103.6 280.4 32 192 32z"/></svg>
								<span>{{user.address}}<br>{{user.ville}}, {{user.code_postal}}</span>
							</span>
						</div>
					</div>
				</div>
				<div class="col2">
					<h2>À propos</h2>
					<div class="contenu-annonce" v-html="user.description"></div>

					<client-only>
						<Galleria :value="galerie"
								  :circular="true"
								  :autoPlay="true"
								  :showItemNavigators="true">
							<template #item="slotProps">
								<nuxt-img v-if="slotProps.item.itemImageSrc" :src="slotProps.item.itemImageSrc" style="height: 500px;width:100%;object-fit:cover;" />
							</template>
							<template #thumbnail="slotProps">
								<nuxt-img v-if="slotProps.item.thumbnailImageSrc" :src="slotProps.item.thumbnailImageSrc" />
							</template>
						</Galleria>
					</client-only>

					<youtube v-if="youtube_id" :id="youtube_id"></youtube>
				</div>
			</div>
		</div>

		<AutresEmplois v-if="jobs.length" :jobs="jobs"></AutresEmplois>

	</div>
</template>
<script>
import Galleria from 'primevue/galleria';
export default {
	components: {Galleria},
	data(){
		return {
			jobs: []
		}
	},
	async mounted(){
		if(this.$store.getters["filters/secteurs"].length === undefined)
			await this.$store.dispatch('filters/filters');
	},
	computed: {
		secteursObject(){
			return this.$store.getters["filters/categoriesPro"]
		},
		currentSecteur(){
			return this.user.categoriesPro ? this.secteursObject[this.user.categoriesPro]:false
		},
		galerie(){
			let images = []
			if(this.user.gallery){
				this.user.gallery.forEach(image => images.push({
					"itemImageSrc": image.media_details.sizes.full.source_url,
					"thumbnailImageSrc": image.media_details.sizes.thumbnail.source_url
				}))
			}
			return images
		},
		youtube_id(){
			let youtube_id = false
			if(this.user.youtube_link){
				const url = new URL(this.user.youtube_link)
				youtube_id = url.searchParams.get('v')
			}
			return youtube_id
		}
	},
	async asyncData({ params, $axios, error }) {
		const user = await $axios.$post(`/users/get`, {
			id: params.id
		})
		if(user.success)
			return { user: user.user }
		else
			error({ statusCode: 404, message: "Oups, cette page n'existe pas." })
	},
	async fetch(){
		const jobs = await this.$axios.$post(`/jobs/list`, {
			businessID: this.user.id,
			withBusiness: true,
		})
		this.jobs = jobs.jobs
	}
}
</script>
<style scoped>
.job-wrapper{
	background-color: #fff;
	margin-top: -22rem;
	position: relative;
	z-index: 10;
	border-radius: 10px;
	padding: 0;
	overflow: hidden;
	max-width: 1500px;
}
.row-intro,
.details-row{
	display: flex;
}
.logo-business,
.col1{
	width: 30%;
}
.col1{
	padding: 0 3rem;
}
.job-name,
.col2{
	width: 70%;
}
.job-name{
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding: 1rem 0;
}
.job-name h1{
	text-transform: uppercase;
	color: #363636;
	font-weight: 500;
	font-size: 2.5rem;
	margin: 0;
}
.logo-business img{
	height: 325px;
	width: 100%;
	padding: 3rem;
	object-fit: contain;
}
.col1 ul{
	list-style: none;
	padding-left: 0;
}
.secteur-activite span{
	border-top: 1px solid #707070;
	display: inline-block;
	margin-top: .5rem;
	padding-top: 1rem;
	font-size: 1.3rem;
}
h2{
	text-transform: uppercase;
	font-size: 1.3rem;
}
.section{
	display: flex;
	flex-direction: column;
	margin: 1.5rem 0;
}
.section .title{
	text-transform: uppercase;
	color: #006DB8;
	font-size: .85rem;
	font-weight: 700;
	display: inline-block;
	margin-bottom: .5rem
}
.section-lines .info:not(:nth-child(2)){
	border-top: 1px solid #707070;
}
.section-lines .info{
	padding: .4rem 0;
}
.section-lines .info,
.section-lines .info a{
	display: flex;
	align-items: center;
	text-decoration: none;
	font-weight: 400;
	color: #606060;
}
.section-lines .info svg{
	height: 25px;
	width: 35px;
	margin-right: .5rem;
	fill: #000;
	padding: 2px;
}
</style>

<style>
.p-galleria-thumbnail-items {
	display: flex;
	gap: 1rem;
}
.p-galleria-thumbnail-item{
	flex: initial !important;
}
</style>
