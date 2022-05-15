
const express = require("express");
const router = express.Router();

const ScoreController = require("../controllers/score.controller");
const scoreController = new ScoreController();


//Obtener todos los puntajes
router.get('/score', scoreController.getAllScores);

//Submit score
router.post('/score', scoreController.submitScore);

module.exports = router;
