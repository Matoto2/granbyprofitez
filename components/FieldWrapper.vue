<template>
	<div :class="'p-field col-12 '+childclass">
		<label :for="id">{{label}}</label>
		<div>
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
	props: ['label', 'id', 'childclass']
}
</script>
<style scoped>
label{
	display: inline-block;
	margin-bottom: .5rem;
	font-weight: 600;
}
.p-field{
	margin-bottom: .7rem;
	margin-top: .7rem;
}
</style>
