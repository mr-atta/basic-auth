"use strict";

require("dotenv").config();

const { db } = require("./src/moudel/index");
const { start } = require("./src/server");

db.sync()
  .then(() => {
    start(process.env.PORT || 3005);
  })
  .catch(console.error);
