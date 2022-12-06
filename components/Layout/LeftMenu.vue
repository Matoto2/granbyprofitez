<template>
	<nav class="menu-left-nav">
		<ul class="menu-left">
			<li v-for="item in items">
				<NuxtLink :to="item.to">
					<i :class="item.icon"></i>
					{{item.label}}
				</NuxtLink>
			</li>
		</ul>
	</nav>

</template>
<script>
export default {
	props: ['items']
}
</script>
<style scoped>
.menu-left{
	padding-left: 0;
	list-style: none;
}
nav a{
	padding: .5rem;
	border-bottom: 1px solid #ccc;
	display: block;
	color: #000;
	text-decoration: none
}
a.nuxt-link-active{
	font-weight: 700;
	background: #f2f2f2;
}
</style>
