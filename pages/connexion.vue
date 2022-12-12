<template>
	<div class="container">
		<div class="login-wrapper">
			<div v-if="isLogin">
				<h1>Identifiez-vous si vous <br>avez déjà un compte</h1>
				<div class="no-account">
					<span>Vous n'avez pas encore de compte?</span>
					<NuxtLink class="btn inscrire" :to="{name: 'inscription'}">Inscription</NuxtLink>
				</div>
			</div>
			<div v-else>
				<a class="psw-forget" @click.prevent="isLogin = !isLogin">Retour à la connexion</a>
			</div>

			<form v-if="isLogin" @submit.prevent="login">
				<span class="p-input-icon-left">
					<i class="pi pi-envelope"></i>
					<InputText class="w-full" id="email" type="text" v-model="email" placeholder="Adresse courriel" />
				</span>
				<span class="p-input-icon-left">
					<i class="pi pi-key"></i>
					<InputText class="w-full" id="password" type="password" v-model="password" placeholder="Mot de passe" />
				</span>
				<a class="psw-forget" @click.prevent="isLogin = !isLogin">Mot de passe oublié</a>
				<div v-if="errors" class="error">{{errors}}</div>
				<ProgressSpinner v-if="loading" />
				<button class="btn" :disabled="loading" type="submit">Se connecter</button>
			</form>
			<form v-else @submit.prevent="forgotPassword">
				<span class="p-input-icon-left">
					<i class="pi pi-envelope"></i>
					<InputText class="w-full" id="email-forgot" type="text" v-model="email" placeholder="Adresse courriel" />
				</span>
				<ProgressSpinner v-if="loading" />
				<button class="btn" :disabled="loading" type="submit">Envoyer un courriel de récupération</button>
			</form>
		</div>

	</div>
</template>
<script>
import ProgressSpinner from 'primevue/progressspinner';
export default {
	components: {
		Button: require('primevue/button').default,
		InputText: require('primevue/inputtext').default,
		ProgressSpinner
	},
	created(){
		if(this.$store.getters['auth/isAuthenticated'])
			this.redirect_to_dashboard()
	},
	data(){
		return {
			loading: false,
			isLogin: true,
			email: '',
			password: '',
			errors: '',
		}
	},
	methods: {
		async login() {
			this.loading = true
			const email = this.email
			const password = this.password
			this.errors = await this.$store.dispatch('auth/login', { email, password })
			if(!this.errors)
				this.redirect_to_dashboard()
			else{
				this.loading = false
				this.$toast.add({severity:'error', summary: 'Erreur!', detail:this.errors, life: 3000});
			}

		},
		redirect_to_dashboard(){
			const url = this.$store.getters['auth/getRole'] === 'admin' ? '/admin':'/gestion'
			this.$router.push(url+'/tableau-de-bord')
		},
		async forgotPassword(){
			let response = await this.$axios.$post('/login/recover', {
				email: this.email
			})
			await this.$router.push({
				name: 'change-password-id',
				params: {
					id: response.data.id
				}
			})
		}
	}
}
</script>
<style scoped>
.login-wrapper{
	background-color: #ECF0F5;
	border-radius: 10px;
	width: 100%;
	max-width: 700px;
	margin: 2rem auto;
	padding: 3rem;
}
h1{
	margin-top: 0;
	font-size: 1.7rem;
	font-weight: 500;
	color: #000;
}
form{
	display: flex;
	flex-direction: column;
}
.inscrire{
	padding: .5rem 1rem;
	font-size: .9rem;
}
.no-account{
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 2rem;
}
.w-full{
	height: 71px;
	border-radius: 10px;
	outline: none;
	border: none;
	margin: .5rem 0;
	font-size: 1.1rem;
}
.psw-forget{
	text-decoration: none;
	color: #626262;
	font-size: .9rem;
	font-weight: 600;
	margin: 1rem 0;
	cursor: pointer;
}
.p-inputtext:enabled:focus {
	outline: none;
	outline-offset: 0;
	box-shadow: none;
	border-color: initial;
}
.pi {
	font-size: 1.4rem;
}
.p-input-icon-left > .p-inputtext {
	padding-left: 3rem;
}
.p-input-icon-left > i:first-of-type {
	left: 0.8rem;
}
.p-input-icon-left>i, .p-input-icon-right>i {
	transform: translateY(-50%);
	margin-top: 0;
}
</style>
