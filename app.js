var http = require('http');
var url = 'http://api.openweathermap.org/data/2.5/weather?q=New+Delhi,IN&appid=d572465715035d423880c2c70de3b469&units=metric';
var server = http.createServer(function(request,response){
    var request = require('request');
    request(url,function(err,res, body){
        var data = JSON.parse(body);
        response.write("<html><body><div id='container'>");
        response.write("<h1>"+ 'CITY NAME : ' + data['name'] + '<br>' + "</h1>");
        response.write("<h2>"+ 'TEMPERATURE : ' + data.main['temp'] + '<br>' + "</h2>");
        response.write("<h2>"+ 'SUNSET TIME : ' + new Date(data.sys['sunset']*1000)+ "</h2>");
        response.write("</div></body></html>");
        response.end();
        
    });
    
}).listen(8081);