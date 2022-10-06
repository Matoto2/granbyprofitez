<template>
	<header id="header">
		{{$store.state.auth}}
		<ul>
			<li><NuxtLink to="/">Accueil</NuxtLink></li>
			<li v-if="!is_loggedin"><NuxtLink to="/connexion">Se connecter</NuxtLink></li>
			<li v-if="is_loggedin"><NuxtLink to="/tableau-de-bord">Tableau de bord</NuxtLink></li>
			<li v-if="is_loggedin"><LogoutBtn></LogoutBtn></li>
		</ul>
	</header>
</template>
<script>
export default {
	computed: {
		is_loggedin(){
			return this.$store.state.auth.access_token
		}
	}
}
</script>
<style>
#header{
	background-color: #f2f2f2;
}
</style>
