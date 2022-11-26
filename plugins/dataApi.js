export default function({$axios, error, store}, inject){
	inject('dataApi', {
		getSingleNews,
		getNewsList,
		deleteNews,
		getUser,
		getBusinesses,
		deleteUser,
		getAdmins
	})
	//News
	async function getSingleNews(id){
		const resp = await $axios.$post('/news/get', {
			id: id
		})
		if(!resp.success)
			error({ statusCode: 404, message: 'Oups, vérifier votre URL' })
		return resp
	}
	async function getNewsList(){
		return await $axios.$get('/news/list')
	}
	async function deleteNews(id){
		return await $axios.$post('/news/delete', {
			token: store.getters['auth/get_token'],
			id: id
		})
	}

	//Users
	async function getUser(id){
		const resp = await $axios.$post('/users/get', {
			token: store.getters['auth/get_token'],
			id: id
		})
		if(!resp.success)
			error({ statusCode: 404, message: 'Oups, vérifier votre URL' })
		return resp
	}
	async function getBusinesses(){
		const resp = await $axios.$post('/users/list/business', {
			token: store.getters['auth/get_token']
		})
		return resp
	}
	async function getAdmins(){
		const resp = await $axios.$post('/users/list/admin', {
			token: store.getters['auth/get_token']
		})
		return resp
	}
	async function deleteUser(id){
		const resp = await $axios.$post('/users/delete', {
			token: store.getters['auth/get_token'],
			id: id
		})
		return resp
	}
}
