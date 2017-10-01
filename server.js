var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 8080;

app.get('/', function(req, res){
    res.send("Hello World!");
});
app.listen(PORT, function(){
    console.log("I'm listening at http://localhost:" + PORT);
});