<template>
	<button type="button" @click="logout">Se déconnecter</button>
</template>
<script>
export default {
	methods: {
		logout(){
			this.$store.dispatch('auth/logout')
			this.$router.push('/connexion')
		}
	}
}
</script>
<style scoped>
button{
	outline: none;
	border: none;
	text-transform: uppercase;
	margin-left: 1rem;
	background: transparent;
	font-weight: 500;
	color: #626262;
}
</style>
