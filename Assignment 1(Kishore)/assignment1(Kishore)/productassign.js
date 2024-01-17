
var express= require('express')

var app=express();

app.get('/',function(request,response)
{
    let id="2586708";
    let name="LG Printer";
    let price=2500;
    let quantity=3;
    let amount=7500;

    let str="<h1 align='center'> Product Detail";

    str += "<hr/>";

    str += `<table border="1" align='center'>
    <tr><th>Product Id</th><td>${id}</td></tr>
    <tr><th>Product Name</th><td>${name}</td></tr>
    <tr><th>Unit Price</th><td>${price}</td></tr>
    <tr><th>Quantity</th><td>${quantity}</td></tr>
    <tr><th>Total Amount</th><td>${amount}</td></tr>
  </table>
`;

    response.send(str)

});

var server=app.listen(3007,function(){});