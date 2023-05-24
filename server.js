// CommonJS Syntax
const express = require("express")
const app = express();
const path = require('path')

// Declaring routers
const friendsRouter = require("./routers/friends.router")
const messagesRouter = require("./routers/messages.router")

const PORT = 3000;

// Declaring view engine for html, in this case we use handlebars, the root library inspiration for vue, angular and all of those frmaworks
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))


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

// Here the path is relative. Relative to the root node app. So we better pass de "__dirname" variable that has the 
// enviroment url where your node app is being serve, an absolute path 
app.use('/site', express.static(path.join(__dirname, 'public')));

// Parse body parameters to JSON.
app.use(express.json());

// Using routers
app.use("/friends", friendsRouter)

app.use("/messages", messagesRouter)

app.use("/", (req, res) => {
    res.render('static-index.hbs', {
        title: 'Static Web Page with HBS',
        caption: 'Using a Template Engine, HBS, to build dynamic web pages'
    });
});



app.listen(PORT, () => {
    console.log(`Express app listening on port: ${PORT} ...`)
});
