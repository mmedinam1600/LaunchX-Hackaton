const { sequelize, DataTypes } = require('../db/connection');

const fishesModel = sequelize.define(
  'fishes',
  {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: false,
  },
);

const syncFishesModel = () => {
  fishesModel.sync()
    .then(() => {
      console.log("Fishes model sync complete");
    }).catch(() => {
    console.log("Error to sync fish model");
  });
}

module.exports = {
  fishesModel,
  syncFishesModel
};