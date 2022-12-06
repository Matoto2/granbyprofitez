<template>
	<div>
		<BannerPage image="/images/tempo1.jpg"></BannerPage>

		<div class="container job-wrapper">
			<div class="row-intro">
				<div class="logo-business">
					<img :src="job.business?.logo?.sizes?.large?.source_url" alt="">
				</div>
				<div class="job-name">
					<h1>{{ job.title }}</h1>
				</div>
			</div>
			<div class="details-row">
				<div class="col1">
					<div class="sect-details">
						<h2>Détails</h2>
						<span>Compagnie</span>
						<h3>{{ job.business.business }}</h3>
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
					<div class="row-postuler">
						<button type="button">IMPRIMER <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42"><g transform="translate(-1055.516 -667)"><circle cx="21" cy="21" r="21" transform="translate(1055.516 667)" fill="#363636"/><path d="M17.552,13.5H4.05a1.35,1.35,0,0,0-1.35,1.35v5.4A1.35,1.35,0,0,0,4.05,21.6h13.5a1.35,1.35,0,0,0,1.35-1.35v-5.4A1.349,1.349,0,0,0,17.552,13.5Zm0,6.751H4.05v-5.4h13.5ZM18.9,8.1V2.98a1.351,1.351,0,0,0-.4-.955L16.876.4a1.41,1.41,0,0,0-.952-.4H5.4A2.7,2.7,0,0,0,2.7,2.7V8.1A2.7,2.7,0,0,0,0,10.8v4.726a.675.675,0,0,0,1.35,0V10.8A1.35,1.35,0,0,1,2.7,9.451H18.9a1.35,1.35,0,0,1,1.35,1.35v4.726a.675.675,0,0,0,1.35,0V10.8A2.7,2.7,0,0,0,18.9,8.1Zm-1.35,0H4.05V2.7A1.35,1.35,0,0,1,5.4,1.35H15.923l1.629,1.63Zm.675,2.363a1.013,1.013,0,1,0,1.013,1.013A1.013,1.013,0,0,0,18.227,10.464Z" transform="translate(1065.715 676.699)" fill="#fff"/></g></svg></button>
						<button type="button">PARTAGER <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42"><g transform="translate(-1218 -667)"><circle cx="21" cy="21" r="21" transform="translate(1218 667)" fill="#363636"/><path d="M23.152,36.134a4.133,4.133,0,0,1-4.134,4.134,3.984,3.984,0,0,1-3-1.338l-7.8,3.948a4.31,4.31,0,0,1,0,1.4l7.8,3.9a4.135,4.135,0,1,1-1.132,2.842,3.944,3.944,0,0,1,.253-1.432l-7.53-3.762a4.134,4.134,0,1,1,0-4.5l7.53-3.762a4.135,4.135,0,1,1,8.015-1.432ZM4.088,46.057a2.481,2.481,0,1,0,0-4.961,2.481,2.481,0,1,0,0,4.961Zm14.93-12.4A2.481,2.481,0,1,0,21.5,36.134,2.481,2.481,0,0,0,19.018,33.654Zm0,19.845a2.481,2.481,0,1,0-2.481-2.481A2.481,2.481,0,0,0,19.018,53.5Z" transform="translate(1225.649 644.699)" fill="#fff"/></g></svg></button>
						<a href="#" class="btn">Postulez maintenant</a>
					</div>

					<div class="contenu-annonce" v-html="job.content"></div>
				</div>
			</div>
		</div>

		<div class="container postuler-section">
			<h2 class="th2">Postulez maintenant</h2>
			<CVForm></CVForm>
		</div>

	</div>
</template>
<script>
export default {
	async asyncData({ params, $axios, error }) {
		const job = await $axios.$post(`/jobs/get`, {
			id: params.id,
			withBusiness: true,
		})
		if(job.success)
			return { job: job.data }
		else
			error({ statusCode: 404, message: "Oups, cette page n'existe pas." })
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
	margin-top: 108px;
}
.job-name,
.col2{
	width: 70%;
}
.job-name{
	background-color: #363636;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem 4rem;
}
.job-name h1{
	text-transform: uppercase;
	text-align: center;
	color: #fff;
	font-weight: 500;
	font-size: 2.5rem;
}
.row-postuler{
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 2rem 3rem 1rem;
}
.row-postuler button{
	outline: none;
	border: none;
	display: inline-flex;
	align-items: center;
	background-color: transparent;
	margin-left: 1.2rem;
}
.row-postuler button svg{
	margin-left: 1rem;
}
.row-postuler a{
	margin-left: 1.5rem;
}
.logo-business img{
	height: 325px;
	width: 100%;
	padding: 3rem;
	object-fit: contain;
}
.col1 ul,
.col2 ul{
	list-style: none;
	padding-left: 0;
}
</style>

<style>
.contenu-annonce{
	line-height: 1.6;
	padding-bottom: 4rem;
}
.contenu-annonce h2{
	position: relative;
	padding-left: 2rem;
	font-size: 1.5rem;
	font-weight: 500;
	color: #000;
	margin-bottom: 2rem;
}
.contenu-annonce h2:not(:first-child){
	margin-top: 3rem;
}
.contenu-annonce h2::before{
	content: '';
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13.838' height='39.351' viewBox='0 0 13.838 39.351'%3E%3Cpath d='M1151.557,2026.829H1143.7l5.984-39.351h7.854l-3.3,21.683Z' transform='translate(-1143.703 -1987.478)' fill='%23eda008'/%3E%3C/svg%3E%0A");
	width: 16px;
	height: 40px;
	background-size: contain;
	background-repeat: no-repeat;
	display: inline-block;
	position: absolute;
	top: 0;
	left: 0;
}
.contenu-annonce ul{
	padding-left: 0;
}
.contenu-annonce ul li{
	list-style: none;
}
.contenu-annonce ul li::before{
	content: '';
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 11 11'%3E%3Crect width='11' height='11' fill='%23363636'/%3E%3C/svg%3E%0A");
	background-size: 11px;
	background-repeat: no-repeat;
	width: 11px;
	height: 11px;
	display: inline-block;
	margin-right: .8rem;
}
.th2{
	font-size: 2rem;
	font-weight: 500;
	color: #000;
	text-align: center;
}
.postuler-section{
	margin-bottom: 3rem;
}
</style>
