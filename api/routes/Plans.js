const express = require("express");
const router = express.Router();
const { Plans } = require("../models");

// find all Fields
router.post("/newPlan", async (req, res) => {
  try {
    const newPlan = req.body;
    const plan = await Plans.create(newPlan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get Trainer" });
  }
});

module.exports = router;
