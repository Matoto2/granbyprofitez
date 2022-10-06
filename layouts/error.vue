<template>
	<div>
		<h1>Error {{ error.statusCode }}</h1>
		<p>{{ error.message }} </p>
	</div>
</template>
<script>
export default {
	head(){
		return {
			title: 'Oups!',
		}
	},
	props: {
		error:{
			type: Object,
			required: true,
		}
	}
}
</script>
