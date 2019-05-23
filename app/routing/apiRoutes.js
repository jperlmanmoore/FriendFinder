// require friends.js
const friends = require("../data/friends.js");

module.exports = app => {
  app.get("/api/friends", (req, res) => {
    res.json(friendsArray);
  });
  

  // Create New friends - takes in JSON input
  app.post("/api/friends", (req, res) => {
    console.log("a");

    const match = {
      name: "",
      img: "",
      diff: 10,
    };

    const absDiff = 0;

    // for loop

    // Math.abs(a-b)


    
    friends.push(user)
  });
  
};


