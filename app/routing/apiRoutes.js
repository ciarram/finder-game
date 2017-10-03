var possibleCharacter = require("../data/friends");
var express = require('express');
var app = express();

console.log(possibleCharacter)


module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(possibleCharacter);
        console.log("I'm in get");
    })
    app.post("/api/friends", function(req, res){
        possibleCharacter.push(req.body);
        console.log(possibleCharacter);
        console.log("i'm in post");
        console.log(req.body);
    });
};

//module.exports = apiRoutes;