<template>
	<a :href="link.url" :style="'background-color:' + link.color" class="container-lg">
		<div class="img">
			<nuxt-img :src="link.image" :alt="link.url" />
		</div>
		<div class="desc">
			<div class="text">
				<p v-html="link.text"></p>
				<span>{{ link.url }}</span>
			</div>
			<div class="arrow">
				<svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none"
					stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
					class="lucide lucide-arrow-right">
					<path d="M5 12h14" />
					<path d="m12 5 7 7-7 7" />
				</svg>
			</div>
		</div>
	</a>
</template>

<script>
export default {
	props: ['link'],
}
</script>

<style scoped>
a {
	display: flex;
	text-decoration: none;
	font-weight: 400;
	padding: 28px;
	background-color: #F8F6E9;
	flex-direction: column;
	margin-bottom: 28px;

	@media (min-width: 480px) {
		flex-direction: row;
		;
	}

	& .img {
		aspect-ratio: 1/1;
		width: 147px;
		margin: auto;

		& img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}

	& .desc {
		display: flex;
		justify-content: space-between;
		flex-direction: column;
		flex: 1;

		& .arrow {
			display: flex;
			margin-top: 10px;

			@media (min-width: 480px) {
				margin-top: 0px;
			}

			justify-content: end;
		}

		& span {
			color: #006DB8;
			font-size: 18px;
			line-height: 28px;
		}
	}

	& .text {
		@media (min-width: 480px) {
			padding: 0px 50px;

		}
	}

	& p {
		font-size: 24px;
		line-height: 28px;
		color: #606060;
	}

	& svg {
		background-color: #EDA008;
	}
}
</style>
