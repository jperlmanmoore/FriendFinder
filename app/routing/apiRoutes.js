// require friends.js
const friends = require("../data/friends.js");

module.exports = app => {
  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });


  // Create New friends - takes in JSON input
  app.post("/api/friends", (req, res) => {

    const diff = 0;

    const newUser = req.body;
    const newUserScore = newUser.scores;
    
    const friendMatch = [{
      name: "",
      img: "",
      scores: 50
    }];
  
    const matchScore = () => {
      diff = 0;
      for (let i = 0; i < friends.scores; i++) {
        for (let j = 0; j < newUserScore.length; j++) {
          diff += Math.abs(friends[i].score[j] - newUserScore[j]);
          
          if (diff <= friendMatch.scores) {
            friendMatch.name = friends[i].name;
            friendMatch.photo = friends[i].img;
            friendMatch.diff = diff;
          }
        }
      }
    };

    matchScore();
    // friends.push(newFriend);
    res.json(friendMatch);

  });
};