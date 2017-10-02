var path = require("path");
//console.log(path);

module.exports = function(app){
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
        console.log("linked to questions!");
    });
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};

