router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("view_rigs", {
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
