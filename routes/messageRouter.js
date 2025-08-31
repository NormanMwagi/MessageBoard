const { Router } = require('express');
const messages = require('./messages');
const messageRouter = Router();

messageRouter.get("/:id", (req, res) => {
    const { id } = req.params;
    const message = messages[id];
    if (!message) {
        return res.status(404).send("Message not found");
    }
    res.render("message", { message });
});

module.exports = messageRouter;