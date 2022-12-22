<template>
	<div>
		<div class="box-wrapper">
			<form @submit.prevent="submit">
				<h2>Identification du gestionnaire de compte</h2>
				<div class="p-fluid grid formgrid">
					<FieldWrapper id="nameFirst" label="Prénom" childclass="md:col-6">
						<InputText type="text" v-model="form.nameFirst"/>
					</FieldWrapper>
					<FieldWrapper id="nameLast" label="Nom" childclass="md:col-6">
						<InputText type="text" v-model="form.nameLast"/>
					</FieldWrapper>
					<FieldWrapper id="email" label="Courriel" childclass="md:col-6">
						<InputText type="email" v-model="form.email"/>
					</FieldWrapper>
					<FieldWrapper id="email" label="Confirmer le courriel" childclass="md:col-6">
						<InputText type="email" v-model="form.emailConfirm"/>
					</FieldWrapper>
					<FieldWrapper id="password" label="Mot de passe" childclass="md:col-6">
						<InputText type="password" v-model="form.password"/>
					</FieldWrapper>
					<FieldWrapper id="password" label="Confirmer le mot de passe" childclass="md:col-6">
						<InputText type="password" v-model="form.confirmPassword"/>
					</FieldWrapper>
				</div>

				<h2>Informations sur l'entreprise</h2>
				<div class="p-fluid grid formgrid">
					<FieldWrapper id="business" label="Nom de l'entreprise" childclass="md:col-6">
						<InputText type="text" v-model="form.business"/>
					</FieldWrapper>
				</div>

				<h2>Coordonnées</h2>
				<div class="p-fluid grid formgrid">
					<FieldWrapper id="address" label="Adresse" childclass="md:col-6">
						<InputText v-model="form.address"></InputText>
					</FieldWrapper>
					<FieldWrapper id="ville" label="Ville" childclass="md:col-6">
						<Dropdown v-model="form.ville" :options="villes"></Dropdown>
					</FieldWrapper>
					<FieldWrapper id="code_postal" label="Code Postal" childclass="md:col-6">
						<InputMask v-model="form.code_postal" mask="a9a 9a9"></InputMask>
					</FieldWrapper>
					<FieldWrapper id="telephone" label="Téléphone" childclass="md:col-6">
						<InputMask v-model="form.telephone" mask="999 999-9999"></InputMask>
					</FieldWrapper>
				</div>

				<h2>Fiche de l'entreprise</h2>
				<div class="p-fluid grid formgrid">
					<FieldWrapper id="website" label="Site web" childclass="md:col-6">
						<InputText v-model="form.website"/>
					</FieldWrapper>
					<FieldWrapper id="nb_employe" label="Nb d'employés" childclass="md:col-6">
						<InputText type="text" v-model="form.nb_employe"></InputText>
					</FieldWrapper>
					<FieldWrapper id="secteur" label="Secteur" childclass="md:col-6">
						<Dropdown v-model="form.secteur" :options="secteursChoises" optionLabel="label" optionValue="value"></Dropdown>
					</FieldWrapper>
					<FieldWrapper id="logo" label="Logo de l'entreprise" childclass="md:col-4">
						<LmFileUpload name="logo" :maxItems="1"  v-model="form.logo" @newFiles="newFiles" @removeFile="removeFile"></LmFileUpload>
					</FieldWrapper>
					<FieldWrapper id="description" label="Description de l'entreprise">
						<client-only>
							<quill-editor
								ref="editor"
								v-model="form.description"
							/>
						</client-only>
					</FieldWrapper>
				</div>

				<div style="display: flex;justify-content:flex-end;margin-top: 2rem;">
					<button type="submit" class="btn">Soumettre ma demande</button>
				</div>

			</form>
		</div>
	</div>
</template>
<script>
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import InputMask from 'primevue/inputmask'
import Dropdown from 'primevue/dropdown'
export default {
	components: {
		InputText,
		Textarea,
		InputMask,
		Dropdown,
	},
	data(){
		return {
			form: {
				business: '',
				logo: [],
				nameFirst: '',
				nameLast: '',
				email: '',
				emailConfirm: '',
				password: '',
				passwordConfirm: '',
				description: '',
				address: '',
				ville: 'Granby',
				code_postal: '',
				nb_employe: '',
				telephone: '',
				website: '',
				secteur: [],
			},
			sending: false,
			villes: ["Granby", "Roxton Pond", "Saint-Alphonse-de-Granby", "Sainte-Cécile-de-Milton", "Saint-Joachim-de-Sherfford", "Shefford", "Warden", "Waterloo"]
		}
	},
	async mounted(){
		if(this.$store.getters["filters/secteurs"].length === undefined)
			await this.$store.dispatch('filters/filters');
	},
	computed: {
		secteursChoises(){
			return this.$jobFilters.secteursChoises()
		}
	},
	methods: {
		async newFiles(obj){
			obj.files.forEach(file => {
				this.form.logo.push(file)
			})
			console.log(this.form)
		},
		removeFile(obj){
			this.form.logo.splice(obj.index, 1)
		},
		async submit(){
			this.sending = true
			const form = this.form

			let response = {}
			//check emails
			if(this.form.email !== this.form.emailConfirm){
				this.sending = false
				this.$toast.add({severity:'error', summary: 'Erreur!', detail:"Vérifier que les courriels concordent", life: 10000});
				return
			}
			//check password
			if(this.form.password !== this.form.confirmPassword){
				this.sending = false
				this.$toast.add({severity:'error', summary: 'Erreur!', detail:"Vérifier que les mots de passe concordent", life: 10000});
				return
			}

			form.password = this.form.password
			form.is_confirmed = false
			response = await this.$axios.post(
				'/register',
				form
			)

			if(response.data.success){
				this.$toast.add({severity:'success', summary: 'Succès!', detail:"Votre demande d'inscription a bien été soumise! Vous pouvez maintenant vous connecter, mais aucun emploi ne sera publié avant que vous soyez authorisé par Granby-Profitez.", life: 15000});
				await this.$router.push({name: "connexion"})
			}else{
				this.$toast.add({severity:'error', summary: 'Erreur!', detail:response.data.error, life: 15000});
			}
			this.sending = false
		}
	}
}
</script>
<style scoped>
.box-wrapper{
	background-color: #ECF0F5;
	border-radius: 10px;
	width: 100%;
	max-width: 1400px;
	margin: 2rem auto;
	padding: 3rem;
}
input,
.p-dropdown{
	border: none;
	border-radius: 10px;
	min-height: 71px;
	font-size: 1.1rem;
	padding-left: 1rem;
	padding-right: 1rem;
}
</style>
