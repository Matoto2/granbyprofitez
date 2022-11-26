<template>
	<div>
		<AdminLayout title="Editer un administrateur">
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
	async asyncData({ params, $dataApi }) {
		const resp = await $dataApi.getUser(params.id)
		return {resp}
	}
}
</script>
