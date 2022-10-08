export default function ({ store, route, error, redirect }){
	if (!store.getters['auth/isAuthenticated']) {
		return redirect(`/connexion`);
	}

	let page_roles = route.meta.map((meta) => {
		if (meta.auth && meta.auth.role)
			return meta.auth.role
		return []
	})
	page_roles = page_roles[0]

	if (page_roles.length && !page_roles.includes(store.getters['auth/getRole'])) {
		return error({
			statusCode: 401,
			message: "Vous n'avez pas les authorisations nécessaire pour voir cette page"
		})
	}
}
