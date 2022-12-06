<template>
	<div class="container">
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
			<div v-if="errors" class="error">
				{{errors}}
			</div>
			<Button :disabled="loading" type="submit" label="Se connecter" />
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
			loading: false,
			email: '',
			password: '',
			errors: '',
		}
	},
	methods: {
		async login() {
			const email = this.email
			const password = this.password
			this.errors = await this.$store.dispatch('auth/login', { email, password })
			if(!this.errors)
				this.redirect_to_dashboard()
			else
				this.$toast.add({severity:'error', summary: 'Erreur!', detail:this.errors, life: 3000});
		},
		redirect_to_dashboard(){
			const url = this.$store.getters['auth/getRole'] === 'admin' ? '/admin':'/gestion'
			this.$router.push(url+'/tableau-de-bord')
		}
	}
}
</script>
