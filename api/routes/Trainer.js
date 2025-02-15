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

router.get('/byId/:id' , async (req, res) => { // query by id 
  try {
    const id = req.params.id
    const trainer = await Trainer.findByPk(id); // find trainer with id 

    // Get all fields associated with the trainer
    const fields = await trainer.getFields();

    const trainerFields = {trainer, fields}

    res.json(trainerFields);

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

    await Trainer.create(post);  


    


  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create Trainer' });
  }
});

module.exports = router;
