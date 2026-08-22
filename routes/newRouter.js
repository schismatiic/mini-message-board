const { Router } = require("express");
const newRouter = Router();
const { getNewMessage } = require("../controllers/newController");

newRouter.get("/", getNewMessage);

module.exports = newRouter;
