<template>
	<button id="back-to-top" @click="toTop" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M6.625 215.5l168-176C179.2 34.7 185.4 32.02 192 32.02s12.84 2.688 17.38 7.438l168 176c9.125 9.594 8.781 24.78-.8125 33.94c-9.5 9.156-24.75 8.812-33.94-.8125L216 115.9V456c0 13.25-10.75 23.1-23.1 23.1S168 469.3 168 456V115.9l-126.6 132.7C32.22 258.2 16.97 258.5 7.438 249.4C-2.156 240.2-2.5 225 6.625 215.5z"/></svg></button>
</template>
<script>
export default {
	data() {
		return {
			scTimer: 0,
			scY: 0,
		}
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll: function () {
			if (this.scTimer) return;
			this.scTimer = setTimeout(() => {
				this.scY = window.scrollY;
				clearTimeout(this.scTimer);
				this.scTimer = 0;
			}, 100);
		},
		toTop: function () {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		},
	},
}
</script>
<style scoped>
#back-to-top{
	outline: none;
	border: none;
	background-color: transparent;
	padding: 1rem;
}
#back-to-top svg{
	fill: #E6E6E6;
	height: 41px;
}
</style>
