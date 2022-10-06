<template>
	<div>
		<h1>Bienvenue {{current_user}}</h1>
		<NuxtLink to="/">Retour à l'accueil</NuxtLink>
	</div>
</template>

<script>
export default {
	middleware: 'auth',
	computed: {
		current_user(){
			return this.$store.state.auth.current_user.firstname
		}
	}
}
</script>
