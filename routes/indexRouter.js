const { Router } = require("express");
const indexRouter = Router();
const { getMessage, createMessage } = require("../controllers/indexController");

indexRouter.get("/", getMessage);
indexRouter.post("/new", createMessage);

module.exports = indexRouter;
