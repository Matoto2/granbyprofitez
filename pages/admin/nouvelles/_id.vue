<template>
	<div>
		<AdminLayout title="Editer une nouvelle">
			<NewsForm :form="resp.data" :use="'edit'" />
		</AdminLayout>
	</div>
</template>
<script>

export default {
	middleware: 'auth',
	meta: {
		auth: {role: ['admin']}
	},
	async asyncData({ params, $axios, error }) {
		const resp = await $axios.$post('/news/get', {
			id: params.id
		})
		if(!resp.success)
			error({ statusCode: 404, message: 'Oups, vérifier votre URL' })
		return {resp}
	}
}
</script>
