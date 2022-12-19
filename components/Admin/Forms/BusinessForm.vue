<template>
	<form @submit.prevent="submit">

		<Panel style="margin-bottom: 2rem" header="Informations du compte">
			<div class="p-fluid grid formgrid">
				<FieldWrapper id="nameFirst" label="Prénom" childclass="md:col-4">
					<InputText type="text" v-model="form.nameFirst"/>
				</FieldWrapper>
				<FieldWrapper id="nameLast" label="Nom" childclass="md:col-4">
					<InputText type="text" v-model="form.nameLast"/>
				</FieldWrapper>
				<FieldWrapper id="email" label="Courriel" childclass="md:col-4">
					<InputText type="email" v-model="form.email" :disabled="use === 'edit'"/>
				</FieldWrapper>
				<FieldWrapper id="password" label="Modifier le mot de passe">
					<small>Laisser vide pour ne pas modifier</small><br>
					<InputText type="password" v-model="form.password" placeholder="Mot de passe"/>
					<InputText type="password" v-model="confirmPassword" placeholder="Confirmer le mot de passe"/>
				</FieldWrapper>
			</div>
		</Panel>

		<Panel header="Informations Entreprise">
			<div class="p-fluid grid formgrid">
				<FieldWrapper id="business" label="Nom de l'entreprise" childclass="md:col-4">
					<InputText type="text" v-model="form.business"/>
				</FieldWrapper>
				<FieldWrapper id="address" label="Adresse" childclass="md:col-4">
					<InputText v-model="form.address"></InputText>
				</FieldWrapper>
				<FieldWrapper id="ville" label="Ville" childclass="md:col-4">
					<Dropdown v-model="form.ville" :options="villes"></Dropdown>
				</FieldWrapper>
				<FieldWrapper id="code_postal" label="Code Postal" childclass="md:col-4">
					<InputMask v-model="form.code_postal" mask="a9a 9a9"></InputMask>
				</FieldWrapper>
				<FieldWrapper id="logo" label="Logo de l'entreprise" childclass="md:col-4">
					<LmFileUpload name="logo" :maxItems="1"  v-model="form.logo" @newFiles="newFiles" @removeFile="removeFile"></LmFileUpload>
				</FieldWrapper>
				<FieldWrapper id="responsable_rh" label="Responsable RH" childclass="md:col-4">
					<InputText type="text" v-model="form.responsable_rh"/>
				</FieldWrapper>
				<FieldWrapper id="secteur" label="Secteur" childclass="md:col-4">
					<Dropdown v-model="form.secteur" :options="secteursChoises" optionLabel="label" optionValue="value"></Dropdown>
				</FieldWrapper>
				<FieldWrapper id="categoriesPro" label="Secteur Pro." childclass="md:col-4">
					<Dropdown v-model="form.categoriesPro" :options="categoriesProChoises" optionLabel="label" optionValue="value"></Dropdown>
				</FieldWrapper>
				<FieldWrapper id="nb_employe" label="Nb d'employés" childclass="md:col-4">
					<InputText type="text" v-model="form.nb_employe"></InputText>
				</FieldWrapper>
				<FieldWrapper id="telephone" label="Téléphone" childclass="md:col-4">
					<InputMask v-model="form.telephone" mask="999 999-9999"></InputMask>
				</FieldWrapper>
				<FieldWrapper id="fax" label="Fax" childclass="md:col-4">
					<InputMask v-model="form.fax" mask="999 999-9999"></InputMask>
				</FieldWrapper>
				<FieldWrapper id="website" label="Site web" childclass="md:col-4">
					<InputText v-model="form.website"/>
				</FieldWrapper>
				<FieldWrapper id="description" label="Description de l'entreprise">
					<client-only>
						<quill-editor
							ref="editor"
							v-model="form.description"
						/>
					</client-only>
				</FieldWrapper>
				<FieldWrapper id="produits" label="Vos produits">
					<Textarea v-model="form.produits" rows="3"></Textarea>
				</FieldWrapper>
				<FieldWrapper id="youtube_link" label="Lien vidéo YouTube">
					<InputText v-model="form.youtube_link"/>
				</FieldWrapper>
				<FieldWrapper id="gallery" label="Galerie d'images">
					<LmFileUpload name="gallery" v-model="form.gallery" @newFiles="newFiles" @removeFile="removeFile"></LmFileUpload>
				</FieldWrapper>
			</div>
		</Panel>

		<div><ProgressSpinner style="width: 2rem;height: 2rem;" v-if="sending"></ProgressSpinner></div>
		<Button style="margin-top: 1rem" type="submit">{{ use === 'add' ? 'Ajouter':'Mettre à jour'}}</Button>
		<Button v-if="is_admin && form?.is_confirmed === false" class="p-button-success" @click="confirmAccount">Approuver ce compte</Button>
	</form>
