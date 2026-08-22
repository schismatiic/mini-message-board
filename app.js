const express = require("express");
const app = express();
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Router
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

// Load the .env port
process.loadEnvFile();
const PORT = process.env.PORT || 3000;

app.use("/new", newRouter);
app.use("/", indexRouter);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port: ${PORT}`);
});
