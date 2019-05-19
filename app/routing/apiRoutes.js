// require friends.js
const friends = require(".data/friends/js");

module.exports = app => {

  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });
  

  // Create New friends - takes in JSON input
  app.post("/api/friends", (req, res) => {
    //if validated
  });
  
};


