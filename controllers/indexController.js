const db = require("../db/queries");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getMessages = async (req, res) => {
  const messages = await db.getAllMessages();
  const formattedMesagges = messages.map((message) => ({
    ...message,
    added: message.added
      .toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .replace(/\//g, "/")
      .replace(", ", " - "),
  }));
  if (!messages) {
    throw new CustomNotFoundError("Messages not found");
  }
  res.render("index", { messages: formattedMesagges });
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
    added: message.added
      .toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .replace(/\//g, "/")
      .replace(", ", " - "),
  });
};
const getMessageDelete = async (req, res) => {
  const { id } = req.params;
  await db.deleteMessage(id);
  res.redirect("/");
};
module.exports = { getMessages, getMessageId, getMessageDelete };
