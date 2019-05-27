// require friends.js
const friends = require("../data/friends.js");

module.exports = app => {
  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });


  // Create New friends - takes in JSON input
  app.post("/api/friends", (req, res) => {

    let absDiff = 0;

    const matchMade = 0

    const matchScore = () => {
      for (let i = 0; i < friends.scores; i++) {
        absDiff = 0;
        for (let j = 0; j < newUser.length; j++) {
          absDiff += Math.abs(friends[i].score[i] - newUser.score[j])

        }
      }
    };

    matchScore();


  });
};