<template>
	<div class="page">
		<BannerPage h1="CANDIDAT INTERNATIONAL" image="/images/immigrer/banner.png" />
		<div class="container-lg page-description">
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus et autem corporis accusamus ad
				id deleniti aliquam voluptatum fugit temporibus, iste ipsum officiis a nihil omnis culpa sed odio quia!
			</p>
		</div>
		<SubBannerPage logo="/images/travailler/Groupe-1940.svg" image="/images/immigrer/Groupe-2029.png">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem earum soluta quasi animi
			adipisci
			deleniti. Quaerat, quasi eaque fugit dolorum nam inventore laborum? Maiores hic delectus eum mollitia
			doloremque
			minus.
		</SubBannerPage>

		<Carousel class="Carousel" :items="carouselItems" />

		<Accordeons :title="'Le ressources pour les candidatures internationales'" :items="items"
			component="AccordeonHelp" class="accordeons" />

	</div>
</template>

<script>
import Carousel from '../components/Layout/Carousel.vue';
import ExternalLinkBlock from '../components/Layout/ExternalLinkBlock.vue';

export default {
	data() {
		return {
			carouselItems: [
				{
					url: "/images/immigrer/Lac-Boivin-soir.png"
				},
				{
					url: "/images/immigrer/shutterstock_1125887402.png"
				},
			],
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
				{
					title: 'Ressource #4',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis dolor ut? Cumque debitis sapiente alias assumenda laborum possimus ex blanditiis id ipsa quidem temporibus inventore, quia deserunt voluptate rem?',
					image: "/images/travailler/arrimage.png",
					location: '740, rue Galt Ouest, suite 110, Sherbrooke , J1H 1Z3',
					website: 'arrimagestrie.com',
					phone: "819 564-7885",
					email: "info@arrimagestrie.com",
				},
				{
					title: 'Ressource #5',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis dolor ut? Cumque debitis sapiente alias assumenda laborum possimus ex blanditiis id ipsa quidem temporibus inventore, quia deserunt voluptate rem?',
					image: "/images/travailler/arrimage.png",
					location: '740, rue Galt Ouest, suite 110, Sherbrooke , J1H 1Z3',
					website: 'arrimagestrie.com',
					phone: "819 564-7885",
					email: "info@arrimagestrie.com",
				},
				{
					title: 'Ressource #6',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis dolor ut? Cumque debitis sapiente alias assumenda laborum possimus ex blanditiis id ipsa quidem temporibus inventore, quia deserunt voluptate rem?',
					image: "/images/travailler/arrimage.png",
					location: '740, rue Galt Ouest, suite 110, Sherbrooke , J1H 1Z3',
					website: 'arrimagestrie.com',
					phone: "819 564-7885",
					email: "info@arrimagestrie.com",
				},
				{
					title: 'Ressource #7',
					text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis dolor ut? Cumque debitis sapiente alias assumenda laborum possimus ex blanditiis id ipsa quidem temporibus inventore, quia deserunt voluptate rem?',
					image: "/images/travailler/arrimage.png",
					location: '740, rue Galt Ouest, suite 110, Sherbrooke , J1H 1Z3',
					website: 'arrimagestrie.com',
					phone: "819 564-7885",
					email: "info@arrimagestrie.com",
				},
			],
		};
	},
	components: { ExternalLinkBlock }
}
</script>

<style>

	.accordeons {
		margin-bottom: 60px;
	}
	.carousel {
		margin-bottom: 60px;
	}


</style>
