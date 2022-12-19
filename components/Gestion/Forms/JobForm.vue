<template>
	<form @submit.prevent="submit">
		<Panel style="margin-bottom: 2rem" header="Information">
			<div class="p-fluid grid formgrid">
				<FieldWrapper id="title" label="Titre de l'emploi *" childclass="md:col-4">
					<InputText required type="text" v-model="form.title"/>
				</FieldWrapper>
				<FieldWrapper id="status" label="Statut *" childclass="md:col-4">
					<Dropdown required id="status" v-model="form.status" :options="statusChoises" optionLabel="label" optionValue="value" placeholder="Choix" />
				</FieldWrapper>
				<FieldWrapper id="secteurs" label="Secteurs *" childclass="md:col-4">
					<MultiSelect required v-model="form.secteurs" :options="secteursChoises" optionLabel="label" optionValue="value" placeholder="Choix" display="chip" />
				</FieldWrapper>
				<FieldWrapper id="categoriesPro" label="Catégories Professionnels *" childclass="md:col-4">
					<MultiSelect required v-model="form.categoriesPro" :options="categoriesProChoises" optionLabel="label" optionValue="value" placeholder="Choix" display="chip" />
				</FieldWrapper>
				<FieldWrapper id="type_emploi" label="Spécifications *" childclass="md:col-4">
					<MultiSelect required v-model="form.type_emploi" :options="type_emploiChoises" optionLabel="label" optionValue="value" placeholder="Choix" display="chip" />
				</FieldWrapper>
				<FieldWrapper id="horaire" label="Horaire *" childclass="md:col-4">
					<MultiSelect required v-model="form.horaire" :options="horaireChoises" optionLabel="label" optionValue="value" placeholder="Choix" display="chip" />
				</FieldWrapper>
				<FieldWrapper id="postes_dispo" label="Nombre de poste disponible" childclass="md:col-4">
					<InputText type="text" v-model="form.postes_dispo"/>
				</FieldWrapper>
				<FieldWrapper id="salaire" label="Salaire" childclass="md:col-4">
					<InputText type="text" v-model="form.salaire"/>
				</FieldWrapper>
				<FieldWrapper id="heures_semaine" label="Heures par semaine" childclass="md:col-4">
					<InputText type="text" v-model="form.heures_semaine"/>
				</FieldWrapper>
				<FieldWrapper id="entree_fonction" label="Date d'entrée en fonction" childclass="md:col-4">
					<Calendar :value="form?.entree_fonction ? new Date(form.entree_fonction):new Date()"
							  @date-select="value => form.entree_fonction = value"
							  dateFormat="yy-mm-dd"
					/>
				</FieldWrapper>
				<FieldWrapper id="scolarite" label="Niveau de scolarité" childclass="md:col-4">
					<MultiSelect id="scolarite" v-model="form.scolarite" :options="scolariteChoices" optionLabel="label" optionValue="value" placeholder="Choix" />
				</FieldWrapper>
				<FieldWrapper id="experience" label="Expérience" childclass="md:col-4">
					<Dropdown id="experience" v-model="form.experience" :options="experienceChoices" optionLabel="label" optionValue="value" placeholder="Choix" />
				</FieldWrapper>
				<FieldWrapper id="langues" label="Langues parlées et écrites" childclass="md:col-4">
					<MultiSelect id="langues" v-model="form.langues" :options="languesChoices" optionLabel="label" optionValue="value" placeholder="Choix" />
				</FieldWrapper>
				<FieldWrapper id="fonctions" label="Fonctions">
					<client-only>
						<quill-editor
							ref="editor"
							v-model="form.fonctions"
						/>
					</client-only>
				</FieldWrapper>
				<FieldWrapper id="competences" label="Compétences">
					<client-only>
						<quill-editor
							ref="editor"
							v-model="form.competences"
						/>
					</client-only>
				</FieldWrapper>
				<FieldWrapper id="precisions" label="Précisions / Renseignements additionnels / Valeurs de l’entreprise">
					<client-only>
						<quill-editor
							ref="editor"
							v-model="form.precisions"
						/>
					</client-only>
				</FieldWrapper>
				<div>
					<FieldWrapper id="international" label="Candidatures internationnale">
						<ToggleButton v-model="form.international"
									  onLabel="J'accepte les candidatures internationale"
									  offLabel="Je refuse les candidatures internationale"
									  onIcon="pi pi-check"
									  offIcon="pi pi-times"
						/>
					</FieldWrapper>
				</div>

			</div>
		</Panel>
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
import Panel from 'primevue/panel';
import Calendar from 'primevue/calendar'

import scolarite from '@/data/scolarite.json'
import experience from '@/data/experience.json'
import langues from '@/data/langues.json'

export default {
	components: {
		Dropdown,
		InputText,
		Button,
		MultiSelect,
		ToggleButton,
		Panel,
		Calendar
	},
	props: {
		form: {
			type: Object,
			default: () => {
				return {
					status: 'publish',
					title: '',
					fonctions: '',
					competences: '',
					precisions: '',
					secteurs: [],
					categoriesPro: [],
					type_emploi: [],
					horaire: [],
					scolarite: '',
					postes_dispo: 1,
					experience: '',
					langues: '',
					salaire: '',
					heures_semaine: '',
					entree_fonction: new Date(),
					international: false,
					dateUpdated: new Date(),
					dateCreated: new Date(),
					dateRemonte: new Date(),
				}
			}
		},
		use: {
			type: String,
			default: 'add'
		},
		businessID: {
			type: String
		}
	},
	data(){
		return {
			saving: false,
			statusChoises: [
				{label: 'Publié', value: 'publish'},
				{label: 'Brouillon', value: 'draft'},
				{label: 'Inactif', value: 'inactive'}
			],
			scolariteChoices: scolarite,
			experienceChoices: experience,
			languesChoices: langues,
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
		defaultBusinessID(){
			return this.businessID ?? this.$store.getters["auth/user_id"]
		}
	},
	methods: {
		async submit(){
			this.saving = true
			const form = this.form

			form.token = this.$store.getters['auth/get_token']
			form.businessID = this.defaultBusinessID
			form.dateUpdated = new Date()

			if(this.$store.getters["auth/user"]?.is_confirmed === false){
				form.is_confirmed = false
			}else{
				form.is_confirmed = null
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
				if(this.$store.getters["auth/user_id"] === this.defaultBusinessID)
					await this.$router.push('/gestion/emplois/'+response.data.job.id)
				else
					await this.$router.push('/admin/emplois/'+response.data.job.id)
			}else{
				this.$toast.add({severity:'error', summary: 'Erreur!', detail:response.data.error, life: 15000});
			}
		}
	}
}
</script>
