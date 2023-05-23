const express = require("express")
const friendsCtrl = require("../controllers/friends.controller")
const router = express.Router()

router.use((req, res, next) => {
    console.log(`Incoming IP ${req.ip}`)
    next()
});

router.get('/', friendsCtrl.fetchFriends)
router.post('/create', friendsCtrl.createFriend)
router.get('/:friendId', friendsCtrl.getFriend)

module.exports = router;