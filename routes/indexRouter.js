const { Router } = require('express');

const indexRouter = Router();

const messages = require('./messages');

indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages: messages });
})

indexRouter.post("/new", (req, res) => {
    const { author, message } = req.body;
    messages.push({
        text: message,
        user: author,
        added: new Date()
    });
    res.redirect("/");
});

module.exports = indexRouter;