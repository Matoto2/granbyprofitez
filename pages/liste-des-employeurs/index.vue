<template>
	<div>
		<BannerPage image="/images/liste-des-employeurs-bg.jpg" h1="Liste des employeurs"></BannerPage>
		<div class="container main-wrapper">
			<p class="main-text">Les entreprises manufacturières et commerciales ont des emplois de qualité à offrir. Trouvez un emploi passionnant et profitez d’une qualité de vie exceptionnelle.</p>
			<ul>
				<li v-for="business in businesses">
					<NuxtLink :to="{name: 'liste-des-employeurs-id', params: {id: business.id}}">{{business.business}}</NuxtLink>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	async asyncData({$axios}){
		const response = await $axios.$post('/users/liste-entreprises')
		return {businesses: response.data}
	}
}
</script>

<style scoped>
.main-wrapper{
	background: #fff;
	margin-top: -10rem;
	position: relative;
	z-index: 10;
	max-width: 1500px;
	border-radius: 10px;
	padding: 3rem 4rem;
}
.main-text{
	font-size: 1.4rem;
	text-align: center;
	line-height: 1.3;
	width: 100%;
	max-width: 800px;
	margin: 0 auto 3rem;
}
ul{
	padding: 0;
	list-style: none;
}
li a{
	display: block;
	font-weight: 500;
	text-decoration: none;
	padding: .4rem 1rem;
	transition: .15s;
	color: #606060;
}
li:nth-child(even) a{
	background-color: #F8F6E9;
}
li a:hover{
	background-color: #363636;
	color: #fff;
}
</style>
