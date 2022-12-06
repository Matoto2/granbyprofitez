// store/auth.js

// reusable aliases for mutations
export const FILTER_MUTATIONS = {
	SET_FILTERS: 'SET_FILTERS',
}

export const state = () => ({
	secteurs: {},
	categoriesPro: {},
	type_emploi: {},
	horaire: {},
	selectedFilters: {},
})

export const mutations = {
	[FILTER_MUTATIONS.SET_FILTERS] (state, data) {
		state.secteurs = data.secteurs
		state.categoriesPro = data.categoriesPro
		state.type_emploi = data.type_emploi
		state.horaire = data.horaire
	},
	SET_SELECTED_FILTERS(state, data){
		state.selectedFilters = data
	}
}

export const actions = {
	async filters ({ commit }) {
		const resp = await this.$axios.get('/filters/get')
		if(resp.data.secteurs){
			commit(FILTER_MUTATIONS.SET_FILTERS, {
				secteurs: resp.data.secteurs,
				categoriesPro: resp.data.categoriesPro,
				type_emploi: resp.data.type_emploi,
				horaire: resp.data.horaire,
			})
		}else{
			return 'Oups';
		}
	},
	async storeSelectedFilters ({ commit }, data) {
		commit('SET_SELECTED_FILTERS', data)
	},
}

export const getters = {
	secteurs: (state) => {
		return state.secteurs
	},
	categoriesPro: (state) => {
		return state.categoriesPro
	},
	type_emploi: (state) => {
		return state.type_emploi
	},
	horaire: (state) => {
		return state.horaire
	},
	selectedFilters: (state) => {
		return state.selectedFilters
	}
}
