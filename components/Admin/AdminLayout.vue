<template>
	<div class="container">
		<h1>Bienvenue {{current_user?.name}}</h1>
		<div class="sidebar-wrapper">
			<div id="sidebar">
				<LeftMenu :items="menuItems"></LeftMenu>
			</div>
			<div class="content-wrapper">
				<h2>{{ title }}</h2>
				<slot></slot>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	props: ["title"],
	computed: {
		current_user(){
			return this.$store.state.auth.current_user
		}
	},
	data(){
		return {
			menuItems: [
				{
					label: 'Tableau de bord',
					icon:'pi pi-fw pi-th-large',
					to: '/admin/tableau-de-bord'
				},
				{
					label: 'Entreprises',
					icon:'pi pi-fw pi-building',
					to: '/admin/entreprises'
				},
				{
					label: 'Nouvelles',
					icon:'pi pi-fw pi-book',
					to: '/admin/nouvelles'
				},
				{
					label: 'Administrateurs',
					icon:'pi pi-fw pi-users',
					to: '/admin/administrateurs'
				}
			]
		}
	}
}
</script>
<style scoped>
.sidebar-wrapper{
	display: grid;
	grid-template-columns: 300px 1fr;
	gap: 3rem;
}
</style>
