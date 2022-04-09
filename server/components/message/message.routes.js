const { requireAuth } = require("../auth/auth.middleware");
const { doPostMessage, getMessages } = require("./message.actions");
const { validatePostMessage } = require("./message.policies");

const router = require("express").Router();

router.post("/:uniqueId", validatePostMessage, doPostMessage);
router.get("/", requireAuth, getMessages);

module.exports = router;
