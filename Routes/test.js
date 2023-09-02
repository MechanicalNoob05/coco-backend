const router = require('express').Router();
const auth = require('./tokenValidation');

router.get('/',auth,(req,res)=>{
	res.json({test:"hello worldwa"})
})

module.exports = router
