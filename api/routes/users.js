const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const {validateToken} = require("../middlewares/AuthMiddelware")

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

module.exports = router;
