const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const {validateToken} = require("../middlewares/AuthMiddelware");
const { error } = require("jquery");

router.post("/register", async (req, res) => {
  // register a new user
  try {
    const { username, email, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
      Users.create({
        username: username,
        email: email,
        password: hash,
      });
      res.json("SUCCESS");
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create Trainee" });
  }
});

router.post("/login", async (req, res) => {
  // login a  user
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email: email } });

    if (!user) res.json({ error: "user not found" });

    bcrypt.compare(password, user.password).then((match) => {
      if (!match) res.json({ error: "Wrong email and password compnation" });

      const accessToken = sign(
        { username: user.username, id: user.id },
        "pLFriwTWOsakqMX"
      );

      res.json(accessToken);

    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create Trainee" });
  }
});

router.get('/userData',validateToken, async (req, res) => {// get current user data
  try {
    
    
    const tokenId = req.user.id
    const userData = await Users.findOne({ where: { id: tokenId } });
    if(!userData){
      res.json({error:"login required"})
    }else{
      res.json(userData);
    }
    
    


  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get Trainee' });
  }
});


router.post("/update", validateToken, async (req, res) => {
  // update user data
  try {
    const { gender, birthDate, height, waistLength,neckLength,weight,fatWeight,muscleWeight } = req.body;
    const tokenId = req.user.id;
    const updateData = {};

    if (gender !== undefined) updateData.gender = gender;
    if (birthDate !== undefined) updateData.birthDate = birthDate;
    if (height !== undefined) updateData.height = height;
    if (waistLength !== undefined) updateData.waistLength = waistLength;
    if (neckLength !== undefined) updateData.neckLength = neckLength;
    if (weight !== undefined) updateData.weight = weight;
    if (fatWeight !== undefined) updateData.fatWeight = fatWeight;
    if (muscleWeight !== undefined) updateData.muscleWeight = muscleWeight;

    await Users.update(updateData, {
      where: {
        id: tokenId,
      },
    });

    res.json('good');
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update user data" });
  }
});


module.exports = router;
