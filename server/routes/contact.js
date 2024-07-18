const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({
      name,
      email, 
      message,
    });

    const savedContact = await newContact.save();
    res.json(savedContact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;




