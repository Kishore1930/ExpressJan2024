
//4th question
//hardcoded


var express= require('express')

var app=express();

 app.get('/',function(request,response)
 {

    let str="<h1 align='center'>Employee Details</h1> </br>";
    str += "Employee Id :  2586708 </br>";
    str +="Employee Name  :  kishore </br>";
    str +="Employee Job : trainee </br>";
    str +="Employee Deptno :  7 </br>";
    str +="Employee EmailId : kishore@gmail.com"

    response.send(str);

 });
 var server=app.listen(3007,function(){});




//5th question
//employee

var express= require('express')

var app=express();

app.get('/',function(request,response)
{
    let id="2586708";
    let name="Kishore";
    let job="Manager";
    let depno=10;
    let email="kishore@gmail.com";

    let str="<h1 align='center'> Welcome to Express JS</h1>";

    str += "<hr/>";

    str += `<div> 
    Employee id: ${id} </br>
    Employee name: ${name} </br>
    Employee job: ${job} </br> 
    Employee depno: ${depno} </br> 
    Employee email: ${email} </br>
</div>`;

    response.send(str)

});

var server=app.listen(3007,function(){});



//6th question
//product


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