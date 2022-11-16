<template>
	<div class="field-wrapper">
		<label :for="id">{{label}}</label>
		<div>
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default {
	props: ['label', 'id']
}
</script>
<style>
.field-wrapper{
	display: flex;
	flex-direction: column;
	margin: 1rem 0;
}
label{
	display: inline-block;
	margin-bottom: .5rem;
	font-weight: 600;
}
</style>
