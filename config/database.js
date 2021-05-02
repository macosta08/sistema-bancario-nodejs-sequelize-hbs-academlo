const { Sequelize } = require("sequelize");

const db = new Sequelize(process.env.DATABASE_URL, {
  host: "ec2-34-225-167-77.compute-1.amazonaws.com",
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = db;
