<template>
	<div>
		<BusinessLayout title="Ajouter un emploi">
			<JobForm />
		</BusinessLayout>
	</div>
</template>
<script>

export default {
	middleware: 'auth',
	meta: {
		auth: {role: ['business']}
	},
}
</script>
