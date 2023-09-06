const User = require('../Model/User_Model');

const router = require('express').Router();

const { registrationValidation, loginValidation}= require('../Helpers/datavalidator')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

router.post('/register', async (req,res)=>{

	const {error}= registrationValidation(req.body)
	if(error) return res.status(400).send(error.details[0].message);

	const emailExist = await User.findOne({email: req.body.email});
	if(emailExist) return res.status(400).send("Firse Register kar raha hai tu sharam kar");

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password,salt);

	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashedPassword
	})
	try {
		const savedUser = await user.save()
		res.status(201).json({sucess:true, id: savedUser._id})
	} catch (error) {
		res.status(400).send(error)
	}
})

router.post('/login',async (req,res)=>{
	const {error}= loginValidation(req.body)
	if(error) return res.status(400).send(error.details[0].message);


	const user = await User.findOne({email: req.body.email});
	if(!user) return res.status(400).json({err:"Register kar pehele"});

	const validatePass = await bcrypt.compare(req.body.password,user.password)
	if(!validatePass) return res.status(400).json({err:"password check kar ja"})

	const token = jwt.sign({_id: user._id},process.env.SECRET_TOKEN)
	res.header('auth-token',token).status(200).json({sucess:true,token});

	// res.status(200).send("gusgaya andar")
})

module.exports = router;
