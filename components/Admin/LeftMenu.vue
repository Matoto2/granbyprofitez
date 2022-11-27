<template>
	<nav class="menu-left-nav">
		<ul class="menu-left">
			<li v-for="item in items">
				<NuxtLink :to="item.to">
					<i :class="item.icon"></i>
					{{item.label}}
				</NuxtLink>
			</li>
		</ul>
	</nav>

</template>
<script>
export default {
	data() {
		return {
			items: [
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
.menu-left{
	padding-left: 0;
	list-style: none;
}
nav a{
	padding: .5rem;
	border-bottom: 1px solid #ccc;
	display: block;
	color: #000;
	text-decoration: none
}
a.nuxt-link-active{
	font-weight: 700;
	background: #f2f2f2;
}
</style>
