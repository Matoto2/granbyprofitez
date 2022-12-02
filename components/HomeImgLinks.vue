<template>
	<div class="grid-img-links">
		<div class="container">
			<NuxtLink v-for="link in links"
					  :key="link.title"
					  :to="link.link">
				<img :src="link.img">
				<div class="infobox">
					<h2>{{ link.title }}</h2>
					<div class="hoverText">
						<span v-html="link.hoverText"></span>
						<div class="linkarrow">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-v-630ebb82=""><path d="M443.7 266.8l-165.9 176C274.5 446.3 269.1 448 265.5 448c-3.986 0-7.988-1.375-11.16-4.156c-6.773-5.938-7.275-16.06-1.118-22.59L393.9 272H16.59c-9.171 0-16.59-7.155-16.59-15.1S7.421 240 16.59 240h377.3l-140.7-149.3c-6.157-6.531-5.655-16.66 1.118-22.59c6.789-5.906 17.27-5.469 23.45 1.094l165.9 176C449.4 251.3 449.4 260.7 443.7 266.8z" data-v-630ebb82=""></path></svg>
						</div>
					</div>
				</div>
			</NuxtLink>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			links: [
				{
					link: '#',
					img: '/images/deposit1.jpg',
					title: "Entreprise",
					hoverText: "Recrutement <br>à l'international <br>et accompagnement"
				},
				{
					link: '#',
					img: '/images/deposit1.jpg',
					title: "Candidat international",
					hoverText: "Trouve un emploi <br>au Québec"
				},
				{
					link: '#',
					img: '/images/deposit1.jpg',
					title: "Étudiant international",
					hoverText: "Planifie ton <br>projet d'étude"
				}
			]
		}
	}
}
</script>
<style scoped>
.grid-img-links{
	position: relative;
	padding-bottom: 7rem
}
.grid-img-links .container{
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 2rem;
}
.grid-img-links::after{
	content: '';
	width: 100%;
	height: 55%;
	background-color: #ECF0F5;
	display: block;
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: -2;
	clip-path: polygon(0 20%, 100% 0, 100% 100%, 0% 100%);
}
a {
	position: relative;
	height: 730px;
	display: flex;
	align-items: flex-end;
	text-decoration: none;
	overflow: hidden;
}
img {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: -1;
}
.infobox {
	position: relative;
	background-color: rgba(65, 65, 65, 0.8);
	color: #fff;
	width: 100%;
	padding: 1.5rem 2.5rem;
	height: 181px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	transition: .5s;
}
a:hover .infobox {
	height: 365px;
}
h2 {
	font-size: 2.3rem;
	text-transform: uppercase;
	font-weight: 500;
	margin: 0;
	transition: .3s;
}
a:hover h2 {
	opacity: 0;
}
.hoverText {
	position: absolute;
	top: 2.5rem;
	left: 2.5rem;
	text-transform: uppercase;
	font-size: 1.6rem;
	font-weight: 600;
	opacity: 0;
	transition: .3s
}
a:hover .hoverText {
	opacity: 1;
}
.linkarrow {
	margin-top: 1.5rem;
}
.linkarrow svg {
	height: 40px;
	fill: #EDA008;
}
</style>
