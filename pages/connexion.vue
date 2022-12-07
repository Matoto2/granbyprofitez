<template>
	<div class="container">
		<h1>Identifiez-vous si vous avez déjà un compte</h1>
		<div class="no-account">
			<span>Vous n'avez pas encore de compte?</span>
			<NuxtLink class="btn" :to="{name: 'inscription'}">Inscription</NuxtLink>
		</div>
		<form @submit.prevent="login">
			<span class="p-input-icon-left">
				<i class="pi pi-envelope"></i>
				<InputText id="email" type="text" v-model="email" placeholder="Adresse courriel" />
			</span>
			<span class="p-input-icon-left">
				<i class="pi pi-key"></i>
				<InputText id="password" type="password" v-model="password" placeholder="Mot de passe" />
			</span>
			<NuxtLink :to="{name: 'mot-de-passe-oublie'}">Mot de passe oublié</NuxtLink>
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
