export default function({store}, inject){
	inject('jobFilters', {
		secteursChoises,
		categoriesProChoises,
		type_emploiChoises,
		horaireChoises,
	})

	function secteursChoises(){
		return jsonToArray(store.state.filters.secteurs)
	}
	function categoriesProChoises(){
		return jsonToArray(store.state.filters.categoriesPro)
	}
	function type_emploiChoises(){
		return jsonToArray(store.state.filters.type_emploi)
	}
	function horaireChoises(){
		return jsonToArray(store.state.filters.horaire)
	}
	function jsonToArray(json){
		let data = Object.values(json)
		return Object.keys(json).map((key, v) => {
			return {
				label: data[v],
				value: key
			}
		})
	}
}
