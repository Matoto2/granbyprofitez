<template>
	<div>
		<AdminLayout title="Ajouter un administrateur">
			<UserForm />
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
