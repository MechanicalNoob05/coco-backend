const jwt = require('jsonwebtoken')

module.exports = function auth(req,res,next) {
	const token = req.header('auth-token');
	if(!token) return res.status(401).send('Acess Denied')

	try {
		const verified = jwt.verify(token,process.env.SECRET_TOKEN)
		req.user = verified
		next()
	} catch (error) {
		res.status(400).send('Invalid token')
	}
}

