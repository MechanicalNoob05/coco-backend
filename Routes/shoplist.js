const router = require('express').Router();

router.get('/', (req, res) => {
	res.json(
		[
			{
				"id": 1,
				"pet": "Dog",
				"name": "Smart Heart Chicken and Liver",
				"type": "food",
				"url": "https://www.petzzing.com/cdn/shop/files/61_uHwCw-rL._SL1200_2048x2048.jpg?v=1691399411",
				"desc": "SmartHeart Adult Dog Dry Food is tailored-made formulations of dog which embraces the daily needs of adult dogs in a variety of flavours",
				"price": 3200,
				"available": true
			},
			{
				"id": 2,
				"pet": "Dog",
				"name": "Pedigree Denta Stix",
				"type": "Daily oral care",
				"url": "https://www.petzzing.com/cdn/shop/products/pedigree-denta-stix-145777_2048x2048.jpg?v=1658395976",
				"desc": "The chewy texture of Pedigree Dentastix Adult Large Breed Dog Treat promotes daily oral health. It helps to reduce tartar and plaque buildup and has a unique X-shape. Dentastix is a daily dental care product for your pet dog that has been scientifically proven to reduce tartar buildup in your dog's teeth by up to 80%. Dentastix is useful in keeping your dog's teeth and gums strong and healthy, and one stick a day is enough to keep your dog's mouth clean.",
				"price": 230,
				"available": true
			},
			{
				"id": 3,
				"pet": "Dog",
				"name": "Naughty Pet Mix Non Veg Jar Large",
				"type": "Dog biscuit",
				"url": "https://www.petzzing.com/cdn/shop/files/rn-image_picker_lib_temp_c9e18205-7cf6-4177-8bd0-120cc643cfd6_2048x2048.jpg?v=1691836599",
				"desc": "These biscuits, which combine the essential nutrients of bananas, milk, carrots, and charcoal with flavour, will undoubtedly be enjoyed by your dog once you have poured a small amount into his bowl.",
				"price": 208,
				"available": true
			},
			{
				"id": 4,
				"pet": "Dog",
				"name": "Henlo Baked Dry Food for Adult Dogs | 100% human-grade ingredients",
				"type": "Dog food",
				"url": "https://supertails.com/cdn/shop/products/henloimage-468121_1800x1800.png?v=1693554121",
				"desc": "Have you been putting your all into making your dog’s life healthy? If you are that dog parent then the BIGGEST CHANGE is your dog’s life is here! - Experience the change with Henlo Baked Dry Food for Dogs.",
				"price": 738,
				"available": false
			},
			{
				"id": 5,
				"pet": "CAT",
				"name": "Whiskas Mackrel Adult",
				"type": "Adult Cat Food",
				"url": "https://www.petzzing.com/cdn/shop/products/whiskas-mackrel-adult-645869_2048x2048.jpg?v=1658396131",
				"desc": "Whiskas Mackerel is a nutritionally complete and balanced recipe that has been meticulously designed to meet the needs of an adult cat's system. Flavorful pockets packed with not only the best mackerel and poultry ingredients, but also a plethora of other essential nutrients to help your cat live a healthy, active, and long life.",
				"price": 974,
				"available": true
			},
			{
				"id": 6,
				"pet": "CAT",
				"name": "Whiskas Oceanfish kitten",
				"type": "Kitten food",
				"url": "https://www.petzzing.com/cdn/shop/products/whiskas-oceanfish-kitten-353596_2048x2048.jpg?v=1658396141",
				"desc": "these pockets of ocean fish cat food into your cat's meal to make it more sumptuous and healthy. As time passes, your cat will become healthier and stronger.",
				"price": 200,
				"available": true
			},
			{
				"id": 7,
				"pet": "CAT",
				"name": "Temptation Chicken",
				"type": "Cat treats",
				"url": "https://www.petzzing.com/cdn/shop/products/temptation-chicken-547404_2048x2048.jpg?v=1658396120",
				"desc": "Adult cats can get complete nutrition from Temptations treats. Each cat treat contains less than 2 calories, making it ideal for snacking. It contains protein, vitamins, and minerals and has a unique pocket shape and no artificial flavours, making it the most irresistible treat in the world.",
				"price": 135,
				"available": false
			},
			{
				"id": 8,
				"pet": "CAT",
				"name": "Purina Felix Mackerel with Jelly Adult Cat Wet Food",
				"type": "Cat wet dog",
				"url": "https://supertails.com/cdn/shop/products/Frame6-2022-12-16T125719.156_1800x1800.png?v=1679548330",
				"desc": "Nestle Purina Felix was introduced in the year 1970 and is already a number one cat food brand in the markets of UK, Germany, Australia and Thailand",
				"price": 594,
				"available": false
			},
			{
				"id": 9,
				"pet": "Fish",
				"name": "Ocean free XO Super Redsyn",
				"type": "fish food",
				"url": "https://www.bunnycart.com/pub/media/webp_image/catalog/product/cache/a8f2cfba52ef788880cdc038f5cf1c29/o/c/ocean_free_xo_super_redsyn_120g.webp",
				"desc": "Ocean free XO Super Redsyn, 120g is available to buy in increments of 1",
				"price": 500,
				"available": true
			},
			{
				"id": 10,
				"pet": "Fish",
				"name": "Ocean free Xo Turtle Sticks",
				"type": "Turtle food",
				"url": "https://www.bunnycart.com/pub/media/webp_image/catalog/product/cache/a8f2cfba52ef788880cdc038f5cf1c29/o/c/ocean_free_xo_turtle_sticks_280ml_110_g.webp",
				"desc": "Ocean free Xo Turtle Sticks, 280ml/110 g is available to buy in increments of 1",
				"price": 275,
				"available": false
			},
			{
				"id": 11,
				"pet": "Fish",
				"name": "TetraBits Complete Fish Food",
				"type": "fish food",
				"url": "https://www.bunnycart.com/pub/media/webp_image/catalog/product/cache/a8f2cfba52ef788880cdc038f5cf1c29/t/e/tetrabits_complete_fish_food_30g_100ml_1_1.webp",
				"desc": "Maintains color and shape of tropical fishes, Pellet food ideal for mid water and bottom feeding fishes",
				"price": 150,
				"available": true
			},
			{
				"id": 12,
				"pet": "Fish",
				"name": "Shrimp Algae Food",
				"type": "Algae food",
				"url": "https://www.bunnycart.com/pub/media/webp_image/catalog/product/cache/a8f2cfba52ef788880cdc038f5cf1c29/s/h/shrimp_algae_food.webp",
				"desc": "Provides required nutrients and vitamins, Facilitate growth of all fishes",
				"price": 70,
				"available": false
			},
			{
				"id": 13,
				"pet": "Birds",
				"name": "The Birds Company Striped Sunflower Seed with Spirulina, Bird Food for Conures, Lovebirds, Cockatiels, African Grey, Macaws, Cockatoo, Parakeets & Parrots",
				"type": "Bird food",
				"url": "https://m.media-amazon.com/images/I/91U6MouxxeL._SL1500_.jpg",
				"desc": "The birds company sunflower select for parrots premium is a all natural, hand picked, protein packed collection of sunflower seeds. It is formulated to ensure that your bird gets the right balance of nutrients every day",
				"price": 189,
				"available": false
			},
			{
				"id": 14,
				"pet": "Birds",
				"name": "Nature Forever All Life Stages Bird Seeds Feeder Mix, Millet",
				"type": "bird food",
				"url": "https://m.media-amazon.com/images/I/71cI98OUU+L._SL1500_.jpg",
				"desc": "NFS Bird Feeder Mix is made with love to help support the cause of bird conservation. It will help in providing year round source of food for birds as natural food sources are getting increasingly scarce. Feeding birds will go a long way in conserving them.",
				"price": 250,
				"available": true
			}
		]
	)
})

module.exports = router
