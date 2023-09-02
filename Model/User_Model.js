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
	date:{
		type:Date,
		default:Date.now
	}
});

module.exports = mongoose.model('User',UserScheme);
