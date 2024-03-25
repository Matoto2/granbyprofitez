<template>
	<a :href="link.url" :style="'background-color:' + link.color">
		<div class="img">
			<nuxt-img :src="link.image" :alt="link.text" />
		</div>
		<div class="desc">
			<p>{{ link.text }}</p>
			<div class="arrow">
				<svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 24 24" fill="none"
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
	flex-direction: column;
	font-weight: 400;

	@media (min-width: 480px) {
		flex-direction: row;
		;
	}

	& .img {
		aspect-ratio: 1/1;
		flex: 1;

		& img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}

	& .desc {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 10px 0px;

		& .arrow {
			display: flex;
			justify-content: end;
			padding: 0px 36px 18px 0;
		}
	}

	& p {
		text-transform: uppercase;
		font-size: 31px;
		line-height: 38px;
		color: white;
		margin: 0;
		padding: 10px;

		@media (min-width: 480px) {
			padding: 56px 52px 0px 52px;
		}
	}

	& svg {
		opacity: 40%;
	}
}
</style>
