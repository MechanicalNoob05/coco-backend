// Assuming this code is in a file named serviceRequestRoutes.js

const express = require('express');
const router = express.Router();
const ServiceRequestModel = require('../models/Cases');

// GET route to fetch all service requests
router.get('/', async (req, res) => {
    console.log('get case')
  try {
    const serviceRequests = await ServiceRequestModel.find().populate('user_information');
    res.status(200).json(serviceRequests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
router.post('/add-case', async (req, res) => {
  console.log('add case')
    try {
      // Assuming the request body contains the necessary data for creating a new service request
      const serviceRequestData = req.body;
  
      // Create a new service request using the ServiceRequestModel
      const newServiceRequest = new ServiceRequestModel(serviceRequestData);
  
      // Save the new service request to the database
      const savedServiceRequest = await newServiceRequest.save();
  
      res.status(201).json(savedServiceRequest); // Respond with the created service request
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
module.exports = router;
