// store/auth.js

// reusable aliases for mutations
export const AUTH_MUTATIONS = {
	SET_USER: 'SET_USER',
	SET_PAYLOAD: 'SET_PAYLOAD',
	LOGOUT: 'LOGOUT',
	SET_ERRORS: 'SET_ERRORS'
}

export const state = () => ({
	access_token: null, // JWT access token
	refresh_token: null, // JWT refresh token
	current_user: null, // user
	errors: {}
})

export const mutations = {
	// store the logged in user in the state
	[AUTH_MUTATIONS.SET_USER] (state, user) {
		state.current_user = user
	},

	// store new or updated token fields in the state
	[AUTH_MUTATIONS.SET_PAYLOAD] (state, { token, refresh_token = null }) {
		state.access_token = token

		// refresh token is optional, only set it if present
		if (refresh_token) {
			state.refresh_token = refresh_token
		}
	},

	// clear our the state, essentially logging out the user
	[AUTH_MUTATIONS.LOGOUT] (state) {
		state.current_user = null
		state.access_token = null
		state.refresh_token = null
	},

	[AUTH_MUTATIONS.SET_ERRORS] (state, errors) {
		state.errors = errors.data
	},
}

export const actions = {
	async login ({ commit, dispatch }, { email, password }) {
		// make an API call to login the user with an email address and password
		try{
			const data = await this.$axios.post(
				'/login',
				{ email, password }
			)

			// commit the user and tokens to the state
			commit(AUTH_MUTATIONS.SET_USER, data.data.user)
			commit(AUTH_MUTATIONS.SET_PAYLOAD, data.data.authorisation)
		}catch(error){
			commit(AUTH_MUTATIONS.SET_ERRORS, error.response)
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

	// given the current refresh token, refresh the user's access token to prevent expiry
	async refresh ({ commit, state }) {
		const { refresh_token } = state

		// make an API call using the refresh token to generate a new access token
		const { data: { data: { payload } } } = await this.$axios.post(
			'/refresh',
			{ refresh_token }
		)

		commit(AUTH_MUTATIONS.SET_PAYLOAD, payload)
	},

	// logout the user
	logout ({ commit, state }) {
		commit(AUTH_MUTATIONS.LOGOUT)
	},
}

export const getters = {
	// determine if the user is authenticated based on the presence of the access token
	isAuthenticated: (state) => {
		return state.access_token && state.access_token !== ''
	},
}
