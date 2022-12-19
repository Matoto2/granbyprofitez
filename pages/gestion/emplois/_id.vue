<template>
	<div>
		<BusinessLayout title="Editer un emploi">
			<JobForm :form="resp.data" :use="'edit'" />
		</BusinessLayout>
	</div>
</template>
<script>

export default {
	middleware: 'auth',
	meta: {
		auth: {role: ['business']}
	},
	async asyncData({ params, store, error, $dataApi }) {
		const resp = await $dataApi.getSingleJob(params.id)
		if(resp.data.businessID !== store.getters["auth/user_id"])
			error({ statusCode: 403, message: "Oups, votre lien n'est pas légal!" })

		return {resp}
	}
}
</script>