</template>
<script>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Textarea from 'primevue/textarea'
import InputMask from 'primevue/inputmask'
import Panel from 'primevue/panel'
import Dropdown from 'primevue/dropdown'
import ProgressSpinner from "primevue/progressspinner";

export default {
	components: {
		InputText,
		Button,
		Textarea,
		InputMask,
		Panel,
		Dropdown,
		ProgressSpinner
	},
	props: {
		form: {
			type: Object,
			default: () => {
				return {
					business: '',
					logo: [],
					nameFirst: '',
					nameLast: '',
					email: '',
					password: '',
					description: '',
					address: '',
					ville: 'Granby',
					code_postal: '',
					nb_employe: '',
					produits: '',
					telephone: '',
					fax: '',
					website: '',
					secteur: [],
					categoriesPro: [],
					gallery: [],
					youtube_link: '',
					responsable_rh: ''
				}
			}
		},
		use: {
			type: String,
			default: 'add'
		}
	},
	data(){
		return {
			sending: false,
			confirmPassword: '',
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
		,categoriesProChoises(){
			return this.$jobFilters.categoriesProChoises()
		},
		is_admin(){
			return this.$store.getters["auth/getRole"] === 'admin'
		}
	},
	methods: {
		async newFiles(obj){
			obj.files.forEach(file => {
				if(obj.name === 'logo')
					this.form.logo.push(file)
				else
					this.form.gallery.push(file)
			})
			console.log(this.form)
		},
		removeFile(obj){
			if(obj.name === 'logo')
				this.form.logo.splice(obj.index, 1)
			else
				this.form.gallery.splice(obj.index, 1)
		},
		async submit(){
			this.sending = true
			const form = this.form
			form.token = this.$store.getters['auth/get_token']

			let response = {}
			if(this.use === 'add'){
				//check password
				if(this.form.password === this.confirmPassword){
					form.password = this.form.password
					response = await this.$axios.post(
						'/register',
						form
					)
				}else{
					this.sending = false
					this.$toast.add({severity:'error', summary: 'Erreur!', detail:"Vérifier que les mots de passe concordent", life: 10000});
					return
				}

			}else if(this.use === 'edit'){
				form.id = this.$route.params.id ?? this.$store.getters["auth/user_id"]
				if(this.form.password !== '' && this.form.password !== undefined){
					if(this.form.password === this.confirmPassword) {
						form.password = this.form.password
					}else{
						this.sending = false
						this.$toast.add({severity:'error', summary: 'Erreur!', detail:"Vérifier que les mots de passe concordent", life: 10000});
						return
					}
				}
				response = await this.$axios.post(
					'/users/edit',
					form
				)
			}

			if(response.data.success){
				this.sending = false
				this.$toast.add({severity:'success', summary: 'Succès!', detail:'Sauvegarde effectué', life: 3000});

			}else{
				this.sending = false
				this.$toast.add({severity:'error', summary: 'Erreur!', detail:response.data.error, life: 15000});
			}
		},
		async confirmAccount(){
			let response = await this.$axios.$post('/users/confirm', {
				token: this.$store.getters["auth/get_token"],
				id: this.$route.params.id
			})
			if(response.success){
				this.form.is_confirmed = true
				this.$toast.add({severity:'success', summary: 'Succès!', detail:'Compte approuvé avec succès!', life: 3000});
			}else{
				this.$toast.add({severity:'error', summary: 'Erreur!', detail: "Une erreur est survenue!", life: 15000});
			}
		}
	}
}
</script>
