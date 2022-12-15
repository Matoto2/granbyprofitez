<template>
	<div class="container autres-emploi">
		<h2>Autres emplois qui pourraient vous intéresser</h2>
		<div class="grid-emplois">
			<client-only>
				<JobLink v-for="job in jobs" :key="job.id" :job="job"></JobLink>
			</client-only>
		</div>
	</div>
</template>
<script>
export default {
	props: ['jobs']
}
</script>
<style scoped>
.container{
	max-width: 1500px;
}
.grid-emplois{
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	padding-top: 1rem;
	padding-bottom: 4rem;
}
.autres-emploi{
	padding-top: 5rem;
}
.autres-emploi h2{
	font-size: 2rem;
	font-weight: 500;
	color: #000;
	text-transform: initial;
}
</style>
