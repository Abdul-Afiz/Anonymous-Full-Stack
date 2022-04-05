const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    message: "welcome to the beginning of nothingness",
  });
});

module.exports = router;
