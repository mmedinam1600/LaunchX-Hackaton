const { sequelize, DataTypes } = require('../db/connection');

const scoreModel = sequelize.define(
  'scores',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false,
  },
);

const syncScoreModel = () => {
  scoreModel.sync()
    .then(() => {
      console.log("Fishes model sync complete");
    }).catch(() => {
    console.log("Error to sync fish model");
  });
}

module.exports = {
  scoreModel,
  syncScoreModel
};