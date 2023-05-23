// CommonJS Syntax
const express = require("express")

// Declaring controllers
const friendsCtrl = require("./controllers/friends.controller")
const messagesCtrl = require("./controllers/messages.controller")

const app = express();

const PORT = 3000;

// Declaring middlewares
// Catching request's middleware and time to response.
app.use((req, res, next) => {
    const start = Date.now();
    console.debug(`Incoming method: ${req.method} from ${req.url}`);
    // This will execute the next Middleware or if not, the next METHOD available given the url (stream of water effect)
    next();
    // Actions go here
    const delta = Date.now() - start;
    console.log(`Amount of time passed from starting Middleware to endpoint reach and response: ${delta} ms`);
});

// Parse body parameters to JSON.
app.use(express.json());

// Endpoints
app.get("/", (req, res) => {
    res.send("Hello world from express!")
})

app.get('/messages', messagesCtrl.getMessages)
app.post('/messages', messagesCtrl.postMsg)

app.get('/friends', friendsCtrl.fetchFriends)
app.post('/friends/create', friendsCtrl.createFriend)
app.get('/friends/:friendId', friendsCtrl.getFriend)



app.listen(PORT, () => {
    console.log(`Express app listening on port: ${PORT} ...`)
});
