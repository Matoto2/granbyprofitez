<template>
	<div>
		<AdminLayout title="Editer une nouvelle">
			<BusinessForm :form="resp.user" :use="'edit'" />
		</AdminLayout>
	</div>
</template>
<script>

export default {
	middleware: 'auth',
	meta: {
		auth: {role: ['admin']}
	},
	async asyncData({ $dataApi, params }) {
		const resp = await $dataApi.getUser(params.id)
		return {resp}
	}
}
</script>
