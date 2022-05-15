
const {sequelize, DataTypes} = require("../db/connection");

const trashModel = sequelize.define(
  'trashes',
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


const syncTrashModel = () => {
  trashModel.sync()
    .then(() => {
      console.log("Trashes model sync complete");
    }).catch(() => {
    console.log("Error to sync fish model");
  });
}

module.exports = {
  trashModel,
  syncTrashModel
};