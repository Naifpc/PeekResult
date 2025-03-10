const express = require("express");
const multer  = require('multer')
const router = express.Router();
const bcrypt = require("bcrypt");
const { Trainer, Fields } = require("../models");

const path = require('path');

//Upload Image controller

const imgconfig = multer.diskStorage({
    destination:(req, file,callback)=>{
        callback(null,'uploads')
    },
    filename:(req, file, callback)=>{
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }
})

//image filter
const upload = multer({
    
    storage: imgconfig,
    limits:{fileSize:'1000000'},
    fileFilter:(req, file, callback)=>{
        const fileType = /jpeg|jpg|png|gif/
        const mimeType = fileType.test(file.mimetype)
        const extname = fileType.test(path.extname(file.originalname))
        if(mimeType && extname){
            return callback(null, true)
        }
        callback('Give proper file format to upload')
    }
})


//////////////////////////////////////////////////////////////////////////////////////
// POST route to create a new trainer and associate with fields
//////////////////////////////////////////////////////////////////////////////////////
router.post("/newTrianer", upload.single('avatar'), async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      experience,
      description,
      fieldIds,
    } = req.body;

    // Create the new trainer with hashed password
    const hash = await bcrypt.hash(password, 10);
    const newTrainer = await Trainer.create({
      username,
      email,
      password: hash,
      experience,
      description,
      avatar: req.file ? req.file.path : null, // Save image path
    });

    // Find the fields by their IDs
    const fields = await Fields.findAll({
      where: {
        id: fieldIds, // Assuming fieldIds is an array of field IDs
      },
    });

    // Associate the trainer with the fields
    await newTrainer.addFields(fields); 

    res.json("SUCCESS");

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



//////////////////////////////////////////////////////////////////////////////////////
// query trainer by field id
//////////////////////////////////////////////////////////////////////////////////////
router.get("/byFieldID/:id?", async (req, res) => {
  try {
    const id = req.params.id;

    const fields = await Fields.findByPk(id);

    const trainers = await fields.getTrainers({attributes: ['id','username', 'experience','avatar']}); // Get all trainers associated with the field

    res.json(trainers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get Trainer" });
  }
});

//////////////////////////////////////////////////////////////////////////////////////
// query all trainers
//////////////////////////////////////////////////////////////////////////////////////
router.get("/findAll", async (req, res) => {
  try {
    const allTrainers = await Trainer.findAll({attributes: ['id','username', 'experience','avatar']}); 
    res.json(allTrainers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get Trainer" });
  }
});

//////////////////////////////////////////////////////////////////////////////////////
// find trainer with id
//////////////////////////////////////////////////////////////////////////////////////
router.get("/byId/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const trainer = await Trainer.findByPk(id);
    
    const trainerData = {
      username: trainer.username,
      description:  trainer.description,
      experience:  trainer.experience,
      avatar:  trainer.avatar,

    }

    // Get all fields associated with the trainer
    const fields = await trainer.getFields();

    const trainerFields = { trainerData, fields };

    res.json(trainerFields);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get Trainer" });
  }
});

module.exports = router;
