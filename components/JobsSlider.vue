<template>
	<div class="offres-emploi-slider">
		<div class="container">
			<slot name="title"></slot>
			<ssr-carousel v-model="currentSlide"
						  :slides-per-page='4'
						  :gutter='0'
						  paginate-by-slide
						  loop>
				<div class="slide"
					 v-for="job in jobs"
					 :key="job.id">
					<JobLink :job="job"></JobLink>
				</div>
			</ssr-carousel>
			<button class="arrow prev" type="button" @click="currentSlide--"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256c0 13.25-10.76 24.01-24.01 24.01H83.9l132.7 126.6c9.625 9.156 9.969 24.41 .8125 33.94c-9.156 9.594-24.34 9.938-33.94 .8125l-176-168C2.695 268.9 .0078 262.6 .0078 256S2.695 243.2 7.445 238.6l176-168C193 61.51 208.2 61.85 217.4 71.45c9.156 9.5 8.812 24.75-.8125 33.94l-132.7 126.6h340.1C437.2 232 447.1 242.8 447.1 256z"/></svg></button>
			<button class="arrow next" type="button" @click="currentSlide++"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M264.6 70.63l176 168c4.75 4.531 7.438 10.81 7.438 17.38s-2.688 12.84-7.438 17.38l-176 168c-9.594 9.125-24.78 8.781-33.94-.8125c-9.156-9.5-8.812-24.75 .8125-33.94l132.7-126.6H24.01c-13.25 0-24.01-10.76-24.01-24.01s10.76-23.99 24.01-23.99h340.1l-132.7-126.6C221.8 96.23 221.5 80.98 230.6 71.45C239.8 61.85 254.1 61.51 264.6 70.63z"/></svg></button>
		</div>
	</div>
</template>
<script>
export default {
	props: ["jobs"],
	data(){
		return {
			currentSlide: 0
		}
	}
}
</script>
<style scoped>
.container{
	position: relative;
	max-width: 1500px;
}
.arrow{
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}
.prev{
	left: -2rem;
}
.next{
	right: -2rem
}
button{
	outline: none;
	border: none;
	background: transparent;
}
button svg{
	fill: #fff;
	height: 40px;
}
</style>
