const express = require("express");
const app = express();

process.loadEnvFile();
const PORT = process.env.PORT || 3000;

app.use("/", (req, res) => {
  res.send("Meaningless");
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port: ${PORT}`);
});
