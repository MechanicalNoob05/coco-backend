const router = require('express').Router();

router.get('/', (req, res) => {
	res.json(
		[
			{
				"id": 202,
				"albumId": 12345678,
				"title": "functional cart",
				"available": true,
				"url": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffbcd.co%2Fimages%2Fproducts%2Ffcf122172b60c3ff80eda25dbb857936_resize.jpg&f=1&nofb=1&ipt=0985cbfc78eb75a46edf9a3a645447c4db2c7460ec21a68c62242be3efaee046&ipo=images"
			},
			{
				"id": 203,
				"albumId": 12345679,
				"title": "red bicycle",
				"available": true,
				"url": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexample.com%2Fimage2.jpg&f=1&nofb=1&ipt=2cdeb02d4d22c76e23e9e9ea1d1e30b39801a6b139ce234f019933d05e7ea33f&ipo=images"
			},
			{
				"id": 204,
				"albumId": 12345680,
				"title": "blue chair",
				"available": true,
				"url": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexample.com%2Fimage3.jpg&f=1&nofb=1&ipt=3f8dc43c6a511a3c5839a5fba3e981cbb8e12a97e758c2eb9b6c5d6a3f57f482&ipo=images"
			},
			{
				"id": 205,
				"albumId": 12345681,
				"title": "green sofa",
				"available": false,
				"url": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexample.com%2Fimage4.jpg&f=1&nofb=1&ipt=3d679d74181c5ff6e1d5e693da44b5ec4b709b5a1c1976f4b23d70b08d4d4661&ipo=images"
			},
			{
				"id": 206,
				"albumId": 12345682,
				"title": "wooden table",
				"available": true,
				"url": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexample.com%2Fimage5.jpg&f=1&nofb=1&ipt=af3c725d2926b96607507eac3deeb5a6804e4e2b6a29fba9c1c1c515754017db&ipo=images"
			},
			{
				"id": 207,
				"albumId": 12345683,
				"title": "vintage lamp",
				"available": true,
				"url": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexample.com%2Fimage6.jpg&f=1&nofb=1&ipt=1583b0e607a846b11f4115239c4deea19a4785b6b9031764d3ff0701f72de79a&ipo=images"
			},
			{
				"id": 208,
				"albumId": 12345684,
				"title": "modern desk",
				"available": false,
				"url": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexample.com%2Fimage7.jpg&f=1&nofb=1&ipt=7b8c18f88f9eb05c810e82f2fc8fcd553df8cc21f9f39d8971d7999b3498ef91&ipo=images"
			},
			{
				"id": 209,
				"albumId": 12345685,
				"title": "leather sofa",
				"available": true,
				"url": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexample.com%2Fimage8.jpg&f=1&nofb=1&ipt=de9a3208c234c6dbfd5e2126c867ef622f1803f400ff8f5f7c133f1030400d25&ipo=images"
			},
			{
				"id": 210,
				"albumId": 12345686,
				"title": "cozy armchair",
				"available": true,
				"url": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexample.com%2Fimage9.jpg&f=1&nofb=1&ipt=3d297b7f93f8e729c9a66c1570802a55667f07e3b9e34e07d1554635ee57ea60&ipo=images"
			},
			{
				"id": 211,
				"albumId": 12345687,
				"title": "bookshelf",
				"available": false,
				"url": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fexample.com%2Fimage10.jpg&f=1&nofb=1&ipt=b30704524984a41c73e28a3c0a8e6a779cbb8c0074f0459351ca247db8e3b5c2&ipo=images"
			}
		]

	)
})

module.exports = router
