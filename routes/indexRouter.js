const { Router } = require("express");
const indexRouter = Router();
const { getMessages, getMessageId } = require("../controllers/indexController");

indexRouter.get("/", getMessages);
indexRouter.get("/:id", getMessageId);

module.exports = indexRouter;
