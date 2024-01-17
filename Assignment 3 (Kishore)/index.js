// // var express=require('express')

// // var app=express();     //create a Express application

// // app.get('/', function(request,response)

// // {

// //     response.send("<h1 align='center' style='color:red;'> Welcome to Web Application created by using EXPRESS JS </h1><hr>")

// // });

// // var server=app.listen(3007,function(){});

// // console.log('Web Application is Working.....Browse the url : http://localhost:3007/')


var express=require('express')

var app=express();     //create a Express application

app.use(express.static("public"));


app.get('/', function(request,response)
{
    response.sendFile(__dirname+"/views/home.html");
});

app.get('/login', function(request,response)
{
    response.sendFile(__dirname+"/views/login.html");
});

var server=app.listen(3007,function(){});