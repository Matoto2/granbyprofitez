<template>
	<div class="container">
		<h2><slot name="title"></slot></h2>
		<span class="separator"><svg xmlns="http://www.w3.org/2000/svg" width="21.695" height="99.682" viewBox="0 0 21.695 99.682"><path d="M1156.017,2087.16H1143.7l9.382-99.682H1165.4Z" transform="translate(-1143.703 -1987.478)" fill="#eda008"/></svg></span>
		<div class="contenu"><slot></slot></div>
	</div>
</template>
<style scoped>
	.container{
		display: grid;
		grid-template-columns: 1fr 50px 1fr;
		gap: 5rem;
		align-items: center;
		max-width: 1400px;
		padding-top: 3rem;
		padding-bottom: 3rem;
	}
	h2{
		font-size: 5rem;
		font-weight: 500;
		text-transform: uppercase;
		color: #8E8E8E;
		line-height: 1;
	}
	h2 span{
		font-size: 2.5rem;
		display: block;
	}
	.contenu{
		font-size: 1.3rem;
	}
</style>
