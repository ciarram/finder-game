var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = 3000;

app.get('/', function(res, req){

})
app.listen(PORT, function(){
    console.log(PORT, "I'm listening!");
})