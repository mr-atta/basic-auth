"use strict";

const express = require("express");

// const bcrypt = require("bcrypt");
// const base64 = require("base-64");

const singin = require("./auth/singin");
const singup = require("./auth/singup");

const handler404 = require("./error-handlers/404");
const handler500 = require("./error-handlers/500");

require("dotenv").config();

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());

app.use(singup);
app.use(singin);

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

// home page
app.get("/", (req, res) => {
  res.status(200).send(`Hello `);
});

// 404 , 500
app.get("/bad", (req, res, next) => {
  next("error from (bad) end point");
});

app.use(handler500);

app.use("*", handler404);

// export and listen
module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => console.log(`server listen at port : ${port}`));
  },
};
