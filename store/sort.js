// store/sort.js

export const state = () => ({
	sorting: 'dateRemonte',
})

export const mutations = {
	STORE_SORTING(state, sorting){
		state.sorting = sorting
	}
}

export const actions = {
	async storeSorting ({ commit }, data) {
		commit('STORE_SORTING', data)
	},
}

export const getters = {
	get_sorting: (state) => {
		return state.sorting
	},
}
