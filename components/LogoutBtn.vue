<template>
	<Button @click="logout">Se déconnecter</Button>
</template>
<script>
export default {
	components: {
		Button: require('primevue/button').default
	},
	methods: {
		logout(){
			this.$store.dispatch('auth/logout')
			this.$router.push('/connexion')
		}
	}
}
</script>
