<template>
	<div>
		<AdminLayout title="Editer une entreprise">
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
