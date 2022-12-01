export default function(req, res, next) {
	const paths = ['/admin/', '/gestion/']
	if(paths.some(e => req.originalUrl.includes(e))) {
		res.spa = true
	}
	next()
}
