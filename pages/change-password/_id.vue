<template>
	<div class="container">
		<div class="login-wrapper">
			<form v-if="can_change_password" @submit.prevent="changePassword">
				<h3>Choisir votre nouveau mot de passe <br><small>Doit avoir min. 8 caractères, des minuscules, majuscule et au moins un chiffre</small></h3>
				<div style="display:flex;flex-direction:column;margin-bottom:1rem">
					<span class="p-input-icon-left">
						<i class="pi pi-key"></i>
						<InputText class="w-full" id="password" type="password" v-model="password" placeholder="Nouveau mot de passe" />
					</span>
						<span class="p-input-icon-left">
						<i class="pi pi-key"></i>
						<InputText class="w-full" id="password-confirm" type="password" v-model="passwordConfirm" placeholder="Confirmer nouveau mot de passe" />
					</span>
				</div>

				<div v-if="errors" class="error">{{errors}}</div>
				<ProgressSpinner v-if="loading" />
				<button class="btn" :disabled="loading" type="submit">Changer mon mot de passe</button>
			</form>
			<form v-else @submit.prevent="verifyToken">
				<label for="recoverToken">Votre code de récupération</label>
				<InputText style="margin: 1rem 0;" class="w-full" id="recoverToken" type="text" v-model="recoverToken" placeholder="Code reçu par courriel" />
				<button class="btn">Confirmer</button>
			</form>
		</div>
	</div>
</template>
<script>
import InputText from "primevue/inputtext";
import ProgressSpinner from "primevue/progressspinner"
export default {
	components: {
		InputText,
		ProgressSpinner
	},
	data(){
		return {
			loading: false,
			recoverToken: '',
			can_change_password: false,
			password: '',
			passwordConfirm: '',
			errors: '',
		}
	},
	methods: {
		async verifyToken(){
			let response = await this.$axios.post('/login/recover/verify', {
				id: this.$route.params.id,
				recoverToken: this.recoverToken
			})
			if(response.data.success)
				this.can_change_password = true
		},
		async changePassword(){
			if(this.password === this.passwordConfirm){
				let response = await this.$axios.post('/login/changepassword', {
					id: this.$route.params.id,
					password: this.password
				})
				if(response.data.success)
					await this.$router.push({name: 'connexion'})
				else
					this.$toast.add({severity:'error', summary: 'Erreur!', detail:"Vérifier que votre mot de passe respecte les conditions de sécurité.", life: 3000});
			}else{
				this.$toast.add({severity:'error', summary: 'Erreur!', detail:"Les mots de passe ne correspondent pas", life: 3000});
			}

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
.p-inputtext:enabled:focus {
	outline: none;
	outline-offset: 0;
	box-shadow: none;
	border-color: initial;
}
.w-full{
	height: 71px;
	border-radius: 10px;
	outline: none;
	border: none;
	margin: .5rem 0;
	font-size: 1.1rem;
}
</style>
