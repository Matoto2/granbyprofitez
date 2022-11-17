<template>
	<header id="header">
		<ul>
			<li><NuxtLink to="/">Accueil</NuxtLink></li>
			<li v-if="!is_loggedin"><NuxtLink to="/connexion">Se connecter</NuxtLink></li>
			<li v-if="is_loggedin && is_admin"><NuxtLink to="/admin/tableau-de-bord">Tableau de bord</NuxtLink></li>
			<li v-if="is_loggedin && is_business"><NuxtLink to="/gestion/tableau-de-bord">Tableau de bord</NuxtLink></li>
			<li v-if="is_loggedin"><LogoutBtn></LogoutBtn></li>
		</ul>
	</header>
</template>
<script>
export default {
	computed: {
		is_loggedin(){
			return this.$store.state.auth.access_token
		},
		is_admin(){
			return this.$store.state.auth.current_user.role === 'admin'
		},
		is_business(){
			return this.$store.state.auth.current_user.role === 'business'
		}
	}
}
</script>
<style scoped>
#header{
	background-color: #f2f2f2;
}
</style>
