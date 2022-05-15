const express = require("express");
const router = express.Router();

const FishesController = require("../controllers/fishes.controller");
const fishesController = new FishesController();


router.get('/fishes', fishesController.getAllFishes);

router.get('/fish/:type', fishesController.getFish);

module.exports = router;