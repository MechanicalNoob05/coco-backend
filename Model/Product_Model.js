const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	type: {
		type: String,
		required: true
	},
	pet: {
		type: String,
		required: true
	},
	pet: {
		type: String,
		required: true
	},
	desc: {
		type: String,
		required: true
	},
    price:{
        type: Number,
        required:true
    },
    available:{
        type: Boolean,
        required:true
    },
	created: {
		type: Date,
		required: true,
		default: Date.now
	},

})

module.exports = mongoose.model('Products', productSchema)
