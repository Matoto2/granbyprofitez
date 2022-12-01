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
	async asyncData({ params, $dataApi }) {
		const resp = await $dataApi.getSingleJob(params.id)
		return {resp}
	}
}
</script>
