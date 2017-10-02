var possibleCharacter = require("../data/friends");
var express = require('express');
var app = express();

console.log(possibleCharacter)
//console.log(main);

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(possibleCharacter);
    })
};

app.post("/api/friends", function(req, res){
    possibleCharacter.push(user.body);
})

//module.exports = apiRoutes;