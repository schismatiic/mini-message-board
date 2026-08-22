const data = require("../data");

const getMessage = async (req, res) => {
  const messages = await data.messages;
  res.render("index", { messages: messages });
};

module.exports = { getMessage };
