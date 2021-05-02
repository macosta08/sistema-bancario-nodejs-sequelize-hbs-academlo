const Sequelize = require("sequelize");
const db = require("../config/database");

const Clients = db.define("clients", {
  first_name: {
    type: Sequelize.STRING,
  },
  last_name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  telephone: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Clients;
