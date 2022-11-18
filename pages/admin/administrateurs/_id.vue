<template>
	<div>
		<AdminLayout title="Editer une nouvelle">
			<UserForm :form="resp.user" :use="'edit'" />
		</AdminLayout>
	</div>
</template>
<script>

export default {
	middleware: 'auth',
	meta: {
		auth: {role: ['admin']}
	},
	async asyncData({ params, $axios, error, store }) {
		const resp = await $axios.$post('/users/get', {
			token: store.getters['auth/get_token'],
			id: params.id
		})
		if(!resp.success)
			error({ statusCode: 404, message: 'Oups, vérifier votre URL' })
		return {resp}
	}
}
</script>
