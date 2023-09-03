const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
	name:{
		type:String,
		required:true,
		min:6,
		max:225
	},
    dob:{
        type:String,
        required:true, 
    },
    type:{
        type:String,
        required:true,
    },
    breed:{
        type:String,
        required:true,
    },
	date:{
		type:Date,
		default:Date.now
	}
});

module.exports = mongoose.model('Pet',PetSchema);
