const express = require('express');
const bodyParser = require("body-parser"); 
const stdRouter = require('./std-api-routes');
const { default: mongoose } = require('mongoose');

var app=express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api", stdRouter);



app.get("/", function(req,res)
{
    res.send("Welcome to Express JS API Application");
});


const database=mongoose.connection;


database.on('error',(err)=>console.log(err))
database.on('connected',()=>console.log('Database Connected'));


var server=app.listen(3007,function() {});
console.log("Server Started. URL:http://localhost:3007");
