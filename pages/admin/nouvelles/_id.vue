<template>
	<div>
		<AdminLayout :title="'titre de la nouvelle'">
			<FieldWrapper id="title" label="Titre">
				<InputText type="text" v-model="form.title"/>
			</FieldWrapper>
			<FieldWrapper id="status" label="Statut">
				<Dropdown id="status" v-model="form.selectedStatus" :options="status" optionLabel="label" placeholder="Choix" />
			</FieldWrapper>
			<FieldWrapper id="date" label="Date publiée">
				<Calendar id="date" v-model="form.selectedDate" dateFormat="yy-mm-dd"></Calendar>
			</FieldWrapper>
			<FieldWrapper id="content" label="Contenu">
				{{ form.content }}
			</FieldWrapper>
		</AdminLayout>
	</div>
</template>
<script>
import moment from 'moment'

import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import InputText from 'primevue/inputtext';

export default {
	middleware: 'auth',
	meta: {
		auth: {role: ['admin']}
	},
	components: {
		Dropdown,
		Calendar,
		InputText
	},
	data(){
		return {
			status: [
				{label: 'Publié', value: 1},
				{label: 'Brouillon', value: 2}
			],
			form: {
				selectedStatus: null,
				selectedDate: moment().toDate(),
				title: '',
				content: '',
			}
		}
	}
}
</script>
