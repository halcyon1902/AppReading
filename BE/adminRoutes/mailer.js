const express = require("express").Router();
const controller = require("../adminController/mailerController");
const middlewarecontroller = require("../adminController/middlewareController");
express.get("/", controller.GetMailer);
express.post("/", controller.PostMailer);
express.get("/reset", middlewarecontroller.verifyToken, controller.GetUpdate);
express.post("/reset", middlewarecontroller.verifyToken, controller.PostUpdate);
module.exports = express;
