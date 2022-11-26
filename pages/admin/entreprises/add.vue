<template>
	<div>
		<AdminLayout title="Ajouter une entreprise">
			<BusinessForm />
		</AdminLayout>
	</div>
</template>
<script>

export default {
	middleware: 'auth',
	meta: {
		auth: {role: ['admin']}
	},
}
</script>
