<template>
	<form @submit.prevent="submit">
		<FieldWrapper id="business" label="Nom de l'entreprise">
			<InputText type="text" v-model="form.business"/>
		</FieldWrapper>
		<FieldWrapper id="logo" label="Logo de l'entreprise">
			<div class="upload-file-wrapper">
				<div style="position: relative;display: inline-block" class="img-wrapper">
					<Button v-if="form.logo"
							icon="pi pi-trash"
							class="p-button-rounded p-button-danger"
							style="position: absolute;right:-10px;opacity: .8"
							@click="deleteImage"
					/>
					<img v-if="form.logo" :src="form.logo?.sizes?.thumbnail?.source_url" style="margin-top: 10px" alt="">
				</div>
				<FileUpload mode="basic" name="logo[]" @select="onSelectedFiles" accept="image/*"/>
			</div>
		</FieldWrapper>
		<FieldWrapper id="nameFirst" label="Prénom">
			<InputText type="text" v-model="form.nameFirst"/>
		</FieldWrapper>
		<FieldWrapper id="nameLast" label="Nom">
			<InputText type="text" v-model="form.nameLast"/>
		</FieldWrapper>
		<FieldWrapper id="email" label="Courriel">
			<InputText type="email" v-model="form.email" :disabled="use === 'edit'"/>
		</FieldWrapper>
		<FieldWrapper id="password" label="Mot de passe">
			<InputText type="password" v-model="form.password" placeholder="Mot de passe"/>
			<InputText type="password" v-model="confirmPassword" placeholder="Confirmer le mot de passe"/>
		</FieldWrapper>
		<Button :disabled="saving" type="submit">{{ use === 'add' ? 'Ajouter':'Mettre à jour'}}</Button>
	</form>
</template>
<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import FileUpload from 'primevue/fileupload';
export default {
	components: {
		InputText,
		Button,
		FileUpload
	},
	props: {
		form: {
			type: Object,
			default: () => {
				return {
					business: '',
					logo: {},
					nameFirst: '',
					nameLast: '',
					email: '',
					password: '',
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
			saving: false,
			confirmPassword: ''
		}
	},
	methods: {
		onSelectedFiles(event){
			if(event.files.length > 0){
				let bodyFormData = new FormData();
				bodyFormData.append('file', event.files[0])
				this.$axios.post(
					'https://imgapi.lithiummarketing.net/wp-json/wp/v2/media',
					bodyFormData,
					{
						headers: {
							"Content-Disposition": "attachment; filename=pexels-pixabay-60597.jpg",
							"Content-Type": "image/jpg"
						},
						auth: {
							username: "lithiummarketing",
							password: "LVrE BrkO PPh0 q8XJ csxq laqa"
						}
					}
				).then((response)=>{
					this.form.logo = {
						wp_id: response.data.id,
						sizes: response.data.media_details.sizes
					}
				})
			}
		},
		async deleteImage(){

		},
		async submit(){
			this.saving = true
			const form = {
				token: this.$store.getters['auth/get_token'],
				business: this.form.business,
				logo: this.form.logo,
				email: this.form.email,
				nameFirst: this.form.nameFirst,
				nameLast: this.form.nameLast,
			}

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
					this.$toast.add({severity:'error', summary: 'Erreur!', detail:"Vérifier que les mots de passe concordent", life: 10000});
					return
				}

			}else if(this.use === 'edit'){
				form.id = this.$route.params.id
				if(this.form.password !== '' && this.form.password !== undefined){
					if(this.form.password === this.confirmPassword) {
						form.password = this.form.password
					}else{
						this.$toast.add({severity:'error', summary: 'Erreur!', detail:"Vérifier que les mots de passe concordent", life: 10000});
						return
					}
				}
				response = await this.$axios.post(
					'/users/edit',
					form
				)
			}

			this.saving = false
			if(response.data.success){
				this.$toast.add({severity:'success', summary: 'Succès!', detail:'Sauvegarde effectué', life: 3000});
				await this.$router.push('/admin/entreprises');
			}else{
				this.$toast.add({severity:'error', summary: 'Erreur!', detail:response.data.error, life: 15000});
			}
		}
	}
}
</script>
