<template>
	<div class="container-lg">
		<h2 v-if="title">{{ title }}</h2>
		<div v-if="items" class="">
			<details v-for="(item, key) in items" :key="key" :open="key===0 && !fistclosed">
				<summary>
					<span>{{ item.title }}</span>
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24" fill="none"
							stroke="#EDA008" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
							class="lucide lucide-plus">
							<path d="M5 12h14" />
							<path d="M12 5v14" />
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 24 24" fill="none"
							stroke="#EDA008" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
							class="lucide lucide-minus">
							<path d="M5 12h14" />
						</svg>
					</div>
				</summary>
				<div>
					<component v-if="component" :is="component" :item="item"/>
				</div>
			</details>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		items: Array,
		component: String,
		fistclosed: Boolean
	}
}

</script>

<style scoped>
details {
	&>summary {
		font-size: 22px;
		line-height: 60px;
		color: #606060;
		padding: 0px 20px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		cursor: pointer;
		&::marker {
			display: none;
			content: '';
		}

	}

	& svg:first-child {
		display: block;
	}

	& svg:last-child {
		display: none;
	}

	&[open] {
		& svg:first-child {
			display: none !important;
		}

		& svg:last-child {
			display: block;
		}
	}

	&>div {
		padding: 50px 20px;

	}

	&:nth-child(even) {
		&>summary {
			background-color: #fff;
		}
	}

	&:nth-child(odd) {
		&>summary {
			background-color: #F8F6E9;
		}
	}
}</style>
