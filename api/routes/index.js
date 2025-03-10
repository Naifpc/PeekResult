var express = require("express");
var router = express.Router();

const db = require("../models");

db.sequelize.sync().then(() => {
  /* GET home page. */
  router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
  });
});

module.exports = router;
