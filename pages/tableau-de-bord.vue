<template>
	<div>
		<h1>Bienvenue {{current_user.firstname}}</h1>
		<div class="profile-form-wrapper">
			<ProfileForm />
		</div>
	</div>
</template>

<script>
export default {
	middleware: 'auth',
	meta: {
		auth: {role: ['admin', 'business']}
	},
	computed: {
		current_user(){
			return this.$store.state.auth.current_user
		}
	}
}
</script>
