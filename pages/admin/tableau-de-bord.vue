<template>
	<div>
		<AdminLayout title="Tableau de bord">
			<ProfileForm></ProfileForm>
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
