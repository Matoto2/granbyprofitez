<template>
	<ssr-carousel loop :autoplay-delay='3'>
		<div class="slide">
			<nuxt-img src="/images/bas1.jpg" />
			<nuxt-img src="/images/haut1.png" />
		</div>
		<div class="slide">
			<nuxt-img src="/images/bas1.jpg" />
			<nuxt-img src="/images/haut1.png" />
		</div>
		<div class="slide">
			<nuxt-img src="/images/bas1.jpg" />
			<nuxt-img src="/images/haut1.png" />
		</div>
	</ssr-carousel>
</template>

<style scoped>
	.slide{
		position: relative;
		height: 752px;
	}
	.slide img{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 752px;
		object-fit: cover;
	}
</style>
