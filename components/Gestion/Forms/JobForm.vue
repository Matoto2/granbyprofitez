<template>
	<form @submit.prevent="submit">
		<FieldWrapper id="title" label="Titre de l'emploi *">
			<InputText required type="text" v-model="form.title"/>
		</FieldWrapper>
		<FieldWrapper id="status" label="Statut *">
			<Dropdown required id="status" v-model="form.status" :options="statusChoises" optionLabel="label" optionValue="value" placeholder="Choix" />
		</FieldWrapper>

		<FieldWrapper id="secteurs" label="Secteurs *">
			<MultiSelect required v-model="form.secteurs" :options="secteursChoises" optionLabel="label" optionValue="value" placeholder="Choix" display="chip" />
		</FieldWrapper>
		<FieldWrapper id="categoriesPro" label="Catégories Professionnels *">
			<MultiSelect required v-model="form.categoriesPro" :options="categoriesProChoises" optionLabel="label" optionValue="value" placeholder="Choix" display="chip" />
		</FieldWrapper>
		<FieldWrapper id="type_emploi" label="Spécifications *">
			<MultiSelect required v-model="form.type_emploi" :options="type_emploiChoises" optionLabel="label" optionValue="value" placeholder="Choix" display="chip" />
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
			<client-only>
				<quill-editor
					ref="editor"
					v-model="form.content"
				/>
			</client-only>
		</FieldWrapper>
		<div>
			<Button :disabled="saving" type="submit">{{ use === 'add' ? 'Ajouter':'Mettre à jour'}}</Button>
		</div>
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
		ToggleButton,
	},
	props: {
		form: {
			type: Object,
			default: () => {
				return {
					status: 'publish',
					title: '',
					content: '',
					secteurs: [],
					categoriesPro: [],
					type_emploi: [],
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
	methods: {
		async submit(){
			this.saving = true
			const form = {
				token: this.$store.getters['auth/get_token'],
				businessID: this.$store.state.auth.current_user.id,
				title: this.form.title,
				status: this.form.status,
				content: this.form.content,
				secteurs: this.form.secteurs,
				categoriesPro: this.form.categoriesPro,
				type_emploi: this.form.type_emploi,
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
<style scoped>
form{

}
</style>
