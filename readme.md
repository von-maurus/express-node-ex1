# Simple Express server application with classic request types and event handlers. 

### Install nodemon for develop mode and hot reload features for improving development. 
Like `npm i nodemon --save-dev`
Run `npm run watch` for nodemon to keep track of your changes.

### Stuff learned: 

 - Middleware build. Building middlewares and see how they work.
 - GET/POST request's implemented
 - MVC design pattern: User makes actions to the "View", the "Controller" manipulates the data on its own Business Logic and the "Model" updates the data to the "View".
 - Reviewing RESTful concepts: 
    - Using existing standards (http, json, url)
    - Building best practices restful api's and restful compliant system's.
    - How to manage request's
    - Making sense when building an application.
    - Using classic methods in a proper manner and logic way. GET-POST-PUT-DELETE-PATCH
    - Using client-server architecture
    - Stateless and cacheables (for rapid use of in memory request). Saving results and increase performance
    - We don't want user info or history of request's on a RESTful API. 
 - CRUD operations.
 - (REST API DOCUMENTATION)[https://www.restapitutorial.com/lessons/httpmethods.html]
 - Sending files on Express
 - Serving Web Pages.
 - Using Akamai or Amazon CloudFronts, specialized platforms that delivers static web pages with all security done by them.
 - Maybe using static web pages from the server is for precise purposes like: doing a survey on some users by region, displaying error messages, displaying static info and consuming specific content that doesn't change so much.
 - Using template engines you can serve dynamic web pages on Express easily, you can bind variables to a static view just like Vue or Angular. Like Handlebars.js (hbs),
 template engines for Express.js can be found (HERE)[https://expressjs.com/en/resources/template-engines.html]
- For a more detail explanation on Express Settings go to (Express API Reference -> Application)[https://expressjs.com/es/4x/api.html#app]. "view engine" property is for the default template engine use by Express. "views" is the directory where those views are serve.
- Build layouts and learn about separations concerns. 
