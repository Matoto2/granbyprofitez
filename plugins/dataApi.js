export default function({$axios, error}, inject){
	inject('dataApi', {
		getSingleNews,
		getNewsList
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
}
