const { sequelize } = require("../db/connection");

const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base exitosa");
  } catch (e) {
    throw new Error(`Error trying to connect to database: \n${e}`);
  }
};


module.exports = connectDatabase;