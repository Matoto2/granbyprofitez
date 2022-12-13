<template>
	<div>
		<BannerPage image="/images/alertes-emplois-bg.jpg" h1="Alertes-emplois"></BannerPage>

		<form @submit.prevent="submit">
			<div class="container email-container">
				<div class="email-wrapper">
					<div class="pre-alerte" :to="{name: 'alertes-emplois'}">
						<svg xmlns="http://www.w3.org/2000/svg" width="26.435" height="30.213" viewBox="0 0 26.435 30.213"><path d="M15.106,1.888V2.943A8.974,8.974,0,0,1,22.659,11.8v1.971a11.841,11.841,0,0,0,2.585,7.376l.879,1.1a1.416,1.416,0,0,1-1.1,2.3H1.416a1.416,1.416,0,0,1-1.106-2.3l.88-1.1a11.818,11.818,0,0,0,2.586-7.376V11.8A8.974,8.974,0,0,1,11.33,2.943V1.888a1.888,1.888,0,0,1,3.777,0Zm-2.36,3.777A6.14,6.14,0,0,0,6.609,11.8v1.971a14.65,14.65,0,0,1-2.342,7.943h17.9a14.655,14.655,0,0,1-2.343-7.943V11.8A6.14,6.14,0,0,0,13.69,5.665Zm4.249,20.771a3.768,3.768,0,0,1-3.777,3.777,3.778,3.778,0,0,1-2.673-1.1,3.872,3.872,0,0,1-1.1-2.673Z" transform="translate(0)"/></svg>
						<span>Inscription aux<br>alertes-emplois</span>
					</div>
					<input required type="email" v-model="form.email" placeholder="Courriel">
				</div>
			</div>
			<div class="container">
				<h2>Selectionnez vos préférences</h2>
				<div class="filter-choice">
					<strong>Secteurs</strong>
					<div v-for="(secteur, key) in secteursChoises"
						 class="checkbox-wrapper">
						<Checkbox :id="'secteur'+key"
								  :inputId="'secteur'+key"
								  name="secteurs"
								  :value="secteur.value"
								  v-model="form.secteurs" />
						<label :for="'secteur'+key">{{secteur.label}}</label>
					</div>
				</div>
				<div class="filter-choice">
					<strong>Catégorie professionnelle</strong>
					<div v-for="(categoriesPro, key) in categoriesProChoises"
						 class="checkbox-wrapper">
						<Checkbox :id="'categoriesPro'+key"
								  :inputId="'categoriesPro'+key"
								  name="categoriesPro"
								  :value="categoriesPro.value"
								  v-model="form.categoriesPro" />
						<label :for="'categoriesPro'+key">{{categoriesPro.label}}</label>
					</div>
				</div>
				<div class="filter-choice">
					<strong>Type d'emploi</strong>
					<div v-for="(type_emploi, key) in type_emploiChoises"
						 class="checkbox-wrapper">
						<Checkbox :id="'type_emploi'+key"
								  :inputId="'type_emploi'+key"
								  name="type_emploi"
								  :value="type_emploi.value"
								  v-model="form.type_emploi" />
						<label :for="'type_emploi'+key">{{type_emploi.label}}</label>
					</div>
				</div>
				<div class="filter-choice">
					<strong>Horaire</strong>
					<div v-for="(horaire, key) in horaireChoises"
						 class="checkbox-wrapper">
						<Checkbox :id="'horaire'+key"
								  :inputId="'horaire'+key"
								  name="horaire"
								  :value="horaire.value"
								  v-model="form.horaire" />
						<label :for="'horaire'+key">{{horaire.label}}</label>
					</div>
				</div>
				<div class="filter-choice filter-international-wrapper">
					<div class="checkbox-wrapper">
						<Checkbox id="international"
								  inputId="international"
								  name="horaire"
								  v-model="form.international"
								  :binary="true"
						/>
						<label for="international">Recrutement international</label>
					</div>
				</div>
				<div style="margin-top: 3rem">
					<h3>Je désir recevoir des alertes emploi par courriel:</h3>
					<div class="field-radiobutton">
						<RadioButton id="recurrence-never" name="recurrence" v-model="form.recurrence" value=""></RadioButton>
						<label for="recurrence-never">Jamais</label>
					</div>
					<div class="field-radiobutton">
						<RadioButton id="recurrence-daily" name="recurrence" v-model="form.recurrence" value="daily"></RadioButton>
						<label for="recurrence-daily">Quotidiennement</label>
					</div>
					<div class="field-radiobutton">
						<RadioButton id="recurrence-weekly" name="recurrence" v-model="form.recurrence" value="weekly"></RadioButton>
						<label for="recurrence-weekly">Hebdomadairement</label>
					</div>
				</div>
			</div>

			<div class="submit-wrapper">
				<button type="submit" class="btn">Envoyer</button>
			</div>

		</form>
	</div>
