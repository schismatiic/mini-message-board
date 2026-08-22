const data = require("../data");

const getMessage = async (req, res) => {
  const messages = await data.messages;
  res.render("index", { messages: messages });
};
const createMessage = async (req, res) => {
  const messages = await data.messages;
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;
  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date()
      .toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      .replace(/\//g, "-")
      .replace(",", " -"),
  });
  res.redirect("/");
};

module.exports = { getMessage, createMessage };
