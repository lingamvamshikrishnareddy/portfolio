const express = require('express');
const router = express.Router();

// Import models
let Contact, PageVisit;
try {
  Contact = require('../models/Contact');
  PageVisit = require('../models/PageVisit');
} catch (error) {
  console.error('Error importing models:', error);
}

// Contact form submission
router.post('/contact', async (req, res) => {
  if (!Contact) {
    return res.status(500).json({ message: 'Contact model not available' });
  }
  try {
    const { name, email, message } = req.body;
    console.log('Received contact form submission:', req.body);
    
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error in contact form submission:', error.message);
    res.status(500).json({ message: 'Error submitting contact form', error: error.message });
  }
});

// Page visit tracking
router.post('/pagevisit', async (req, res) => {
  if (!PageVisit) {
    return res.status(500).json({ message: 'PageVisit model not available' });
  }
  try {
    const { page } = req.body;
    const pageVisit = await PageVisit.findOne({ page });
    
    if (pageVisit) {
      pageVisit.visitCount += 1;
      pageVisit.lastVisited = Date.now();
      await pageVisit.save();
    } else {
      await PageVisit.create({ page });
    }
    
    res.status(200).json({ message: 'Page visit recorded' });
  } catch (error) {
    console.error('Error recording page visit:', error.message);
    res.status(500).json({ message: 'Error recording page visit', error: error.message });
  }
});

module.exports = router;
