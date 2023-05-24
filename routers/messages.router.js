const express = require("express")
const messagesCtrl = require("../controllers/messages.controller")
const router = express.Router()

router.get('/', messagesCtrl.getMessages)
router.post('/create', messagesCtrl.postMsg)
router.get('/get-picture', messagesCtrl.getPicture)
router.get('/template-message', messagesCtrl.getMessageTemplate)

module.exports = router;