<template>
	<div class="job-search-wrapper">
		<div class="container">
			<form method="post">
				<input type="text" v-model="searchInput" placeholder="Titre du poste, mot clé, entreprise, etc">
				<MultiSelect v-model="form.secteurs"
							 :options="secteursChoises"
							 optionLabel="label"
							 optionValue="value"
							 placeholder="Secteurs"
							 display="chip"	/>
				<MultiSelect v-model="form.categoriesPro"
							 :options="categoriesProChoises"
							 optionLabel="label"
							 optionValue="value"
							 style="flex-grow: 1"
							 placeholder="Catégories professionnelles"
							 display="chip" />
				<MultiSelect v-model="form.horaire"
							 :options="type_emploiChoises"
							 optionLabel="label"
							 optionValue="value"
							 placeholder="Horaire"
							 display="chip" />
				<MultiSelect v-model="form.type_emploi"
							 :options="horaireChoises"
							 optionLabel="label"
							 optionValue="value"
							 placeholder="Type d'emploi"
							 display="chip" />

				<div class="checkbox-wrapper international-wrapper">
					<label for="international-checkbox">
						Recrutement <br>international
					</label>
					<Checkbox id="international-checkbox" v-model="form.international" :binary="true" />
				</div>
				<div @click="reset" class="checkbox-wrapper reset-search-wrapper">
					<label>
						Effacer les<br>sélections
					</label>
					<svg xmlns="http://www.w3.org/2000/svg" width="21.759" height="21.759" viewBox="0 0 21.759 21.759">
						<path d="M20.432,32.23a.776.776,0,0,1,1.1,1.1l-9.553,9.553,9.553,9.553a.776.776,0,0,1-1.1,1.1l-9.553-9.553L1.326,53.532a.777.777,0,1,1-1.1-1.1l9.554-9.553L.228,33.329a.777.777,0,0,1,1.1-1.1l9.553,9.554Z" transform="translate(0 -32.003)" fill="#838383"/>
					</svg>
				</div>

			</form>
		</div>
	</div>
</template>
<script>
import MultiSelect from "primevue/multiselect"
import Checkbox from 'primevue/checkbox'
export default {
	components: {
		MultiSelect,
		Checkbox
	},
	data(){
		return {
			timeout: null,
			form: {}
		}
	},
	watch: {
		form: {
			handler() {
				this.submit()
			},
			deep: true,
			immediate: false,
		}
	},
	async mounted(){
		this.reset()
		if(this.$store.getters["filters/secteurs"].length === undefined){
			await this.$store.dispatch('filters/filters')
		}
	},
	computed: {
		searchInput: {
			get(){
				return this.form.search
			},
			set(val){
				if (this.timeout) clearTimeout(this.timeout)
				this.timeout = setTimeout(() => {
					this.form.search = val
				}, 500)
			}
		},
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
		submit(){
			this.$emit('query', this.form)
		},
		reset(){
			this.form = {
				search: '',
				secteurs: [],
				categoriesPro: [],
				horaire: [],
				type_emploi: [],
				international: false,
			}
		}
	}
}
</script>
<style scoped>
.container{
	background-color: #414141;
	border-radius: 10px;
	padding: 2rem;
	max-width: 1600px
}
form{
	position: relative;
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
}
input{
	background-color: #fff;
	border-radius: 10px;
	font-size: 1.1rem;
	padding: .5rem 1.5rem;
	outline: none;
	border: none;
	width: 100%;
	height: 71px;
	max-width: 465px;
}
.checkbox-wrapper{
	display: flex;
	align-items: center;
}
.international-wrapper{
	justify-self: flex-end;
	margin-left: auto;
}
label{
	text-transform: uppercase;
	color: #fff;
	font-size: .9rem;
	font-weigth: 500;
	margin-right: 1rem;
	cursor: pointer;
}
.reset-search-wrapper{
	margin-left: 3rem;
}
</style>


<style>
.job-search-wrapper .p-multiselect:not(.p-disabled).p-focus {
	outline: none;
	border: 1px solid #838383;
	box-shadow: none;
}
.job-search-wrapper .p-multiselect {
	background: transparent;
	border: 1px solid #838383;
	height: 71px;
	transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
	border-radius: 10px;
	width: 400px;
}
.job-search-wrapper .p-multiselect .p-multiselect-trigger {
	color: #EDA008;
}
.job-search-wrapper .p-multiselect .p-multiselect-trigger .pi-chevron-down:before{
	font-size: 1.4rem;
}
.job-search-wrapper .p-multiselect-label-container {
	display: flex;
	align-items: center;
	text-transform: uppercase;
}
.job-search-wrapper .p-multiselect .p-multiselect-label {
	padding: 1rem;
	color: #fff;
	font-size: 1.1rem;
}
.job-search-wrapper .p-multiselect-panel .p-multiselect-header {
	padding: 0 .5rem;
}
.job-search-wrapper .p-multiselect-panel .p-multiselect-items .p-multiselect-item {
	padding: 0.2rem .5rem;
}
.job-search-wrapper .p-multiselect.p-multiselect-chip .p-multiselect-token {
	padding: 0.5rem 0.75rem;
	border-radius: 10px;
}
.job-search-wrapper .p-multiselect-token-label{
	font-size: .9rem
}
.job-search-wrapper .checkbox-wrapper .p-checkbox{
	width: 27px;
	height: 27px;
}
.job-search-wrapper .checkbox-wrapper .p-checkbox .p-checkbox-box {
	border: 2px solid #838383;
	background: transparent;
	width: 27px;
	height: 27px;
	color: #495057;
	border-radius: 3px;
	transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}
.job-search-wrapper .checkbox-wrapper .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover,
.job-search-wrapper .checkbox-wrapper .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus{
	border-color: #838383;
	box-shadow: none;
}
</style>
