<template>
	<div>
		<AdminLayout title="Ajouter une nouvelle">
			<NewsForm />
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
