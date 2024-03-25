<template>
	<div class="">
		<div class="container">
			<div class="container-lg">
				<h2>
					La région en images
				</h2>
			</div>
			<div class="carousel">
				<div class="swiper">
					<div class="swiper-wrapper">
						<div v-for="(item, i) in items" :key="i" class="swiper-slide" :class="`slide--${i}`"
							:style="`background-image: url('${item.url}');`">
						</div>
					</div>

					<!-- If navigation buttons are needed -->
				</div>
				<div class="carousel-button prev ">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
						stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
						class="lucide lucide-arrow-left">
						<path d="m12 19-7-7 7-7" />
						<path d="M19 12H5" />
					</svg>
				</div>
				<div class="carousel-button next">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
						stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
						class="lucide lucide-arrow-right">
						<path d="M5 12h14" />
						<path d="m12 5 7 7-7 7" />
					</svg>
				</div>
			</div>
		</div>
	</div>

</template>


<script>
// import Swiper JS
// add or remove unused modules
import { Swiper, Navigation, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
	props: ['items'],
	data() {
		return {

		}
	},
	mounted() {
		// configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
		// previously it was before export default. Moved here for performance issues. Move back in case of problems.
		// add or remove unused modules
		Swiper.use([Navigation, Autoplay])

		// init Swiper:
		/* eslint-disable no-unused-vars */
		const swiper = new Swiper('.swiper', {
			// Optional parameters
			// @see https://swiperjs.com/swiper-api#parameters
			direction: 'horizontal',
			loop: true,
			// remove unused modules if needed
			// Pagination if needed
			// Autoplay if needed
			autoplay: {
				delay: 3000
			},
			// Navigation arrows if needed
			navigation: {
				nextEl: '.carousel-button.next',
				prevEl: '.carousel-button.prev'
			},

			slidesPerView: 1,
			spaceBetween: 10,
			// Responsive breakpoints
			breakpoints: {

				// when window width is >= 480px
				480: {
					slidesPerView: 2,
					spaceBetween: 0
				},

			}
		})
	}
}
</script>

<style scoped>
.swiper {
	height: auto;
	overflow: hidden;
	position: relative;
	width: 100%;
}

.carousel {
	position: relative;

}

.carousel-button {
	position: absolute;
	z-index: 99999;
	top: 50%;
	transform: translateY(-50%);
	cursor: pointer;
	transition-duration: 300ms;
	transition-property: all;
	padding: 0;

	&:hover {
		scale: 110%;

		& svg {
			stroke: #EDA008;
		}
	}

	& svg {
		@media (max-width: 480px) {
			stroke: white;
		}

		height: 41px;
		margin: 0;
		transition-duration: 300ms;
		transition-property: all;
	}

	&.prev {
		@media (min-width: 480px) {
			left: -25px;
			translate: -100%;
		}
	}

	&.next {
		right: 0px;

		@media (min-width: 480px) {
			right: -25px;
			translate: 100%;
		}
	}

}

.swiper-slide {
	align-items: center;
	display: flex;
	justify-content: center;
	aspect-ratio: 850/300;
}
</style>
