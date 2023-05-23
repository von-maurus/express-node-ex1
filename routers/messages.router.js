const express = require("express")
const messagesCtrl = require("../controllers/messages.controller")
const router = express.Router()

router.get('/', messagesCtrl.getMessages)
router.post('/create', messagesCtrl.postMsg)

module.exports = router;