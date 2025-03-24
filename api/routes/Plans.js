const express = require("express");
const router = express.Router();
const { Plans, Exercises, Days } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddelware");

//////////////////////////////////////////////////////////////////////////////////////
// create new plan for trainer
//////////////////////////////////////////////////////////////////////////////////////
router.post("/newPlan", validateToken, async (req, res) => {
  try {
    const { name, daysList } = req.body;
    const tokenId = req.user.id;

    const newPlan = await Plans.create({ name: name, TrainerId: tokenId });

    daysList.forEach((day) => {
      const newDay = Days.create({ name: day.name, PlanId: newPlan.id });

      day.exercises.forEach((exercise) => {
        Exercises.create({
          name: exercise.name,
          sets: exercise.sets,
          reps: exercise.reps,
          weight: exercise.weight,
          muscles: exercise.muscles,
          intensity: exercise.intensity,
          videoLink: exercise.videoLink,
          DayId: newDay.id,
        });
      });
    });
    res.json("NEW PLAN SUCCESS");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get Trainer" });
  }
});

//////////////////////////////////////////////////////////////////////////////////////
// delete plan for trainer
//////////////////////////////////////////////////////////////////////////////////////
router.post("/deletePlan", validateToken, async (req, res) => {
  try {
    const { key } = req.body;
    const tokenId = req.user.id;

    await Plans.destroy({
      where: {
        TrainerId: tokenId,
        id: key,
      },
    });

    res.json("DELETE SUCCESS");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get Trainer" });
  }
});

//////////////////////////////////////////////////////////////////////////////////////
// get all plans assosieted with trainer
//////////////////////////////////////////////////////////////////////////////////////

router.get("/myPlans", validateToken, async (req, res) => {
  try {
    const tokenId = req.user.id;
    const plan = await Plans.findAll({
      where: { TrainerId: tokenId },
    });
    if (!plan) {
      res.json({ error: "login required" });
    } else {
      res.json(plan);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to get Trainee" });
  }
});

module.exports = router;
