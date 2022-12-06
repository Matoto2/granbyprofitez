<template>
	<form @submit.prevent="submit">
		<FieldWrapper id="title" label="Titre">
			<InputText type="text" @blur="slugify()" v-model="form.title"/>
		</FieldWrapper>
		<FieldWrapper id="slug" label="Slug">
			<InputText type="text" @blur="slugify()" v-model="form.slug"/>
		</FieldWrapper>
		<FieldWrapper id="status" label="Statut">
			<Dropdown id="status" v-model="form.status" :options="statusChoises" optionLabel="label" optionValue="value" placeholder="Choix" />
		</FieldWrapper>
		<FieldWrapper id="date" label="Date publiée">
			<client-only>
				<v-date-picker v-model="form.posted_date" mode="dateTime" is24hr>
					<template v-slot="{ inputValue, inputEvents }">
						<InputText :value="inputValue"
								   v-on="inputEvents"></InputText>
					</template>
				</v-date-picker>
			</client-only>
		</FieldWrapper>
		<FieldWrapper id="content" label="Contenu">
			<client-only>
				<quill-editor
					ref="editor"
					v-model="form.content"
				/>
			</client-only>
		</FieldWrapper>
		<Button :disabled="saving" type="submit">{{ use === 'add' ? 'Ajouter':'Mettre à jour'}}</Button>
	</form>
</template>
<script>
import Dropdown from 'primevue/dropdown';
import InputText from 'primevue/inputtext';

import Button from 'primevue/button';
export default {
	components: {
		Dropdown,
		InputText,
		Button,
	},
	props: {
		form: {
			type: Object,
			default: () => {
				return {
					status: 'publish',
					posted_date: new Date(),
					title: '',
					slug: '',
					content: '',
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
	methods: {
		slugify(){
			this.form.slug = (this.form.slug === '') ? this.$slugify(this.form.title):this.$slugify(this.form.slug)
		},
		async submit(){
			this.saving = true
			const form = {
				token: this.$store.getters['auth/get_token'],
				title: this.form.title,
				slug: this.form.slug,
				status: this.form.status,
				posted_date: this.form.posted_date,
				content: this.form.content
			}
			let response = {}
			if(this.use === 'add'){
				response = await this.$axios.post(
					'/news/create',
					form
				)
			}else if(this.use === 'edit'){
				form.id = this.$route.params.id
				response = await this.$axios.post(
					'/news/edit',
					form
				)
			}

			this.saving = false
			if(response.data.success){
				this.$toast.add({severity:'success', summary: 'Succès!', detail:'Sauvegarde effectué', life: 3000});
				await this.$router.push('/admin/nouvelles/'+response.data.news.id)
			}else{
				this.$toast.add({severity:'error', summary: 'Erreur!', detail:response.data.error, life: 15000});
			}
		}
	}
}
</script>
