<template>
	<div class="jobs-list">
		<div class="container">
			<JobLink v-for="job in jobs" :key="job.id" :job="job"></JobLink>
		</div>
	</div>
</template>
<script>
export default {
	props: ["jobs"],
}
</script>
<style scoped>
.jobs-list{
	padding: 2rem 0 6rem;
}
.jobs-list .container{
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 1rem .5rem;
	max-width: 1500px;
}
</style>
