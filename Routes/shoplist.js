const router = require('express').Router();
const Products = require('../Model/Product_Model')

router.get('/all', async (req, res) => {
	try {
		const products = await Products.find()
		res.json(products)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
})

router.get('/acessories', async (req, res) => {
	try {
		const products = await Products.find()
		var acessorieslist = products.filter(d => d.type == 'Acessories');
		res.json(acessorieslist)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
})

router.get('/food', async (req, res) => {
	try {
		const products = await Products.find()
		var foodlist = products.filter(d => d.type == 'food');
		res.json(foodlist)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
})
router.get('/medicine', async (req, res) => {
	try {
		const products = await Products.find()
		var medicinelist = products.filter(d => d.type == 'medicine');
		res.json(medicinelist)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
})

module.exports = router
