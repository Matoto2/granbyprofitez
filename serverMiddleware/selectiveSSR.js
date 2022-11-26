export default function(req, res, next) {
	const path = '/admin/'
	if(req.originalUrl.includes(path)) {
		res.spa = true
	}
	next()
}
