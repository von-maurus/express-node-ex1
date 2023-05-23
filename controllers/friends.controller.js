const { friends } = require("../models/friend");
const { v4: uuidv4 } = require('uuid');

function getFriend(req, res) {
    const fId = req.params.friendId;
    console.log(`Friend ID: ${fId}`)
    const friend = friends.find(e => e.id == fId);

    if (!friend) {
        console.warn(`Friend not found.`)
        return res.status(404).json({ message: "FRIEND_NOT_FOUND", sucess: false });
    }

    return res.status(200).json({ data: friend, sucess: true })
}

function fetchFriends(req, res) {
    res.json(friends);
}

function createFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({ sucess: false, message: "PARAMS_NOT_FOUND" });
    }
    const newFriend = {
        id: uuidv4(),
        name: req.body.name
    }
    friends.push(newFriend);
    return res.status(200).json({ sucess: true, newFriend: newFriend });
}

module.exports = {
    getFriend, fetchFriends, createFriend
};