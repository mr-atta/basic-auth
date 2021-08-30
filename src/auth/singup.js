"use strict";

const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const base64 = require("base-64");

const { User } = require("../moudel/index");

// const { server } = require("../server");

// // perform a functionallity before we create and save a new user
// Users.beforeCreate((user) => {
//   console.log(user); // what might we want to do programmiaticall before user data is presisted to the database?

//   // hash the password
// });

router.post("/signup", async (req, res, next) => {
  try {
    const valid = await User.findOne({
      where: { username: req.body.username },
    });
    if (!valid) {
      const record = await User.create({
        username: req.body.username,
        password: req.body.password,
      });
      res.status(200).json(record);
      next();
    } else {
      next("already exist");
    }
  } catch (e) {
    console.log(e);
    res.status(403).send("Error Creating User");
  }
});

module.exports = router;
