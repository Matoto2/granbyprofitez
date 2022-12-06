<template>
	<NuxtLink :to="{ name: 'offres-emploi-id', params: { id: job.id }}">
		<div class="upper">
			<div class="logobox">
				<img v-if="job?.business?.logo[0]" :src="job.business.logo[0].sizes.medium.source_url" alt="">
			</div>
			<h2>{{ job.title }}</h2>
		</div>
		<div class="infos">
			<span class="business">{{ job.business.business }}</span>
			<span class="date">{{ formattedDate }}</span>
		</div>
	</NuxtLink>
</template>
<script>
export default {
	props: ["job"],
	computed: {
		formattedDate(){
			return this.$moment(this.job.dateUpdated).format('D MMMM YYYY')
		}
	}
}
</script>
<style scoped>
	a{
		position: relative;
		text-decoration: none;
		background-color: #fff;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		margin: 10px;
		border-radius: 10px;
		box-shadow: 0 5px 10px rgba(0,0,0,.3);
	}
	.upper{
		padding: 1.5rem;
	}
	.infos{
		display: flex;
		flex-direction: column;
		background-color: #F8F6E9;
		color: #6A6A6A;
		font-weight: 600;
		padding: 1.5rem;
		font-size: .9rem;
		text-transform: uppercase;
	}
	.business{
		border-bottom: 1px solid #707070;
		padding-bottom: .75rem;
		margin-bottom: .75rem;
		display: block;
	}
	.date{
		font-size: .8rem;
	}
	img{
		width: 100%;
		height: 140px;
		object-fit: contain;
	}
	h2{
		font-size: 1.1rem;
		font-weight: 600;
		min-height: 50px;
		margin: 2rem 0 0;
	}
</style>
