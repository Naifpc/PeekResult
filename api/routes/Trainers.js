const express = require("express");
const multer = require("multer");
const router = express.Router();
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middlewares/AuthMiddelware");
const { Trainer, Fields } = require("../models");

const path = require("path");

//Upload Image controller

const imgconfig = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "uploads");
  },
  filename: (req, file, callback) => {
    callback(null, `image-${Date.now()}.${file.originalname}`);
  },
});

//image filter
const upload = multer({
  storage: imgconfig,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, callback) => {
    const fileType = /jpeg|jpg|png|gif/;
    const mimeType = fileType.test(file.mimetype);
    const extname = fileType.test(path.extname(file.originalname));
    if (mimeType && extname) {
      return callback(null, true);
    }
    callback("Give proper file format to upload");
  },
});

//////////////////////////////////////////////////////////////////////////////////////
// POST route to create a new trainer and associate with fields
//////////////////////////////////////////////////////////////////////////////////////
router.post("/newTrianer", upload.single("avatar"), async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      experience,
      gender,
      description,
      fieldIds,
    } = req.body;

    const trainers = await Trainer.findOne({ where: { email: email } });

    //check if user already exixts
    if (trainers != null) {
      return res.json({ error: "user already exists" });
    }

    // Create the new trainer with hashed password
    const hash = await bcrypt.hash(password, 10);
    const newTrainer = await Trainer.create({
      username,
      email,
      password: hash,
      experience,
      gender,
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

    return res.json("SUCCESS");
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

    const trainers = await fields.getTrainers({
      attributes: ["id", "username", "experience", "avatar"],
    }); // Get all trainers associated with the field

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
    const allTrainers = await Trainer.findAll({
      attributes: ["id", "username", "experience", "avatar"],
    });
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
    const trainerData = await Trainer.findByPk(id, {
      attributes: [
        "id",
        "username",
        "experience",
        "avatar",
        "gender",
        "description",
      ],
    });

    // Get all fields associated with the trainer
    const fields = await trainerData.getFields();

    const trainerFields = { trainerData, fields };

    res.json(trainerFields);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get Trainer" });
  }
});

//////////////////////////////////////////////////////////////////////////////////////
// login trainer
//////////////////////////////////////////////////////////////////////////////////////

router.post("/login", async (req, res) => {
  // login a  user
  try {
    const { email, password } = req.body;
    const user = await Trainer.findOne({ where: { email: email } });

    if (!user) return res.json({ error: "user not found" });

    bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        return res.json({ error: "Wrong email and password compnation" });
      } else {
        const accessToken = sign(
          { username: user.username, id: user.id },
          "pLFriwTWOsakqMX"
        );
        return res.json(accessToken);
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create Trainee" });
  }
});

//////////////////////////////////////////////////////////////////////////////////////
// check trainer token
//////////////////////////////////////////////////////////////////////////////////////

router.get("/userData", validateToken, async (req, res) => {
  // get current user data
  try {
    const tokenId = req.user.id;
    const userData = await Trainer.findOne({
      attributes: ["id", "username", "email"],
      where: { id: tokenId },
    });
    if (!userData) {
      res.json({ error: "login required" });
    } else {
      res.json(userData);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get Trainee" });
  }
});

module.exports = router;
