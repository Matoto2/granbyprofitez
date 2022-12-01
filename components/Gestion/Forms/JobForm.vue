<template>
	<form @submit.prevent="submit">
		<FieldWrapper id="title" label="Titre de l'emploi *">
			<InputText required type="text" v-model="form.title"/>
		</FieldWrapper>
		<FieldWrapper id="status" label="Statut *">
			<Dropdown required id="status" v-model="form.status" :options="statusChoises" optionLabel="label" optionValue="value" placeholder="Choix" />
		</FieldWrapper>

		<FieldWrapper id="categories" label="Catégories *">
			<MultiSelect required v-model="form.categories" :options="categoriesChoises" optionLabel="label" optionValue="value" placeholder="Choix" display="chip" />
		</FieldWrapper>
		<FieldWrapper id="categoriesPro" label="Catégories Professionnels *">
			<MultiSelect required v-model="form.categoriesPro" :options="categoriesProChoises" optionLabel="label" optionValue="value" placeholder="Choix" display="chip" />
		</FieldWrapper>
		<FieldWrapper id="specifications" label="Spécifications *">
			<MultiSelect required v-model="form.specifications" :options="specificationsChoises" optionLabel="label" optionValue="value" placeholder="Choix" display="chip" />
		</FieldWrapper>
		<FieldWrapper id="horaire" label="Horaire *">
			<MultiSelect required v-model="form.horaire" :options="horaireChoises" optionLabel="label" optionValue="value" placeholder="Choix" display="chip" />
		</FieldWrapper>

		<FieldWrapper id="international" label="Candidatures internationnale">
			<ToggleButton v-model="form.international"
						  onLabel="J'accepte les candidatures internationale"
						  offLabel="Je refuse les candidatures internationale"
						  onIcon="pi pi-check"
						  offIcon="pi pi-times"
			/>
		</FieldWrapper>

		<FieldWrapper id="content" label="Contenu">
			<VueTrix v-model="form.content"/>
		</FieldWrapper>
		<Button :disabled="saving" type="submit">{{ use === 'add' ? 'Ajouter':'Mettre à jour'}}</Button>
	</form>
</template>
<script>
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';
import MultiSelect from 'primevue/multiselect';
import ToggleButton from 'primevue/togglebutton';
import Button from 'primevue/button';
export default {
	components: {
		Dropdown,
		InputText,
		Button,
		MultiSelect,
		ToggleButton
	},
	props: {
		form: {
			type: Object,
			default: () => {
				return {
					status: 'publish',
					title: '',
					content: '',
					categories: [],
					categoriesPro: [],
					specifications: [],
					horaire: [],
					international: false,
					dateUpdated: new Date(),
					dateCreated: new Date(),
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
			statusChoises: [
				{label: 'Publié', value: 'publish'},
				{label: 'Brouillon', value: 'draft'}
			],
		}
	},
	async mounted(){
		if(this.$store.state.filters.categories.length === undefined)
			await this.$store.dispatch('filters/filters');
	},
	computed: {
		categoriesChoises(){
			return this.jsonToArray(this.$store.state.filters.categories)
		},
		categoriesProChoises(){
			return this.jsonToArray(this.$store.state.filters.categoriesPro)
		},
		specificationsChoises(){
			return this.jsonToArray(this.$store.state.filters.specifications)
		},
		horaireChoises(){
			return this.jsonToArray(this.$store.state.filters.horaire)
		},
	},
	methods: {
		jsonToArray(json){
			let data = Object.values(json)
			return Object.keys(json).map((key, v) => {
				return {
					label: data[v],
					value: key
				}
			})
		},
		async submit(){
			this.saving = true
			const form = {
				token: this.$store.getters['auth/get_token'],
				businessID: this.$store.state.auth.current_user.id,
				title: this.form.title,
				status: this.form.status,
				content: this.form.content,
				categories: this.form.categories,
				categoriesPro: this.form.categoriesPro,
				specifications: this.form.specifications,
				horaire: this.form.horaire,
				international: this.form.international,
				dateCreated: this.form.dateCreated,
				dateUpdated: new Date(),
			}
			let response = {}
			if(this.use === 'add'){
				response = await this.$axios.post(
					'/jobs/create',
					form
				)
			}else if(this.use === 'edit'){
				form.id = this.$route.params.id
				response = await this.$axios.post(
					'/jobs/edit',
					form
				)
			}

			this.saving = false
			if(response.data.success){
				this.$toast.add({severity:'success', summary: 'Succès!', detail:'Sauvegarde effectué', life: 3000});
				await this.$router.push('/gestion/emplois/'+response.data.job.id)
			}else{
				this.$toast.add({severity:'error', summary: 'Erreur!', detail:response.data.error, life: 15000});
			}
		}
	}
}
</script>
