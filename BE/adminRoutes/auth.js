const express = require("express").Router();
const authcontroller = require("../admincontroller/authController");

express.get("/login", authcontroller.GetLogin);
express.post("/login", authcontroller.PostLogin);
express.get("/logout", authcontroller.GetLogout);
module.exports = express;