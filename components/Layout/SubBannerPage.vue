<template>
	<div class="grid container-lg">
		<div>
			<nuxt-img v-if="logo" :src="logo" alt="logo" :class="` ${type == 2 ? 'type-2' : 'type-1'}`" />
			<p v-if="type == 2" style="margin: 0;">
			</p>
			<p v-else>
				<slot>
				</slot>
			</p>
		</div>
		<div v-if="image" class="img" style="">
			<p v-if="type == 2" style="margin: 0;">
				<slot>
				</slot>
			</p>
			<nuxt-img v-else :src="image" alt="-img-about" />
		</div>
	</div>
</template>

<script>
export default {
	props: {
		logo: String,
		image: String,
		type: Number
	}
}

</script>

<style scoped>
.grid {
	display: grid;
	@media (min-width: 480px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 105px;
	}
	img {
		margin: auto;
		display: block;

		&.type-1 {
			width: auto;
			@media (min-width: 480px) {
				margin: unset;
			}
		}
		&.type-2 {
			margin: auto;
			width: 300px
		}
	}

	p {
		@media (min-width: 480px) {
			margin-top: 78px;
			font-size: 20px;
			line-height: 28px;
		}
	}

	.img img {
		height: 100% !important;
		width: 100% !important;
		object-fit: cover;
	}
}
</style>
