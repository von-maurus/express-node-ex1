const express = require("express")
const app = express();

const PORT = 3000;

const friends = [
    {
        id: 1,
        name: "Sir Isaac Newton"
    },
    {
        id: 2,
        name: "Albert Einstein"
    }
]
app.get("/", (req, res) => {
    res.send("Hello world from express!")
})

app.get("/cheers", (req, res) => {
    res.send('<h1> Hello Alberto Balsam, how was your day?</h1>')
})

app.get("/friends", (req, res) => {
    res.json(friends);
})

app.get("/friends/:friendId", (req, res) => {
    const fId = req.params.friendId;
    console.log(`Friend ID: ${fId}`)
    const friend = friends.find(e => e.id == fId);
    if (friend) {
        res.status(200).json({ data: friend, sucess: true })
    } else {
        console.log(`Friend not found.`)
        res.status(404).json({ message: "FRIEND_NOT_FOUND", sucess: false })
    }
})

app.listen(PORT, () => {
    console.log(`Express listening on port: ${PORT} ...`)
});
