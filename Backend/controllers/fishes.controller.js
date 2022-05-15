const { fishesModel } = require("../models/fishes.model");


class FishesController {

  getAllFishes = async (req, res) => {
    try {
      const fishes = await fishesModel.findAll();
      res.status(200).json(fishes);
    } catch (e) {
      console.log("Error: " + e);
      res.status(500).json({
        error: e
      });
    }
  }

  getFish = async (req, res) => {
    const fishType = req.params.type;

    try {
      const fish = await fishesModel.findOne({
        where: {
          type: fishType
        }
      });
      if(!fish) {
        return res.status(500).json({
          error: "Fish "+ req.params.type +" not found"
        });
      }
      res.status(200).json(fish);
    } catch (e) {
      res.status(500).json({
        error: "Fish "+ req.params.type +" not found"
      });
    }
  }

}


module.exports = FishesController;