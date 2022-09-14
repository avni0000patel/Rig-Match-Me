const router = require("express").Router();
const { } = require("../models");

router.get("/", (req, res) => {
  res.render("home", {
    logged_in: req.session.logged_in
  });
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;
