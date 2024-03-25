<template>
	<div class="page">
		<BannerPage h1="Travailler" image="/images/travailler/banner.png" />
		<div class="search">
			<HomeSearch>
				<template #more>
					<nuxt-link :to="{ name: 'alertes-emplois' }">
						<svg xmlns="http://www.w3.org/2000/svg" width="31.856" height="38.408"
							viewBox="0 0 31.856 38.408">
							<path id="Tracé_1387" data-name="Tracé 1387"
								d="M18.2,2.4V3.742A11.241,11.241,0,0,1,27.306,15v2.506a15.581,15.581,0,0,0,3.115,9.377l1.06,1.4a1.876,1.876,0,0,1,.206,1.905,1.7,1.7,0,0,1-1.536,1.02H1.706a1.7,1.7,0,0,1-1.538-1.02,1.883,1.883,0,0,1,.206-1.905l1.06-1.4a15.55,15.55,0,0,0,3.117-9.377V15a11.241,11.241,0,0,1,9.1-11.261V2.4a2.279,2.279,0,1,1,4.551,0ZM15.36,7.2a7.61,7.61,0,0,0-7.4,7.8v2.506a19.373,19.373,0,0,1-2.822,10.1H26.716a19.381,19.381,0,0,1-2.823-10.1V15a7.61,7.61,0,0,0-7.4-7.8Zm5.12,26.406a5.065,5.065,0,0,1-1.33,3.4,4.544,4.544,0,0,1-3.221,1.4,4.435,4.435,0,0,1-3.221-1.4,5.065,5.065,0,0,1-1.33-3.4Z"
								transform="translate(0)" fill="#fff" />
						</svg>
						<span>INSCRIPTION AUX ALERTES-EMPLOIS</span>
					</nuxt-link>
				</template>
			</HomeSearch>
		</div>
		<div style="margin-bottom: 36px;">
			<SubBannerPage logo="/images/travailler/Groupe-1940.svg" image="/images/travailler/Groupe-2029.png">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem earum soluta quasi animi
				adipisci
				deleniti. Quaerat, quasi eaque fugit dolorum nam inventore laborum? Maiores hic delectus eum mollitia
				doloremque
				minus.
			</SubBannerPage>
		</div>
		<Accordeons :title="'Obtiens de l\'aide'" :items="items" component="AccordeonHelp" />
		<div class="external-links-block container">
			<ExternalLinkBlock v-for="link in externalLinkBlocks" :link="link" />
		</div>
		<div class="container-lg" style="margin-top: 96px; margin-top: 70px;">
			<h2 style="margin-bottom: 36px;">Tu habites à l’extérieur du Canada?</h2>
			<div>
				<ExternalLinkRow v-for="link in externalLinkRows" :link="link" />
			</div>
		</div>
	</div>
</template>

<script>
import ExternalLinkBlock from '../components/Layout/ExternalLinkBlock.vue';

export default {
	data() {
		return {
			items: [
				{
					title: 'Ressource #1',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis dolor ut? Cumque debitis sapiente alias assumenda laborum possimus ex blanditiis id ipsa quidem temporibus inventore, quia deserunt voluptate rem?',
					image: "/images/travailler/arrimage.png",
					location: '740, rue Galt Ouest, suite 110, Sherbrooke , J1H 1Z3',
					website: 'arrimagestrie.com',
					phone: "819 564-7885",
					email: "info@arrimagestrie.com",
				},
				{
					title: 'Ressource #2',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis dolor ut? Cumque debitis sapiente alias assumenda laborum possimus ex blanditiis id ipsa quidem temporibus inventore, quia deserunt voluptate rem?',
					image: "/images/travailler/arrimage.png",
					location: '740, rue Galt Ouest, suite 110, Sherbrooke , J1H 1Z3',
					website: 'arrimagestrie.com',
					phone: "819 564-7885",
					email: "info@arrimagestrie.com",
				},
				{
					title: 'Ressource #3',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis dolor ut? Cumque debitis sapiente alias assumenda laborum possimus ex blanditiis id ipsa quidem temporibus inventore, quia deserunt voluptate rem?',
					image: "/images/travailler/arrimage.png",
					location: '740, rue Galt Ouest, suite 110, Sherbrooke , J1H 1Z3',
					website: 'arrimagestrie.com',
					phone: "819 564-7885",
					email: "info@arrimagestrie.com",
				},
			],
			externalLinkBlocks: [
				{
					text: 'RÉPERTOIRE INDUSTRIEL DE GRANBY ET LA RÉGION',
					image: '/images/travailler/Rectangle-985.png',
					url: '',
					color: "#79A444"
				},
				{
					text: 'RÉPERTOIRE DES COMMERCES DE GRANBY ET LA RÉGION',
					image: '/images/travailler/denisLandryPhoto-11.png',
					url: '',
					color: '#316CB2'
				},
			],
			externalLinkRows: [
				{
					text: 'Demeure à l’affût des opportunités de recrutement dans ton pays avec les missions de recrutement à l’international Journées Québec',
					image: '/images/travailler/Rectangle-970.png',
					url: 'journeesquebec.gouv.qc.ca',
				},
				{
					text: 'Inscits-toi sur le portail Arrima - services d’immigration en ligne',
					image: '/images/travailler/Rectangle-973.png',
					url: 'quebec.ca/immigration/services-en-ligne',
				},
				{
					text: 'Tout savoir pour apprendre le français, immigrer au Québec, faire un séjour d’études et obtenir de l’aide pour s’intégrer : Immigration au Québec',
					image: '/images/travailler/Rectangle-975.png',
					url: 'quebec.ca/immigration/services-en-ligne',
				},
				{
					text: 'Il existe un service gratuit d’intégration pour les personnes immigrantes : Accompagnement Québec',
					image: '/images/travailler/Rectangle-977.png',
					url: 'quebec.ca/immigration/service-integration-personnes-immigrantes',
				},

			],
		};
	},
	components: { ExternalLinkBlock }
}
</script>
