<template>
	<div>
		<h1>Bienvenue {{current_user?.name}}</h1>
		<div class="sidebar-wrapper">
			<div id="sidebar">

			</div>
			<div class="content-wrapper">
				<h2>{{ title }}</h2>
				<slot></slot>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	props: ["title"],
	computed: {
		current_user(){
			return this.$store.state.auth.current_user
		}
	}
}
</script>
