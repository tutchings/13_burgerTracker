// node requirements
var express = require("express");
var exphbs = require("express-handlebars");

// set port
var PORT = process.env.PORT || 8000;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import routes from burgerController.js
var routes = require("./controllers/burgerController.js");

app.use(routes);

// start server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
