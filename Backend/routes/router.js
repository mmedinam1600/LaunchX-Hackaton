const express = require('express');
const router = express.Router();


router.use("*", (req, res) => {
  res.status(404).json("ERROR 404");
});


module.exports = {
  router
}
