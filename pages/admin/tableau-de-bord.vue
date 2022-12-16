<template>
	<div>
		<AdminLayout>
			<Panel header="Tableau de bord">
				<TabView>
					<TabPanel header="Entreprises par secteurs">
						<div style="max-width: 450px">
							<EntrepriseParSecteur></EntrepriseParSecteur>
						</div>
					</TabPanel>
					<TabPanel header="Alertes emploi - Filtres">
						<StatsAlertesEmplois></StatsAlertesEmplois>
					</TabPanel>
					<TabPanel header="CV envoyés">
						<StatsSentCV></StatsSentCV>
					</TabPanel>
					<TabPanel header="Emplois">
						<StatsEmplois></StatsEmplois>
					</TabPanel>
				</TabView>
			</Panel>
		</AdminLayout>
	</div>
</template>

<script>
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Panel from "primevue/panel"
export default {
	middleware: [
		'auth',
		async ({store}) => {
			await store.dispatch('filters/filters')
		}
	],
	meta: {
		auth: {role: ['admin']}
	},
	components: {
		Panel,TabView,TabPanel
	},
}
</script>
