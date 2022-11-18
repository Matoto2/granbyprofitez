<template>
	<Menu :model="items" />
</template>
<script>
import Menu from 'primevue/menu';
export default {
	components: {
		Menu,
	},
	data() {
		return {
			items: [
				{
					label: 'Tableau de bord',
					icon:'pi pi-fw pi-th-large',
					command: () => {
						this.$router.push('/admin/tableau-de-bord')
					}
				},
				{
					label: 'Nouvelles',
					icon:'pi pi-fw pi-book',
					command: () => {
						this.$router.push('/admin/nouvelles')
					}
				},
				{
					label: 'Administrateurs',
					icon:'pi pi-fw pi-users',
					command: () => {
						this.$router.push('/admin/administrateurs')
					}
				}
			]
		}
	}
}
</script>
