<template>
	<div>
		<AdminLayout title="Editer un emploi">
			<JobForm :form="resp.data" :businessID="resp.data.businessID" :use="'edit'" />
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
		const resp = await $dataApi.getSingleJob(params.id)
		return {resp}
	}
}
</script>
