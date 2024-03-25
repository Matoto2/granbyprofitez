<template>
	<div class="home-search-wrapper">
		<div class="container">
			<div class="left">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
					<path
						d="M443.7 266.8l-165.9 176C274.5 446.3 269.1 448 265.5 448c-3.986 0-7.988-1.375-11.16-4.156c-6.773-5.938-7.275-16.06-1.118-22.59L393.9 272H16.59c-9.171 0-16.59-7.155-16.59-15.1S7.421 240 16.59 240h377.3l-140.7-149.3c-6.157-6.531-5.655-16.66 1.118-22.59c6.789-5.906 17.27-5.469 23.45 1.094l165.9 176C449.4 251.3 449.4 260.7 443.7 266.8z" />
				</svg>
				Débutez votre recherche d'emploi
			</div>
			<div class="right">
				<form @submit.prevent="submit" method="post">
					<input type="text" v-model="form.search"
						placeholder="Recherche par emploi, mot clé, entreprise, etc">
					<button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="27.321" height="27.327"
							viewBox="0 0 27.321 27.327">
							<path
								d="M22.2,11.1a11.073,11.073,0,0,1-2.135,6.548l6.756,6.761A1.709,1.709,0,0,1,24.4,26.826l-6.756-6.761A11.1,11.1,0,1,1,22.2,11.1ZM11.1,18.784A7.684,7.684,0,1,0,3.415,11.1,7.686,7.686,0,0,0,11.1,18.784Z"
								fill="#fff" />
						</svg></button>
				</form>
				<slot name="more"></slot>
			</div>
		</div>
	</div>
</template>
<script>

export default {
	data() {
		return {
			form: {
				search: ''
			}
		}
	},
	methods: {
		submit() {
			this.$store.dispatch('filters/storeSelectedFilters', JSON.parse(JSON.stringify(this.form)))
			this.$router.push({ name: 'offres-emploi' })
		}
	}
}
</script>
<style scoped>
.container {
	display: grid;
	gap: 3rem;
	background-color: #414141;
	max-width: 1600px;
	margin-bottom: 2rem;
	padding: 1rem;

	@media (min-width: 480px) {
		border-radius: 10px;
		padding: 3rem 7rem;
		margin-bottom: 0rem;
		grid-template-columns: 1fr 1.7fr;
	}
}

.left {
	display: flex;
	align-items: center;
	color: #EDA008;
	text-transform: uppercase;
	font-size: 1.7rem;
	flex-direction: column;

	@media (min-width: 480px) {
		flex-direction: row;
	}

}

.left svg {
	height: 74px;
	fill: rgba(255, 255, 255, 0.2);
	margin-right: 2rem;
	flex-shrink: 0;
	rotate: 45deg;
	@media (min-width: 480px) {
		rotate: 0deg;
	}
}

form {
	position: relative;
}

input {
	background-color: #fff;
	border-radius: 10px;
	font-size: 1.3rem;
	padding: .5rem 100px .5rem 1.5rem;
	outline: none;
	border: none;
	width: 100%;
	height: 71px;
}

button {
	position: absolute;
	top: 0;
	right: 0;
	height: 71px;
	width: 65px;
	background-color: #EDA008;
	border: none;
	outline: none;
	box-sizing: border-box;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
}

button::after {
	content: '';
	position: absolute;
	top: 0;
	right: 65px;
	width: 0;
	height: 0;
	border-top: 71px solid transparent;
	border-right: 11px solid #EDA008;
}

.right {
	display: flex;
	flex-direction: column;
	gap: 17px;

	@media (min-width: 480px) {
		gap: 36px;
		flex-direction: row;
	}

	& form {
		flex: 1;
	}

	>a {
		height: 71px;
		width: 65px;
		gap: 10px;
		font-weight: 500;
		display: flex;
		place-content: center;
		position: relative;
		text-decoration: none;
		font-size: 17px;
		line-height: 21px;
		text-transform: uppercase;
		color: white;
		border-radius: 10px;
		padding: 18px;
		align-items: center;
		background-color: #EDA008;
		width: 100%;
		@media (min-width: 480px) {
			max-width: 268px;
		}
		&::after {
			display: none !important;
		}
	}
}
</style>
