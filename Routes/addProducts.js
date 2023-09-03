const router = require('express').Router();
const Products = require('../Model/Product_Model')

router.post('/', async (req, res) => {
  const product = new Products(
    {
      pet: req.body.pet,
      name: req.body.name,
      type: req.body.type,
      url: req.body.url,
      desc: req.body.desc,
      price: req.body.price,
      available: req.body.available
    }
  )
  try {
    const newproduct = await product.save()
    res.status(201).json(newproduct)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})
module.exports = router;
