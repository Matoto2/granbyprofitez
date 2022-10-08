<template>
	<div>
		<h1>Page de connexion</h1>
		<form @submit.prevent="login">
			<span class="p-float-label">
				<InputText id="email" type="text" v-model="email" />
				<label for="email">Courriel</label>
			</span>
			<span class="p-float-label">
				<InputText id="password" type="password" v-model="password" />
				<label for="password">Mot de passe</label>
			</span>
			<div v-if="$store.state.auth.errors.status" class="error">
				Nom d'utilisateur ou mot de passe invalide.
			</div>
			<Button type="submit" label="Se connecter" />
		</form>
	</div>
</template>
<script>
export default {
	components: {
		Button: require('primevue/button').default,
		InputText: require('primevue/inputtext').default,
	},
	created(){
		if(this.$store.getters['auth/isAuthenticated'])
			this.redirect_to_dashboard()
	},
	data(){
		return {
			email: '',
			password: '',
		}
	},
	methods: {
		async login() {
			const email = this.email
			const password = this.password
			await this.$store.dispatch('auth/login', { email, password })
			this.redirect_to_dashboard()
		},
		redirect_to_dashboard(){
			this.$router.push('/tableau-de-bord')
		}
	}
}
</script>
