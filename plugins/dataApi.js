export default function({$axios, error, store}, inject){
	inject('dataApi', {
		getSingleNews,
		getNewsList,
		deleteNews,
		getUser,
		getBusinesses,
		deleteUser,
		getAdmins,
		getJobsList,
		getSingleJob,
		deleteJob
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
	async function getBusinesses(csv = false){
		const resp = await $axios.$post('/users/list/business', {
			token: store.getters['auth/get_token'],
			csv: csv
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

	//Jobs
	async function getJobsList(businessID = false, status = ['publish']){
		let post = {}
		if(businessID){
			post = {
				businessID: businessID,
				status: status
			}
		}
		return await $axios.$post('/jobs/list', post)
	}
	async function getSingleJob(id){
		const resp = await $axios.$post('/jobs/get', {
			id: id
		})
		if(!resp.success)
			error({ statusCode: 404, message: 'Oups, vérifier votre URL' })
		return resp
	}
	async function deleteJob(id){
		const resp = await $axios.$post('/jobs/archive', {
			token: store.getters['auth/get_token'],
			id: id
		})
		return resp
	}

}
