<template>
	<div>
		<form @submit.prevent="submit">
			<div class="left">
				<InputText class="half" required type="text" v-model="form.first_name" placeholder="Prénom*"></InputText>
				<InputText class="half" required type="text" v-model="form.last_name" placeholder="Nom*"></InputText>
				<InputMask class="half" v-model="form.phone" mask="999 999-9999" placeholder="Téléphone*" />
				<InputMask class="half" v-model="form.postal_code" mask="a9a 9a9" placeholder="Code postal*" />
				<InputText class="full" required type="email" v-model="form.email" placeholder="Courriel*"></InputText>
				<Textarea class="full" v-model="form.message" rows="4" placeholder="Message à l’employeur..." />
				<div class="checkbox-wrapper full">
					<Checkbox id="acceptee" v-model="form.agreed" :binary="true" />
					<label for="acceptee">
						En postulant sur un emploi via Granby Profitez, je comprends que mon prénom, mon nom, mon courriel, mon téléphone ainsi que mon code postal seront visibles par les administrateurs du site Internet (Granby Industriel) et par l’employeur ci-haut nommé. J’accepte par le fait même d’être contacté pour un suivi d’embauche par l’employeur et/ou par les administrateurs.
					</label>
				</div>

			</div>
			<div class="right">
				<span class="title">Joindre vos documents comme votre C.V. et votre lettre de présentation</span>
				<client-only>
					<div class="upload">
						<LmFileUpload v-model="form.files" name="cv" @newFiles="newFiles" @removeFile="removeFile" :list-files="true" accept=".pdf, .doc, .docx"></LmFileUpload>
					</div>
				</client-only>

				<p class="mess">En cliquant sur “envoyer”, ce formulaire de demande d’emploi sera directement transféré à l’employeur via le site granby-profitez.com </p>

				<div class="whiteonly"><ProgressSpinner style="width: 2rem;height: 2rem;" v-if="sending"></ProgressSpinner></div>
				<button class="btn" :disabled="sending" type="submit">Envoyer</button>

			</div>
		</form>
	</div>
</template>
<script>
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
import ProgressSpinner from "primevue/progressspinner";
export default {
	props: ["jobID"],
	components: {
		InputText,
		InputMask,
		Textarea,
		Checkbox,
		ProgressSpinner
	},
	data(){
		return {
			form: this.formReset(),
			sending: false,
		}
	},
	methods: {
		async submit(){
			this.sending = true
			const response = await this.$axios.$post('/cv/submit', this.form)
			if(response.success){
				this.form = this.formReset()
				this.$toast.add({severity:'success', summary: 'Succès!', detail:"Votre CV a été envoyé avec succès", life: 10000});
			}else{
				this.$toast.add({severity:'error', summary: 'Erreur!', detail:"Une erreur est survenue! Veuillez réessayer ou contacter un administrateur", life: 10000});
			}
			this.sending = false
		},
		async newFiles(obj){
			obj.files.forEach(file => {
				this.form.files.push(file)
			})
		},
		removeFile(obj){
			this.form.files.splice(obj.index, 1)
		},
		formReset(){
			return {
				first_name: '',
				last_name: '',
				phone: '',
				postal_code: '',
				email: '',
				message: '',
				agreed: true,
				files: [],
				job_id: this.jobID
			}
		}
	}
}
</script>

<style scoped>
form{
	display: grid;
	grid-template-columns: 2fr 1fr;
	gap: 3rem;
	background-color: #363636;
	border-radius: 10px;
	padding: 3rem;
	color: #fff;
}
.left{
	display: grid;
	grid-template-columns: repeat(12,1fr);
	gap: 1.5rem;
}
.half{
	grid-column: span 6
}
.full{
	grid-column: 1/-1;
}
.left input{
	height: 60px;
}
.left input,
.left textarea{
	border-radius: 10px;
	padding: 1rem;
}
.checkbox-wrapper{
	display: flex;
	gap: 1rem;
}
.title{
	font-size: 1.5rem;
	font-weight: 700
}
.dragndrop{
	border-radius: 10px;
	border: 1px solid #fff;
	background-color: rgba(255, 255, 255, 0.2);
	text-align: center;
	padding: 1.5rem;
	margin: 1rem 0;
}
.dragndrop label{
	background: #EDA008;
	border-radius: 10px;
	padding: .3rem 1rem;
	display: inline-block;
	margin-top: .5rem;
}
.btn-upload{
	font-size: .8rem;
	padding: .5rem 1rem;
	cursor: pointer;
}
.upload{
	margin: 2rem 0;
}
.mess{
	margin-top: 3rem;
}
</style>


<style>
.whiteonly .p-progress-spinner-circle {
	stroke: #fff;
	animation: p-progress-spinner-dash 1.5s ease-in-out infinite;
}
</style>
