const { Router } = require("express");
const newRouter = Router();
const {
  getNewMessage,
  createMessage,
  validateMessage,
} = require("../controllers/newController");

newRouter.get("/", getNewMessage);
newRouter.post("/create", validateMessage, createMessage);

module.exports = newRouter;
