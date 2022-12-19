<template>
	<div>
		<AdminLayout>
			<Panel header="Configurations">
				<form @submit.prevent="submit">
					<FieldWrapper id="categoriesPro" label="Courriel lors de nouvelles inscriptions">
						<InputText class="w-full" type="email" v-model="form.new_business_email"></InputText>
					</FieldWrapper>

					<Button type="submit" label="Sauvegarder"></Button>
				</form>
			</Panel>
		</AdminLayout>
	</div>
</template>

<script>
import Panel from "primevue/panel"
import InputText from "primevue/inputtext";
import Button from "primevue/button"
export default {
	middleware: [
		'auth',
	],
	meta: {
		auth: {role: ['admin']}
	},
	components: {
		Panel, InputText, Button
	},
	data(){
		return {
			form: {
				new_business_email: '',
			}
		}
	},
	async fetch(){
		let response = await this.$axios.$post('/config', {
			token: this.$store.getters["auth/get_token"]
		})
		this.form = response.config
	},
	methods: {
		async submit(){
			let response = await this.$axios.$post('/config/save', {
				token: this.$store.getters["auth/get_token"],
				config: this.form
			})
			if(response.success)
				this.$toast.add({severity:'success', summary: 'Succès!', detail:"Sauvegardé effectuée!", life: 10000});
			else
				this.$toast.add({severity:'error', summary: 'Erreur!', detail:"Une erreur est survenue!", life: 10000});
		}
	}
}
</script>
