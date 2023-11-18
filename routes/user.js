const express = require('express')
const router = express.Router()
const UserModel = require('../models/lawyerInfo')



router.post('/signup', async (req, res) => {
  try {
    // Assuming the request body contains the necessary data for creating a new user
    const userData = req.body;

    // Create a new user using the User model
    const newUser = new UserModel(userData);

    // Save the new user to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser); // Respond with the created user
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/', async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await UserModel.find();

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router
