var express = require('express')

var app = express();

var bodyParser = require("body-parser");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.get('/', function (req, res) {
    res.render("home", {})

});

app.get('/product', function (req, res) {
    res.render("product",  { result:'' })
    
});

app.post('/product', function (req, res) {

    console.log("Ok fine")

    // let pdtname = req.body.t1;
    // var price = req.body.t2;
    // var quantity = req.body.t3;
    // let total= price * quantity;
    // res.send('product',{total});  // Redirect from one route to another route
    
        const num1= req.body.t2;
        const num2= req.body.t3;
        const result = num1 * num2;
        res.render('product', { result });
        console.log(result);
      });

var server = app.listen(3007, function () { });