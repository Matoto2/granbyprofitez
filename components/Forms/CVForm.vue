<template>
	<div>
		<form @submit.prevent="submit">
			<div class="left">
				<InputText class="half" required type="text" v-model="form.prenom" placeholder="Prénom*"></InputText>
				<InputText class="half" required type="text" v-model="form.nom" placeholder="Nom*"></InputText>
				<InputMask class="half" v-model="form.telephone" mask="999 999-9999" placeholder="Téléphone*" />
				<InputMask class="half" v-model="form.code_postal" mask="a9a 9a9" placeholder="Code postal*" />
				<InputText class="full" required type="email" v-model="form.courriel" placeholder="Courriel*"></InputText>
				<Textarea class="full" v-model="form.message" rows="4" placeholder="Message à l’employeur..." />
				<div class="checkbox-wrapper full">
					<Checkbox id="acceptee" v-model="form.accepte" :binary="true" />
					<label for="acceptee">
						En postulant sur un emploi via Granby Profitez, je comprends que mon prénom, mon nom, mon courriel, mon téléphone ainsi que mon code postal seront visibles par les administrateurs du site Internet (Granby Industriel) et par l’employeur ci-haut nommé. J’accepte par le fait même d’être contacté pour un suivi d’embauche par l’employeur et/ou par les administrateurs.
					</label>
				</div>

			</div>
			<div class="right">
				<span class="title">Joindre vos documents comme votre C.V. et votre lettre de présentation</span>
				<client-only>
					<div class="upload">
						<ul v-if="form.files.length">
							<li v-for="file in form.files" :key="file.id">
								<span>{{file.name}}</span> -
								<span>{{file.size}}</span> -
								<span v-if="file.error">{{file.error}}</span>
								<span v-else-if="file.success">accès</span>
								<span v-else-if="file.active">actif</span>
								<span v-else></span>
							</li>
						</ul>
						<div v-else class="dragndrop">
							<span>Glissez vos fichier ici <br>ou<br></span>
							<label for="file">Choisir des fichiers</label>
						</div>

						<file-upload
							class="btn btn-upload"
							:multiple="true"
							:drop="true"
							:drop-directory="true"
							v-model="form.files"
							ref="upload">
							Ajouter des fichiers
						</file-upload>
					</div>
				</client-only>

				<p class="mess">En cliquant sur “envoyer”, ce formulaire de demande d’emploi sera directement transféré à l’employeur via le site granby-profitez.com </p>

				<button class="btn" type="submit">Envoyer</button>

			</div>
		</form>
	</div>
</template>
<script>
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
export default {
	components: {
		InputText,
		InputMask,
		Textarea,
		Checkbox
	},
	data(){
		return {
			form: {
				prenom: '',
				nom: '',
				telephone: '',
				code_postal: '',
				courriel: '',
				message: '',
				cv: '',
				accepte: true,
				files: []
			}
		}
	},
	methods: {
		submit(){
			console.log('submit!!!')
		},
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
.mess{
	margin-top: 3rem;
}
</style>
