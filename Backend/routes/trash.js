const express = require("express");
const router = express.Router();


const TrashController = require("../controllers/trash.controller");
const trashController = new TrashController();

router.get('/trash', trashController.getAllTrash);

module.exports = router;

