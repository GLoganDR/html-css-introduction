'use strict';
//  the order is important!  //
var express = require('express'); //function import//
var app = express();  //calling function express. Allows node to talk to a browser //
//Receives a verb and a URL and uses a routing system to get info//
var morgan = require('morgan'); //  a developer logging device  //

app.set('views', __dirname + '/views'); //__dirname means "directory ____ file is in" //
app.set('view engine', 'ejs');  //  writing all html files in ejs //

app.use(morgan('dev'));
app.use(express.static(__dirname + '/static'));

app.get('/', function(req,res){ // Stands for Request and Response. //
  //  Node gives the browser response to the browser. Request is node requesting FROM the browser //
  res.render('index');  //  name of file to render. Takes the ejs file and turns it into html and sends it to the browser  //
}); //  Sending "Get" request to SOME path. so use '/'  //

app.get('/dogs', function(req,res){
  res.render('dogs');
});

app.get('/cats', function(req,res){
  res.render('cats');
});

app.get('/ninjas', function(req,res){
  res.render('ninjas');
});

app.get('/pirates', function(req,res){
  res.render('pirates');
});

app.listen(3002, function(){
  console.log('Express.js is listening...');
}); //this is telling it to wait for the response.//
//  3000 is a port. A PORT is like an extension number that directs to a certain office (in this case a certain extension in a machine) //
//  Port 80 is webservers and port 3000 is the normal for most devs //

// Simulate a browser request by using "curl" from the command line. curl 127.0.0.1:3000 //



