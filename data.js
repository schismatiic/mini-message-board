const messages = [
  {
    messageId: crypto.randomUUID(),
    text: "Hi there!",
    user: "Amando",
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
  },
  {
    messageId: crypto.randomUUID(),
    text: "Hello World!",
    user: "Charles",
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
  },
];

const getMessageById = async (id) => {
  return messages.find((msg) => msg.messageId === id);
};
module.exports = { messages, getMessageById };
