const express = require('express');
const router = express.Router();
const { Trainer } = require("../models");



router.get('/', async (req, res) => {
  try {
    const allTrainers = await Trainer.findAll(); // find all trainers
    res.json(allTrainers);
    


  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get Trainer' });
  }
});

router.post('/', async (req, res) => {
  try {
    const post = req.body;
    console.log(post)

    post.imagePath = "/images/cat.jpg";

    const newTrainee = await Trainer.create(post);
    


  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create Trainer' });
  }
});

module.exports = router;
