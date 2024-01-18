

var express = require('express')

var app = express();     //create a Express application

app.use(express.static("public"));

app.set("view engine", "hbs");

app.get('/', function (req, res) {
    let dataObj = {};

    dataObj.userDetails = [
        { Name: "Alfreds Futterkiste", City: "Berlin", Country: "Germany" },
        { Name: "Ana Trujillo Emparedados y helados", City: "México D.F.", Country: "Mexico" },
        { Name: "Antonio Moreno Taquería", City: "México D.F.", Country: "Mexico" },
        { Name: "Around the Horn", City: "London", Country: "UK" },
        { Name: "B's Beverages", City: "London", Country: "UK" },
        { Name: "Berglunds snabbköp", City: "Luleå", Country: "Sweden" },
        { Name: "Blauer See Delikatessen", City: "Mannheim", Country: "Germany" }];

    res.render("home", dataObj);
});

var server = app.listen(3007, function () { });


