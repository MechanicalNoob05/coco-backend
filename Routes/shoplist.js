const router = require('express').Router();
const Products = require('../Model/Product_Model')

router.get('/acessories', async (req, res) => {
	try {
		const products = await Products.find()
		var acessorieslist = products.filter(d => d.type == 'Acessories');
		res.json(acessorieslist)
	} catch (err) {
		res.status(500).json({ message: err.message })
	}
})
// router.post('/acessories', async (req, res) => {
// 	const product = new Products(


// 		{
// 			"pet": "Dog",
// 			"name": "Smart Heart Chicken and Liver",
// 			"type": "medicine",
// 			"url": "https://www.petzzing.com/cdn/shop/files/61_uHwCw-rL._SL1200_2048x2048.jpg?v=1691399411",
// 			"desc": "SmartHeart Adult Dog Dry Food is tailored-made formulations of dog which embraces the daily needs of adult dogs in a variety of flavours",
// 			"price": 3200,
// 			"available": true
// 		}
// 	)
// 	try {
// 		const newproduct = await product.save()
// 		res.status(201).json(newproduct)
// 	} catch (err) {
// 		res.status(400).json({ message: err.message })
// 	}
// })

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
