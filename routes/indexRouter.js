const { Router } = require("express");
const indexRouter = Router();
const {
  getMessage,
  getMessageId,
  createMessage,
} = require("../controllers/indexController");

indexRouter.get("/", getMessage);
indexRouter.get("/:messageId", getMessageId);
indexRouter.post("/new", createMessage);

module.exports = indexRouter;
