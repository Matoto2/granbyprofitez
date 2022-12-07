<template>
	<div class="youtube">
		<lite-youtube
			:videoid="id"
			:playlabel="label"
		/>
	</div>
</template>
<script>
export default {
	props: {
		id: String,
		label: String,
	},
	fetchOnServer: false,
}
</script>
<style scoped>
lite-youtube{
	max-width: initial;
	margin-top: 3rem;
	margin-bottom: 3rem;
}
</style>
