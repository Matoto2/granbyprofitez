<template>
	<ssr-carousel loop :autoplay-delay='3'>
		<div class="slide">
			<img src="/images/bas1.jpg" alt="">
			<img src="/images/haut1.png" alt="">
		</div>
		<div class="slide">
			<img src="/images/bas1.jpg" alt="">
			<img src="/images/haut1.png" alt="">
		</div>
		<div class="slide">
			<img src="/images/bas1.jpg" alt="">
			<img src="/images/haut1.png" alt="">
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
