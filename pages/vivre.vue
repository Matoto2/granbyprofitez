<template>
	<div class="page">
		<BannerPage h1="Etudier" image="/images/vivre/banner.png" />
		<div class="container-lg page-description">
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus et autem corporis accusamus ad
				id deleniti aliquam voluptatum fugit temporibus, iste ipsum officiis a nihil omnis culpa sed odio quia!
			</p>
		</div>
		<SubBannerPage logo="/images/travailler/Groupe-1940.svg" image="/images/etudier/Groupe-2029.png" :type="2">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem earum soluta quasi animi
			adipisci
			deleniti. Quaerat, quasi eaque fugit dolorum nam inventore laborum? Maiores hic delectus eum mollitia
			doloremque
			minus.f
		</SubBannerPage>
		<div class="container vivre-gallery">
			<div v-for="img in gallery">
				<img :src="img.img" :alt="img.img">
			</div>
		</div>
		<div class="container offer-container" style="">
			<div class=" offer-btn" style="">
				<a href="" class="btn">Voir les offres d'emploi</a>
			</div>
		</div>
		<div class="external-links-block first container">
			<ExternalLinkBlock v-for="link in externalLinkBlocks" :link="link" />
		</div>
		<Accordeons :title="'Liste des écoles'" :items="items" component="AccordeonHelp" style="margin-bottom: 60px;" />
		<Accordeons :title="'Espace de travail'" :items="items" component="AccordeonHelp" style="margin-bottom: 60px;"
			:fistclosed="true" />
		<Accordeons :title="'Organisme de soutien'" :items="items" component="AccordeonHelp" :fistclosed="true" />
		<div class="external-links-block sec container">
			<ExternalLinkBlock v-for="link in externalLinkBlocks2" :link="link" />
		</div>
	</div>
</template>

<script>
import ExternalLinkBlock from '../components/Layout/ExternalLinkBlock.vue';
import image from "@/static/images/travailler/Groupe-1940.svg"
export default {
	data() {
		return {
			image,
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
					text: 'TROUVER UN LOGEMENT EN QUELQUES ÉTAPES FACILES',
					image: '/images/vivre/triplex.png',
					url: '',
					color: "#79A444"
				},
				{
					text: 'AVANTAGES DE VIVRE À GRANBY',
					image: '/images/travailler/denisLandryPhoto-11.png',
					url: '',
					color: '#316CB2'
				},
			],
			externalLinkBlocks2: [
				{
					text: 'RECHERCHE DE PROGRAMME D’ÉTUDES DANS LES ALENTOURS',
					image: '/images/vivre/Rectangle-986.png',
					url: '',
					color: '#316CB2'
				},
			],
			gallery: [
				{
					img: "/images/vivre/Rectangle-853.png",
					alt: "er",
				},
				{
					img: "/images/vivre/Rectangle-853-1.png",
					alt: "",
				},
				{
					img: "/images/vivre/Rectangle-856.png",
					alt: "",
				},
				{
					img: "/images/vivre/Rectangle-856-1.png",
					alt: "",
				},
				{
					img: "/images/vivre/denisLandryPhoto-(65).png",
					alt: "",
				},
				{
					img: "/images/vivre/1H7_3910.png",
					alt: "",
				}
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

<style>
.vivre-gallery {
	display: grid;
	gap: 2px;
	margin-top: 50px;
	grid-template-columns: 1fr;

	@media (min-width: 480px) {
		margin-top: 80px;
		grid-template-columns: repeat(2, 1fr);
		gap: 0px;
	}

	/* @media (min-width: 768px) {
		margin-top: 150px;
	} */

	&>div {
		aspect-ratio: 849/430;
		overflow: clip;
		width: 100%;

		&:nth-child(even) {
			@media (min-width: 480px) {
				transform: translateY(-140px);
			}
		}

		&>img {
			height: 100%;
			width: 100%;
			object-fit: cover
		}
	}
}

.external-links-block.first {
	@media (min-width: 480px) {
		margin-top: 115px;
		margin-bottom: 80px;

	}
}

.external-links-block.sec {
	@media (min-width: 480px) {
		margin-top: 96px;
		margin-bottom: 150px;
	}
}

.offer-container {
	display: flex;
	margin-top: 20px;

	@media (min-width: 480px) {
		margin-top: 0px;
		justify-content: end;
	}

	.offer-btn {
		display: grid;
		place-content: center;

		@media (min-width: 480px) {
			width: 50%;
		}
	}
}
</style>
