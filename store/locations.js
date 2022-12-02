// store/locations.js

export const state = () => ({
	all_locations: [],
	categories: [],
})

export const mutations = {
	STORE_ALL_LOCATIONS(state, all_locations){
		state.all_locations = all_locations
	},
	STORE_CATEGORIES(state, categories){
		state.categories = categories
	}
}

export const actions = {
	async storeAllLocations ({ commit }) {
		const locations = await this.$axios.$get('/services/list')
		commit('STORE_ALL_LOCATIONS', locations.services)
	},
	async storeCategories ({ commit }) {
		const categories = await this.$axios.$get('services/categories')
		commit('STORE_CATEGORIES', categories.categories)
	},
}

export const getters = {
	all_locations: (state) => {
		return state.all_locations
	},
	categories: (state) => {
		return state.categories
	},
}
