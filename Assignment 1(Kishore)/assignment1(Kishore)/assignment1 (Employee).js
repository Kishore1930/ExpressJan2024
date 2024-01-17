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