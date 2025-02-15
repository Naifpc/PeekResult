const express = require('express');
const router = express.Router();
const { Trainer, Fields , TrainerFields } = require('../models');



// POST route to create a new trainer and associate with fields
router.post('/', async (req, res) => {
  const { username, email, password, experience, description, imagePath, fieldIds } = req.body;
  
  try {
      // Create the new trainer
      const newTrainer = await Trainer.create({
          username,
          email,
          password,
          experience,
          description,
          imagePath
      });
      
      // Find the fields by their IDs
      const fields = await Fields.findAll({
          where: {
              id: fieldIds // Assuming fieldIds is an array of field IDs
          }
      });
      
      // Associate the trainer with the fields
      await newTrainer.addFields(fields);

      res.status(201).json(newTrainer);
  } catch (error) {
      res.status(500).json({ error: error.message });

    }
    });




 

module.exports = router;
