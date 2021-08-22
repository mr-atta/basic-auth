"use strict";

const user = require("./user");
require("dotenv").config();

// sql db
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE_URL || "postgres://postgres@localhost:5432/lab06"
);

// use the model
const userModel = user(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  User: userModel,
};
