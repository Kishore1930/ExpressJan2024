
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