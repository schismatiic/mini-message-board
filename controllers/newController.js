const db = require("../db/queries");
const { body, validationResult, matchedData } = require("express-validator");

const lengthErr = "must be between 1 and 25 characters.";
const lengthErr2 = "must be between 1 and 100 characters.";

const validateMessage = [
  body("messageUser")
    .trim()
    .isLength({ min: 1, max: 25 })
    .withMessage(`The name ${lengthErr}`),
  body("messageText")
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage(`The message ${lengthErr2}`),
];

const getNewMessage = (req, res) => {
  res.render("new");
};
const createMessage = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("new", {
      title: "New message",
      errors: errors.array(),
    });
  }
  const { messageUser, messageText } = matchedData(req);
  await db.insertMessage(messageUser, messageText);
  res.redirect("/");
};

module.exports = { getNewMessage, createMessage, validateMessage };
