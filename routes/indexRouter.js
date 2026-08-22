const { Router } = require("express");
const indexRouter = Router();
const { getMessage } = require("../controllers/indexController");

indexRouter.get("/", getMessage);

module.exports = indexRouter;
