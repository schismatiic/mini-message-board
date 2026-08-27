const db = require("../db/queries");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getMessages = async (req, res) => {
  const messages = await db.getAllMessages();
  if (!messages) {
    throw new CustomNotFoundError("Messages not found");
  }
  res.render("index", { messages: messages });
};
const getMessageId = async (req, res) => {
  const { id } = req.params;
  const message = await db.getMessage(id);
  if (!message) {
    throw new CustomNotFoundError("Message not found");
  }
  res.render("message", {
    username: message.username,
    text: message.text,
    added: message.added,
  });
};

module.exports = { getMessages, getMessageId };
