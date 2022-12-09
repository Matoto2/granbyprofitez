<template>
	<div>
		<AdminLayout title="Ajouter une entreprise">
			<BusinessForm @redirect="redirect" />
		</AdminLayout>
	</div>
</template>
<script>

export default {
	middleware: 'auth',
	meta: {
		auth: {role: ['admin']}
	},
	methods: {
		async redirect(){
			await this.$router.push('/admin/entreprises');
		}
	}
}
</script>
