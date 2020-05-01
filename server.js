var express = require ("express");
var bodyParser=require("body-parser");
var path = require("path");
var app = express();
var port = 8080


//start my code here for the bodyParser here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd.api+json"}));


// now I need to code my routes for all my html pages
app.use(express.static("./app/public"));

require("./app/routing/api-routes.js")(app);
require("./app/routing/html-routes.js")(app);



app.listen(port, function() {
    console.log("App is listening on port: http://localhost:" + port);
});


