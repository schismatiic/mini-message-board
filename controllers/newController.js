const db = require("../db/queries");

const getNewMessage = (req, res) => {
  res.render("new");
};
const createMessage = async (req, res) => {
  const messageUser = req.body.messageUser;
  const messageText = req.body.messageText;
  await db.insertMessage(messageUser, messageText);
  res.redirect("/");
};

module.exports = { getNewMessage, createMessage };
