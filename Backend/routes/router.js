const express = require('express');
const router = express.Router();


const fishes = require("./fishes");
const trash = require("./trash");
const score = require("./score");

router.use(fishes);
router.use(trash);
router.use(score);

router.use("*", (req, res) => {
  res.status(404).json("ERROR 404");
});


module.exports = {
  router
}
