export default function({$axios, error, store}, inject){
	inject('dataApi', {
		getSingleNews,
		getNewsList,
		deleteNews
	})
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
}