</template>
<script>
import Checkbox from "primevue/checkbox";
import RadioButton from "primevue/radiobutton";

export default {
	components: {
		Checkbox,
		RadioButton
	},
	async mounted(){
		if(this.$store.getters["filters/secteurs"].length === undefined)
			await this.$store.dispatch('filters/filters');
	},
	computed: {
		secteursChoises(){
			return this.$jobFilters.secteursChoises()
		},
		categoriesProChoises(){
			return this.$jobFilters.categoriesProChoises()
		},
		type_emploiChoises(){
			return this.$jobFilters.type_emploiChoises()
		},
		horaireChoises(){
			return this.$jobFilters.horaireChoises()
		},
	},
	data(){
		return {
			form: {
				email: '',
				secteurs: [],
				categoriesPro: [],
				type_emploi: [],
				horaire: [],
				international: false,
				recurrence: ''
			}
		}
	},
	methods: {
		async submit(){
			let response = await this.$axios.post('/jobalerts', this.form)

			if(response.data.success){
				this.form = {
					email: '',
					secteurs: [],
					categoriesPro: [],
					type_emploi: [],
					horaire: [],
					international: false,
					recurrence: ''
				}
				this.$toast.add({severity:'success', summary: 'Bienvenue!', detail:response.data.data === 'REMOVED_FROM_LIST' ? "Vous avez été retiré de la liste.":"L'emploi de vos rêves est maintenant à votre portée!", life: 6000});
			}else{
				this.$toast.add({
					severity:'error',
					summary: 'Oups!',
					detail: "Une erreur est survenue!",
					life: 6000});
			}
			console.log('submit!', response)
		}
	}
}
</script>
<style scoped>
form{
	margin-top: -8rem;
	position: relative;
	z-index: 10;
}
.pre-alerte{
	position: relative;
	display: inline-flex;
	align-items: center;
	background-color: #EDA008;
	padding: 1rem;
	color: #fff;
	text-transform: uppercase;
	height: 71px;
}
.pre-alerte svg{
	margin-right: 1rem;
}
.email-container{
	max-width: 800px;
	padding: 3rem;
	background-color: #363636;
	border-radius: 10px;
}
.email-wrapper{
	display: flex;
	border-radius: 10px;
	overflow: hidden;
}
.pre-alerte + input{
	flex-grow: 1;
	border-radius: 0;
	padding: .5rem 1.5rem;
}
.pre-alerte + input::placeholder{
	text-transform: uppercase;
}
.pre-alerte + input,
.pre-alerte + input:focus,
.pre-alerte + input:hover{
	border: none;
	box-shadow: none;
	outline: none;
}
.pre-alerte + input:enabled:hover,
.pre-alerte + input:enabled:focus{
	border-color: transparent;
}
.pre-alerte::after {
	content: '';
	position: absolute;
	top: 0;
	left: 100%;
	width: 0;
	height: 0;
	border-bottom: 71px solid transparent;
	border-left: 11px solid #eda008;
}
.filter-choice strong{
	text-transform: uppercase;
	display: inline-block;
	margin: 1rem 0;
}
.checkbox-wrapper{
	margin: .3rem 0;
}
.filter-international-wrapper{
	border-top: 1px solid #707070;
	margin-top: 2rem;
	padding-top: 1.5rem;
}
.submit-wrapper{
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3rem 1rem;
}
</style>
