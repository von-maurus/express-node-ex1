// CommonJS Syntax
const express = require("express")


// Declaring routers
const friendsRouter = require("./routers/friends.router")
const messagesRouter = require("./routers/messages.router")


// Declaring controllers

const app = express();

const PORT = 3000;

// Declaring middlewares
// Catching request's middleware and time to response.
app.use((req, res, next) => {
    const start = Date.now();
    console.debug(`Incoming method: ${req.method} from ${req.baseUrl} ${req.url}`);
    // This will execute the next Middleware or if not, the next METHOD available given the url (stream of water effect)
    next();
    // Actions go here
    const delta = Date.now() - start;
    console.log(`Amount of time passed from starting Middleware to endpoint reach and response: ${delta} ms`);
});

// Parse body parameters to JSON.
app.use(express.json());

// Using routers
app.use("/friends", friendsRouter)

app.use("/messages", messagesRouter)

// Endpoints
app.get("/", (req, res) => {
    res.send("Hello world from express!")
})

app.listen(PORT, () => {
    console.log(`Express app listening on port: ${PORT} ...`)
});
