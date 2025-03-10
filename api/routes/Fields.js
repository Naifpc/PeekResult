const express = require('express');
const router = express.Router();
const { Fields } = require("../models");


// find all Fields
router.get('/', async (req, res) => {
  try {
    const allFields = await Fields.findAll(); 
    res.json(allFields);
    


  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get Trainer' });
  }
});

module.exports = router;
