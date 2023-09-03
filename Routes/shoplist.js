const router = require('express').Router();

const products = [
	{
		"id": 201,
		"pet": "Dog",
		"name": "Smart Heart Chicken and Liver",
		"type": "food",
		"url": "https://www.petzzing.com/cdn/shop/files/61_uHwCw-rL._SL1200_2048x2048.jpg?v=1691399411",
		"desc": "SmartHeart Adult Dog Dry Food is tailored-made formulations of dog which embraces the daily needs of adult dogs in a variety of flavours",
		"price": 3200,
		"available": true
	},
	{
		"id": 202,
		"pet": "Dog",
		"name": "Pedigree Denta Stix",
		"type": "food",
		"url": "https://www.petzzing.com/cdn/shop/products/pedigree-denta-stix-145777_2048x2048.jpg?v=1658395976",
		"desc": "The chewy texture of Pedigree Dentastix Adult Large Breed Dog Treat promotes daily oral health. It helps to reduce tartar and plaque buildup and has a unique X-shape. Dentastix is a daily dental care product for your pet dog that has been scientifically proven to reduce tartar buildup in your dog's teeth by up to 80%. Dentastix is useful in keeping your dog's teeth and gums strong and healthy, and one stick a day is enough to keep your dog's mouth clean.",
		"price": 230,
		"available": false
	},
	{
		"id": 203,
		"pet": "Dog",
		"name": "Naughty Pet Mix Non Veg Jar Large",
		"type": "food",
		"url": "https://www.petzzing.com/cdn/shop/files/rn-image_picker_lib_temp_c9e18205-7cf6-4177-8bd0-120cc643cfd6_2048x2048.jpg?v=1691836599",
		"desc": "These biscuits, which combine the essential nutrients of bananas, milk, carrots, and charcoal with flavour, will undoubtedly be enjoyed by your dog once you have poured a small amount into his bowl.",
		"price": 208,
		"available": false
	},
	{
		"id": 204,
		"pet": "Dog",
		"name": "Henlo Baked Dry Food for Adult Dogs | 100% human-grade ingredients",
		"type": "food",
		"url": "https://supertails.com/cdn/shop/products/henloimage-468121_1800x1800.png?v=1693554121",
		"desc": "Have you been putting your all into making your dog’s life healthy? If you are that dog parent then the BIGGEST CHANGE is your dog’s life is here! - Experience the change with Henlo Baked Dry Food for Dogs.",
		"price": 738,
		"available": true
	},
	{
		"id": 205,
		"pet": "Cats",
		"name": "Whiskas Mackrel Adult",
		"type": "food",
		"url": "https://www.petzzing.com/cdn/shop/products/whiskas-mackrel-adult-645869_2048x2048.jpg?v=1658396131",
		"desc": "Whiskas Mackerel is a nutritionally complete and balanced recipe that has been meticulously designed to meet the needs of an adult cat's system. Flavorful pockets packed with not only the best mackerel and poultry ingredients, but also a plethora of other essential nutrients to help your cat live a healthy, active, and long life.",
		"price": 974,
		"available": true
	},
	{
		"id": 206,
		"pet": "Cats",
		"name": "Whiskas Oceanfish kitten",
		"type": "food",
		"url": "https://www.petzzing.com/cdn/shop/products/whiskas-oceanfish-kitten-353596_2048x2048.jpg?v=1658396141",
		"desc": "these pockets of ocean fish cat food into your cat's meal to make it more sumptuous and healthy. As time passes, your cat will become healthier and stronger.",
		"price": 200,
		"available": true
	},
	{
		"id": 207,
		"pet": "Cats",
		"name": "Temptation Chicken",
		"type": "food",
		"url": "https://www.petzzing.com/cdn/shop/products/temptation-chicken-547404_2048x2048.jpg?v=1658396120",
		"desc": "Adult cats can get complete nutrition from Temptations treats. Each cat treat contains less than 2 calories, making it ideal for snacking. It contains protein, vitamins, and minerals and has a unique pocket shape and no artificial flavours, making it the most irresistible treat in the world.",
		"price": 135,
		"available": true
	},
	{
		"id": 208,
		"pet": "Cats",
		"name": "Purina Felix Mackerel with Jelly Adult Cat Wet Food",
		"type": "food",
		"url": "https://supertails.com/cdn/shop/products/Frame6-2022-12-16T125719.156_1800x1800.png?v=1679548330",
		"desc": "Nestle Purina Felix was introduced in the year 1970 and is already a number one cat food brand in the markets of UK, Germany, Australia and Thailand",
		"price": 594,
		"available": true
	},
	{
		"id": 209,
		"pet": "Fish",
		"name": "Ocean free XO Super Redsyn",
		"type": "food",
		"url": "https://www.bunnycart.com/pub/media/webp_image/catalog/product/cache/a8f2cfba52ef788880cdc038f5cf1c29/o/c/ocean_free_xo_super_redsyn_120g.webp",
		"desc": "Ocean free XO Super Redsyn, 120g is available to buy in increments of 1",
		"price": 500,
		"available": true
	},
	{
		"id": 210,
		"pet": "Fish",
		"name": "Ocean free Xo Turtle Sticks",
		"type": "food",
		"url": "https://www.bunnycart.com/pub/media/webp_image/catalog/product/cache/a8f2cfba52ef788880cdc038f5cf1c29/o/c/ocean_free_xo_turtle_sticks_280ml_110_g.webp",
		"desc": "Ocean free Xo Turtle Sticks, 280ml/110 g is available to buy in increments of 1",
		"price": 275,
		"available": false
	},
	{
		"id": 211,
		"pet": "Fish",
		"name": "TetraBits Complete Fish Food",
		"type": "food",
		"url": "https://www.bunnycart.com/pub/media/webp_image/catalog/product/cache/a8f2cfba52ef788880cdc038f5cf1c29/t/e/tetrabits_complete_fish_food_30g_100ml_1_1.webp",
		"desc": "Maintains color and shape of tropical fishes, Pellet food ideal for mid water and bottom feeding fishes",
		"price": 150,
		"available": true
	},
	{
		"id": 212,
		"pet": "Fish",
		"name": "Shrimp Algae Food",
		"type": "food",
		"url": "https://www.bunnycart.com/pub/media/webp_image/catalog/product/cache/a8f2cfba52ef788880cdc038f5cf1c29/s/h/shrimp_algae_food.webp",
		"desc": "Provides required nutrients and vitamins, Facilitate growth of all fishes",
		"price": 70,
		"available": true
	},
	{
		"id": 213,
		"pet": "Birds",
		"name": "The Birds Company Striped Sunflower Seed with Spirulina, Bird Food for Conures, Lovebirds, Cockatiels, African Grey, Macaws, Cockatoo, Parakeets & Parrots",
		"type": "food",
		"url": "https://m.media-amazon.com/images/I/91U6MouxxeL._SL1500_.jpg",
		"desc": "The birds company sunflower select for parrots premium is a all natural, hand picked, protein packed collection of sunflower seeds. It is formulated to ensure that your bird gets the right balance of nutrients every day",
		"price": 189,
		"available": true
	},
	{
		"id": 214,
		"pet": "Birds",
		"name": "Nature Forever All Life Stages Bird Seeds Feeder Mix, Millet",
		"type": "food",
		"url": "https://m.media-amazon.com/images/I/71cI98OUU+L._SL1500_.jpg",
		"desc": "NFS Bird Feeder Mix is made with love to help support the cause of bird conservation. It will help in providing year round source of food for birds as natural food sources are getting increasingly scarce. Feeding birds will go a long way in conserving them.",
		"price": 250,
		"available": false
	},
	{
		"id": 301,
		"pet": "Dog",
		"name": "Smart Heart Chicken and Liver",
		"type": "medicine",
		"url": "https://www.petzzing.com/cdn/shop/files/61_uHwCw-rL._SL1200_2048x2048.jpg?v=1691399411",
		"desc": "SmartHeart Adult Dog Dry Food is tailored-made formulations of dog which embraces the daily needs of adult dogs in a variety of flavours",
		"price": 3200,
		"available": true
	},
	{
		"id": 1,
		"pet": "Dog",
		"name": "Bayer Seresto Collar For Dogs",
		"type": "Acessories",
		"url": "https://www.petzzing.com/cdn/shop/products/seresto-collar-for-dogs-over-8-kg-90003710-600_de927c3d-602f-48b9-aade-219693d4bef7_2048x2048.jpg?v=1691651857",
		"desc": "It is collor used for new born dogs",
		"price": 2090,
		"available": true
	},
	{
		"id": 2,
		"pet": "Dog",
		"name": "Pets Empire Regular Anti Skid Bowl for Dogs and Cats",
		"type": "Acessories",
		"url": "https://supertails.com/cdn/shop/products/Frame1-2021-11-08T134652.669_1800x1800.png?v=1657186296",
		"desc": "Made of high quality stainless steel, steady material and durable performance will make this dog bowl become your pet’s favourite dish. Fitted with a rubber ring on the bottom, no more sliding across the floor, the slip resistant rubber base also helps protect bare and hardwood floors from damage. It offers a healthier alternative to plastic, helps make mealtimes less messy",
		"price": 180,
		"available": false
	},
	{
		"id": 3,
		"pet": "Dog",
		"name": "Pet Set Go Cape Style Raincoat for Dogs (Yellow)",
		"type": "Acessories",
		"url": "https://supertails.com/cdn/shop/files/Frame11836.png?v=1687764800",
		"desc": "Don't let rain come in the way of your pet's adventures. This raincoat comes in bright yellow, red & blue colour, with a hood that is easily adjustable. The contrasting inner lining makes it very fun and stylish & the cape style design ensures full coverage of the head and body.",
		"price": 220,
		"available": true
	},
	{
		"id": 4,
		"pet": "Dog",
		"name": "Hiputee Rectangular Shape Waterproof Polyester Fabric Bone Shaped Cushion Bed for Dogs and Cats (Red)",
		"type": "Acessories",
		"url": "https://supertails.com/cdn/shop/products/Frame1-2022-05-24T120018.731-518988_1800x1800.png?v=1693552672",
		"desc": "Hiputee is a well-known brand in the pet supplies segment. Today we are the leaders in this industry and are able to fulfill the ever-increasing demand for stylish and quality pet products of our customers. Using the best materials has made our products the best in the market today. Your pets will love our products and why not…. our pet products are built totally with your pet’s comfort in mind.",
		"price": 958,
		"available": false
	},
	{
		"id": 5,
		"pet": "Cats",
		"name": "Hiputee Rectangular Shape Waterproof Polyester Fabric Flat Pad Bed for Cats (Green)",
		"type": "Acessories",
		"url": "https://supertails.com/cdn/shop/products/51z-VlP4sbL._SX522_1800x1800.jpg?v=1655850203",
		"desc": "Hiputee luxurious dog cat bed is made of high-quality materials and is long-lasting. The bed base consists of a non-slip insulating material that prevents the bed from sliding on the floor. The fine quality polyester filling inside assures durability. The bed is ideal for indoor use as well as outdoor use such as garages, gardens, or porches",
		"price": 817,
		"available": true
	},
	{
		"id": 6,
		"pet": "Cats",
		"name": "Pet Vogue Carrier for Dogs and Cats (Blue & Black)",
		"type": "Acessories",
		"url": "https://supertails.com/cdn/shop/products/Frame2_14_1_1800x1800.jpg?v=1655863159",
		"desc": "The Pet Vogue Carrier is perfect for both Cats and Dogs. Portable kennel has a durable construction & door latches for security. The pet carrier meets most airline cargo specifications for easy sky travel & has a carrying handle for transport.",
		"price": 1204,
		"available": true
	},
	{
		"id": 7,
		"pet": "Cats",
		"name": "A Plus A Pets Feather Weight Harness & Leash Set for Dogs and Cats",
		"type": "Acessories",
		"url": "https://supertails.com/cdn/shop/products/Frame1_70_5de48a90-7c9b-4eb2-8e82-120a731e83e1-665742_1800x1800.png?v=1693292174",
		"desc": "premium product from the house of A+a Pets' this feather weight harness & leash set is best suitable for our Cats Kittens and small Dogs and young puppies. This standard lead fits around the cat’s neck and back to evenly distribute pressure, size adjustable for both young kitty to adult cats",
		"price": 746,
		"available": true
	},
	{
		"id": 8,
		"pet": "Cats",
		"name": "Trixie Cat Teaser With Plush Fish & Catnip Toy for Cats",
		"type": "Acessories",
		"url": "https://supertails.com/cdn/shop/files/Frame-2023-06-29T134203.862_1800x1800.png?v=1688026371",
		"desc": "Trixie Plastic Playing Rod with Fish Plush Catnip Toy Is a Bright fish with catnip attract cats attention easily. It encourages instinctual behavior and exercise to keep your cat healthy and alert.",
		"price": 251,
		"available": true
	},
	{
		"id": 9,
		"pet": "Fish",
		"name": "Foodie Puppies Natural Looking Environment Underwater Drums of Heaven Aquarium Decoration Ornaments",
		"type": "Acessories",
		"url": "https://m.media-amazon.com/images/I/61mnZb0865L._SX679_.jpg",
		"desc": "decorative landscaping, featured by novel and chic, highly imitative, loved by aquarium enthusiasts. Add unique landscape for your blank and tedious fish tank.",
		"price": 269,
		"available": true
	},
	{
		"id": 10,
		"pet": "Fish",
		"name": "Buraq Aquarium Filter",
		"type": "Acessories",
		"url": "https://m.media-amazon.com/images/I/71x0RQg+r7L._SL1500_.jpg",
		"desc": "Create an Aquarium Water Cycle. It Provides a Healthy living Environment , Provide Good FIlteration , Filter Circulation 400/L Hr",
		"price": 349,
		"available": true
	},
	{
		"id": 11,
		"pet": "Fish",
		"name": "4LEGS Air Oxygen Bubble Disk for Aquarium",
		"type": "Acessories",
		"url": "https://m.media-amazon.com/images/I/513Jocv+7ZL.jpg",
		"desc": "Increase Oxygen Levels Reduce CO2 And Raise PH. Creates Water Currents And Dazzling Underwater Scenes",
		"price": 175,
		"available": true
	},
	{
		"id": 12,
		"pet": "Birds",
		"name": "Buraq 2 Ft Birds Cage With 2 Gate",
		"type": "Acessories",
		"url": "https://m.media-amazon.com/images/I/51xYjPsySeL._SX300_SY300_QL70_FMwebp_.jpg",
		"desc": "Our passion for pets love and compassion we are able to understand the pets better and we are able to make perfect product which are safe for pets .",
		"price": 1799,
		"available": false
	},
	{
		"id": 13,
		"pet": "Birds",
		"name": "kathson Parrot Bath Box Bird Cage Accessory Supplies Bathing Tub Bath for Pet Brids",
		"type": "Acessories",
		"url": "https://m.media-amazon.com/images/I/61F5FzkIlhL._SX679_.jpg",
		"desc": "kathson Adorable colorful bird tub made of safe plastic materials that adds in a bright light of fun during bath time. Simply hook to the cage door and when bath time is over remove for cleaning. Fun way to promote healthy bathing habits. Stable and hard to tip over for less mess.",
		"price": 410,
		"available": true
	},
	{
		"id": 14,
		"pet": "Birds",
		"name": "Sage Square 80ml Tube Shape Cage Bird Food, Seed, Water Feeder Plastic Dispenser Cum Bowl with Removable Tray",
		"type": "Acessories",
		"url": "https://m.media-amazon.com/images/I/51lQDEdvQHS.jpg",
		"desc": "########",
		"price": 219,
		"available": false
	}
]

router.get('/acessories', (req, res) => {
	var acessorieslist = products.filter( d => d.type == 'Acessories');
	res.json(acessorieslist)
})

router.get('/food',(req,res)=>{

	var foodlist = products.filter( d => d.type == 'food');
	res.json(foodlist)
})
router.get('/medicine',(req,res)=>{

	var medicinelist = products.filter( d => d.type == 'medicine');
	res.json(medicinelist)
})

module.exports = router
