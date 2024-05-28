// Assuming this code is in a file named userRoutes.js

const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// import UserModel, { find, findById } from '../models/UserInfo'; // Assuming your user model is in the 'models' directory
const UserModel = require("../models/UserInfo");
const authenticateToken = require('../middleware/fetchuser');

// POST route to create a new user


// Signup route
router.post('/signup', async (req, res) => {
  console.log('Adding New User');
  try {
    const { name, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the hashed password
    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    res.status(201).json({ "name": savedUser.name, "email": savedUser.email }); // Respond with the created user
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  console.log('User Logging In');
  try {
    const { email, password } = req.body;

    // Find the user by username
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    // Compare the password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid username or password' });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id, email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/update', authenticateToken, async (req, res) => {
  console.log('User Updating');
  try {
    const userId = req.user.userId;
    const updateData = req.body;
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update the user fields with the request body
    Object.keys(updateData).forEach(key => {
      user[key] = updateData[key];
    });

    await user.save();
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/verify', authenticateToken, async (req, res) => {
  console.log('User Verifying');
  try {
    const userId = req.user.userId;
    console.log(userId);
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({ sucess: false });
    }
    res.status(200).json({ sucess: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ sucess: false });
  }
})

router.get('/profile', authenticateToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    console.log(userId);

    // Find the user by userId
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(
      {
        "score": user.score,
        "name": user.name,
        "selectedCategory": user.selectedCategories
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router
