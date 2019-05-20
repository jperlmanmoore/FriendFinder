// require friends.js
const friends = require("../data/friends.js");

module.exports = app => {

  app.get("/api/friends", (req, res) => {
    res.json(friendsArray);
  });
  

  // Create New friends - takes in JSON input
  app.post("/api/friends", (req, res) => {
    console.log("Yay!");
    res.json(true);
  });
  
};


