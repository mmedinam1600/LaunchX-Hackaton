const {trashModel} = require("Backend/models/trash.model");


class TrashController {


  getAllTrash = async (req, res) => {
    try {
      const trash = await trashModel.findAll();
      res.status(200).json(trash);
    } catch (e) {
      res.status(500).json({
        error: "Error: " + e
      });
    }
  }

}


module.exports = TrashController;