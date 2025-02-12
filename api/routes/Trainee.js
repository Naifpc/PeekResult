const express = require('express');
const router = express.Router();
const { Trainee } = require("../models");

router.post('/', async (req, res) => {
  try {
    const post = req.body;
    console.log(post)
    const newTrainee = await Trainee.create(post);
    


  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create Trainee' });
  }
});

module.exports = router;
