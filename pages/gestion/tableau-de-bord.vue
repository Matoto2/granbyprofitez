<template>
	<div>
		<BusinessLayout title="Mon compte">
			<BusinessForm :form="resp.user" :use="'edit'"></BusinessForm>
		</BusinessLayout>
	</div>
</template>
<script>
export default {
	middleware: 'auth',
	meta: {
		auth: {role: ['business']}
	},
	async asyncData({ $dataApi, store }) {
		const resp = await $dataApi.getUser(store.getters['auth/user_id'])
		return {resp}
	}
}
</script>
