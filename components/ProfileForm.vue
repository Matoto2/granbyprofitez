<template>
	<form @submit.prevent="submit">
		<span class="p-float-label">
			<InputText id="firstname" type="text" v-model="form.firstname" />
			<label for="firstname">Prénom</label>
		</span>
		<span class="p-float-label">
			<InputText id="lastname" type="text" v-model="form.lastname" />
			<label for="lastname">Nom</label>
		</span>
		<Button type="submit" label="Sauvegarder"></Button>
	</form>
</template>

<script>
export default {
	components: {
		InputText: require('primevue/inputtext').default,
		Button: require('primevue/button').default,
	},
	data(){
		return {
			form: {
				firstname: this.$store.state.auth.current_user?.firstname,
				lastname: this.$store.state.auth.current_user?.lastname,
			}
		}
	},
	methods: {
		submit(){
			console.log('sub sub submit!!')
		}
	}
}
</script>
