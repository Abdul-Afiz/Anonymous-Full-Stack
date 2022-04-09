const { doSignup, doLogin } = require("./auth.actions");
const { validateSignup, validateLogin } = require("./auth.policies");

const router = require("express").Router();

router.post("/signup", validateSignup, doSignup);
router.post("/login", validateLogin, doLogin);

module.exports = router;
