const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Contact form submission
router.post('/contact', async (req, res) => {
  console.log('Received contact request:', {
    body: req.body,
    headers: req.headers,
  });

  try {
    if (!req.body || !req.body.name || !req.body.email || !req.body.message) {
      console.log('Missing required fields:', req.body);
      return res.status(400).json({ 
        message: 'Missing required fields',
        received: req.body 
      });
    }

    const { name, email, message } = req.body;
    
    const newContact = new Contact({
      name,
      email,
      message
    });

    console.log('Attempting to save contact:', newContact);
    
    const savedContact = await newContact.save();
    console.log('Contact saved successfully:', savedContact);

    res.status(201).json({ 
      message: 'Contact form submitted successfully',
      contact: savedContact
    });
  } catch (error) {
    console.error('Error in contact form submission:', {
      error: error.message,
      stack: error.stack
    });
    res.status(500).json({ 
      message: 'Error submitting contact form', 
      error: error.message 
    });
  }
});

module.exports = router;
