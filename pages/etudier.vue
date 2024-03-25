<template>
	<div class="page">
		<BannerPage h1="Etudier" image="./images/etudier/banner.png" />
		<div class="container-lg page-description">
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus et autem corporis accusamus ad
				id deleniti aliquam voluptatum fugit temporibus, iste ipsum officiis a nihil omnis culpa sed odio quia!
			</p>
		</div>
		<SubBannerPage logo="./images/travailler/Groupe-1940.svg" image="./images/etudier/Groupe-2029.png">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem earum soluta quasi animi
			adipisci
			deleniti. Quaerat, quasi eaque fugit dolorum nam inventore laborum? Maiores hic delectus eum mollitia
			doloremque
			minus.
		</SubBannerPage>
			<Accordeons :title="'Établissements d’enseignement à Granby'" :items="items" component="AccordeonHelp" />

		<div class="container-lg" style="margin-top: 96px; margin-top: 70px;">
			<h2 style="margin-bottom: 36px;">Étudiants internationaux</h2>
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
					title: 'Gecep de Granby',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis dolor ut? Cumque debitis sapiente alias assumenda laborum possimus ex blanditiis id ipsa quidem temporibus inventore, quia deserunt voluptate rem?',
					image: "./images/etudier/gecep.png",
					location: '235 Rue Saint-Jacques, Granby, QC J2G 3N1',
					website: 'cegepgranby.ca/',
					phone: " 450 372-6614",
					email: " info@cegepgranby.qc.ca",
				},
				{
					title: 'CCSVDC',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis dolor ut? Cumque debitis sapiente alias assumenda laborum possimus ex blanditiis id ipsa quidem temporibus inventore, quia deserunt voluptate rem?',
					image: "./images/travailler/arrimage.png",
					location: '740, rue Galt Ouest, suite 110, Sherbrooke , J1H 1Z3',
					website: 'arrimagestrie.com',
					phone: "819 564-7885",
					email: "info@arrimagestrie.com",
				},
				{
					title: 'CRIF',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis dolor ut? Cumque debitis sapiente alias assumenda laborum possimus ex blanditiis id ipsa quidem temporibus inventore, quia deserunt voluptate rem?',
					image: "./images/travailler/arrimage.png",
					location: '740, rue Galt Ouest, suite 110, Sherbrooke , J1H 1Z3',
					website: 'arrimagestrie.com',
					phone: "819 564-7885",
					email: "info@arrimagestrie.com",
				},
				{
					title: 'CBM',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis dolor ut? Cumque debitis sapiente alias assumenda laborum possimus ex blanditiis id ipsa quidem temporibus inventore, quia deserunt voluptate rem?',
					image: "./images/travailler/arrimage.png",
					location: '740, rue Galt Ouest, suite 110, Sherbrooke , J1H 1Z3',
					website: 'arrimagestrie.com',
					phone: "819 564-7885",
					email: "info@arrimagestrie.com",
				},
			],

			externalLinkRows: [
				{
					text: 'Pour tout savoir sur les études au Québec : les avantages, le système d’éducation, les démarches d’admission dans un établissement d’enseignement, travailler pendant les études, c’est possible, rester au Québec après les études, etc.',
					image: './images/etudier/sejour-etude.png',
					url: 'quebec.ca/education/etudier-quebec',
				},
				{
					text: `Étudiants internationaux au Cégep de Granby
							<ul>
								<li> Diplôme d’études collégiales</li>
								<li> Admission et semestress</li>
							</ul>
					`,
					image: './images/etudier/gecep-lite.png',
					url: 'cegepgranby.ca/international',
				},
			],
		};
	},
	components: { ExternalLinkBlock }
}
</script>

<style></style>
