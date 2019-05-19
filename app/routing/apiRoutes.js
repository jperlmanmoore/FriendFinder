// require friends.js
const friends = require("..data/friends/js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });
  

  // Create New friends - takes in JSON input
  app.post("/api/friends", function(req, res) {
    //if validated
    


  });

  
}


