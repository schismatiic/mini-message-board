const { Router } = require("express");
const newRouter = Router();
const {
  getNewMessage,
  createMessage,
} = require("../controllers/newController");

newRouter.get("/", getNewMessage);
newRouter.post("/create", createMessage);

module.exports = newRouter;
