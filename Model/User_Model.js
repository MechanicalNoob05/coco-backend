const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
	name:{
		type:String,
		required:true,
		min:6,
		max:225
	},
	email:{
		type:String,
		required:true,
	},
	password:{
		type:String,
		required:true,
		max:1024,
		min:8
	},
	petlist: [{type: mongoose.Schema.Types.ObjectId, required: false, ref: "Pet"}],
	date:{
		type:Date,
		default:Date.now
	}
});

module.exports = mongoose.model('User',UserScheme);
