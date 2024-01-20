const express = require("express");
const bodyParser = require("body-parser"); 
const productRouter = require('./showproducts-routes'); 
const categoryRouter = require('./category-product.js'); 


// Creates an express application
var app = express();   

app.use(bodyParser.urlencoded({extended : false})); 
// app.use(userRouter);
app.use("/user", productRouter);
app.use("/user", categoryRouter);
 
// Confgiure the middleware
app.set("view engine", "ejs");

app.get("/", function (req, res) {  
    console.log("Welcome is working") 
    res.render("home", {});
});


var server = app.listen(3005, function () { });
console.log("Server is running at the URL: http://localhost:3005/");