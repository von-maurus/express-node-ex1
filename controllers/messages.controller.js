// Note: if we use a function we can have additional debugging info. Instead of using just a const variable.
function postMsg(req, res) {
    console.log("Updating a message...")
    res.status(200).send()
}
function getMessages(req, res) {
    res.send('<h1> Hello Alberto Balsam, how was your day?</h1>')
}

module.exports = {
    postMsg, getMessages
};