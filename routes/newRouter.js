const { Router } = require('express');

const newRouter = Router();

newRouter.get("/new", (req, res) => {
    res.render("form");
});

module.exports = newRouter;