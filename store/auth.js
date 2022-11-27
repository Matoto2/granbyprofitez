// store/auth.js

// reusable aliases for mutations
export const AUTH_MUTATIONS = {
	SET_USER: 'SET_USER',
	SET_PAYLOAD: 'SET_PAYLOAD',
	LOGOUT: 'LOGOUT',
}

export const state = () => ({
	access_token: null,
	current_user: null,
})

export const mutations = {
	// store the logged in user in the state
	[AUTH_MUTATIONS.SET_USER] (state, user) {
		state.current_user = user
	},

	// store new or updated token fields in the state
	[AUTH_MUTATIONS.SET_PAYLOAD] (state, token) {
		state.access_token = token
	},

	// clear our the state, essentially logging out the user
	[AUTH_MUTATIONS.LOGOUT] (state) {
		state.current_user = null
		state.access_token = null
	},
}

export const actions = {
	async login ({ commit, dispatch }, { email, password }) {
		const data = await this.$axios.post(
			'/login',
			{ email, password }
		)
		if(data.data.success){
			// commit the user and tokens to the state
			commit(AUTH_MUTATIONS.SET_USER, {
				id: data.data.session.id,
				role: data.data.session.role,
				name: data.data.session.name,
			})
			commit(AUTH_MUTATIONS.SET_PAYLOAD, {
				token: data.data.session.token,
				datePing: data.data.session.datePing
			})
		}else{
			return 'Nom d\'utilisateur ou mot de passe invalide.';
		}
	},

	/*async register ({ commit }, { email_addr, password }) {
		// make an API call to register the user
		const { data: { data: { user, payload } } } = await this.$axios.post(
			'/register',
			{ email, password }
		)

		// commit the user and tokens to the state
		commit(AUTH_MUTATIONS.SET_USER, user)
		commit(AUTH_MUTATIONS.SET_PAYLOAD, payload)
	},*/

	// logout the user
	logout ({ commit }) {
		commit(AUTH_MUTATIONS.LOGOUT)
	},
}

export const getters = {
	// determine if the user is authenticated based on the presence of the access token
	isAuthenticated: (state) => {
		return state.access_token && state.access_token !== ''
	},
	get_token: (state) => {
		return state.access_token.token
	},
	// get user role
	getRole: (state) => {
		return state.current_user.role
	}
}
