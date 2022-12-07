<template>
	<div class="banner-page">
		<div class="container">
			<h1 v-if="h1">{{h1}}</h1>
			<slot></slot>
		</div>
		<nuxt-img :src="image" />
	</div>
</template>
<script>
export default {
	props: ["h1", "image"]
}
</script>
<style scoped>
.container{
	max-width: 1500px;
}
.banner-page{
	position: relative;
	height: 60vh;
	min-height: 400px;
	clip-path: polygon(0 0, 100% 0, 100% 86%, 0% 100%);
}
h1{
	text-transform: uppercase;
	color: #fff;
	font-weight: 500;
	position: relative;
	z-index: 10;
	padding-top: 4rem;
	margin: 0;
	font-size: 3rem;
	text-shadow: 1px 1px 5px rgba(0,0,0,.3)
}
img{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
