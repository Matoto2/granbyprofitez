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
	async asyncData({ params, $dataApi }) {
		const resp = await $dataApi.getSingleNews(params.id)
		return {resp}
	}
}
</script>
