<template>
	<div class="container">
		<h1>Bienvenue {{current_user?.name}}</h1>
		<div class="sidebar-wrapper">
			<div id="sidebar">
				<LeftMenu :items="menuItems"></LeftMenu>
			</div>
			<div class="content-wrapper">
				<div v-if="current_user?.is_confirmed === false" class="attente-appro">
					<h4>Votre compte est en attente d'approbation.</h4>
					<p>Vous pouvez finaliser les informations de votre compte ainsi que créer des emplois, mais rien ne sera visible encore sur le site web.<br>Merci de votre patience!</p></div>
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
					label: 'Mon compte',
					icon:'pi pi-fw pi-th-large',
					to: '/gestion/tableau-de-bord'
				},
				{
					label: 'Mes emplois',
					icon:'pi pi-fw pi-bookmark',
					to: '/gestion/emplois'
				},
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
.attente-appro{
	background-color: #f2f2f2;
	border-radius: 10px;
	padding: 1rem 2rem;
}
</style>
