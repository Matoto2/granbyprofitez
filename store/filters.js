// store/auth.js

// reusable aliases for mutations
export const FILTER_MUTATIONS = {
	SET_FILTERS: 'SET_FILTERS',
}

export const state = () => ({
	categories: {},
	categoriesPro: {},
	specifications: {},
	horaire: {}
})

export const mutations = {
	[FILTER_MUTATIONS.SET_FILTERS] (state, data) {
		state.categories = data.categories
		state.categoriesPro = data.categoriesPro
		state.specifications = data.specifications
		state.horaire = data.horaire
	},
}

export const actions = {
	async filters ({ commit }) {
		const resp = await this.$axios.get('/filters/get')
		if(resp.data.categories){
			commit(FILTER_MUTATIONS.SET_FILTERS, {
				categories: resp.data.categories,
				categoriesPro: resp.data.categoriesPro,
				specifications: resp.data.specifications,
				horaire: resp.data.horaire,
			})
		}else{
			return 'Oups';
		}
	},
}

export const getters = {
	categories: (state) => {
		return state.categories
	},
	categoriesPro: (state) => {
		return state.categoriesPro
	},
	specifications: (state) => {
		return state.specifications
	},
	horaire: (state) => {
		return state.horaire
	}
}
