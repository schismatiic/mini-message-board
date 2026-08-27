const { Router } = require("express");
const indexRouter = Router();
const {
  getMessages,
  getMessageId,
  getMessageDelete,
} = require("../controllers/indexController");

indexRouter.get("/", getMessages);
indexRouter.get("/:id", getMessageId);
indexRouter.get("/:id/delete", getMessageDelete);

module.exports = indexRouter;
