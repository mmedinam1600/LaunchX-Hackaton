const {scoreModel} = require("../models/score.model");



class ScoreController {

  async getAllScores(req, res) {
    try {
      const scores = await scoreModel.findAll();
      res.status(200).json(scores);
    } catch (e) {
      console.log("Error: " + e);
      res.status(500).json({
        error: e
      });
    }
  }

  async submitScore(req, res) {
    const {score, name} = req.body;
    try {
      await scoreModel.create({
        score,
        name
      });
    } catch (e) {
      console.log("Error: " + e);
      res.status(500).json({
        error: e
      });
    }
  }

}



module.exports = ScoreController;