const messages = [
  {
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

module.exports = { messages };
