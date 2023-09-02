const router = require('express').Router();

router.get('/', (req, res) => {
	res.json(
		[
			{
				"id": 202,
				"albumId": 12345678,
				"title": "functional cart",
				"available": true,
				"url":"https://picsum.photos/1200/1000"
			},
			{
				"id": 203,
				"albumId": 12345679,
				"title": "red bicycle",
				"available": true,
				"url":"https://picsum.photos/1200/1000"
			},
			{
				"id": 204,
				"albumId": 12345680,
				"title": "blue chair",
				"available": true,
				"url":"https://picsum.photos/1200/1000"
			},
			{
				"id": 205,
				"albumId": 12345681,
				"title": "green sofa",
				"available": false,
				"url":"https://picsum.photos/1200/1000"
			},
			{
				"id": 206,
				"albumId": 12345682,
				"title": "wooden table",
				"available": true,
				"url":"https://picsum.photos/1200/1000"
			},
			{
				"id": 207,
				"albumId": 12345683,
				"title": "vintage lamp",
				"available": true,
				"url":"https://picsum.photos/1200/1000"
			},
			{
				"id": 208,
				"albumId": 12345684,
				"title": "modern desk",
				"available": false,
				"url":"https://picsum.photos/1200/1000"
			},
			{
				"id": 209,
				"albumId": 12345685,
				"title": "leather sofa",
				"available": true,
				"url":"https://picsum.photos/1200/1000"
			},
			{
				"id": 210,
				"albumId": 12345686,
				"title": "cozy armchair",
				"available": true,
				"url":"https://picsum.photos/1200/1000"
			},
			{
				"id": 211,
				"albumId": 12345687,
				"title": "bookshelf",
				"available": false,
				"url":"https://picsum.photos/1200/1000"
			}
		]

	)
})

module.exports = router
