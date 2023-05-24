const path = require('path')

// Note: if we use a function we can have additional debugging info. Instead of using just a const variable.
function postMsg(req, res) {
    console.log("Updating a message...")
    res.status(200).send()
}

function getMessages(req, res) {
    res.send('<h1> Hello Alberto Balsam, how was your day?</h1>')
}

// Express makes our life easier by sending the content type based on extension file.
function getPicture(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpeg'))
}

function getMessageTemplate(req, res) {
    res.render('messages', {
        title: 'A message to all my friends',
        friend: 'Elon Musk'
    });
}

module.exports = {
    postMsg, getMessages, getPicture, getMessageTemplate
};