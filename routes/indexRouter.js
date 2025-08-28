const { Router } = require("express");
// 8-21-25 - to add when converting
// const usersController = require("../controllers/usersController");
const indexRouter = Router();

// 8-21-25 - all that will be here before module.exports
// indexRouter.get("/", usersController.getUsernames);
// indexRouter.get("/new", usersController.createUsernameGet);
// indexRouter.post("/new", usersController.createUsernamePost);
// indexRouter.get("/delete", usersController.deleteUsernameGet);
// indexRouter.post("/delete", usersController.deleteUsernamePost);
// indexRouter.get("/search", usersController.searchUsernameGet);

// 8-21-25 - links will move to usersController
const links = [
  { href: "/", text: "Home" },
  { href: "/new", text: "Form" },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages: messages, links: links });
});

const messages = [
  {
    text: "Go Pens!",
    user: "Sid",
    added: new Date()
  },
  {
    text: "Let's go Oilers!",
    user: "Connor",
    added: new Date()
  }
];

indexRouter.get("/new", (req, res) => {
  res.render("form", { links: links });
});

indexRouter.post("/new", (req, res) => {
  const username = req.body.username; // in form.ejs, access this property using <input username="username"
  const message = req.body.message; // name="message"
  messages.push({ text: message, user: username, added: new Date() });
  res.redirect("/");
});

indexRouter.get("/details/:messageId", (req, res) => {
  const messageId = Number(req.params.messageId);
  const currentMessage = messages[messageId];
  
  res.render("details", {
    title: `Message ${messageId}`,
    message: { ...currentMessage },
    messages: messages,
    links: links,
  });
});

module.exports = indexRouter;