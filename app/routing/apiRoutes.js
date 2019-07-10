// require friends.js
const friends = require("../data/friends.js");

module.exports = app => {
  app.get("/api/friends", (req, res) => {
    res.json(friends);
  });


  // Create New friends - takes in JSON input
  app.post("/api/friends", (req, res) => {

    let diff = 0;

    console.log(req.body);
    const newUser = req.body;
    const newUserScore = newUser.scores;
    
    const friendMatch = {
      name: "",
      img: "",
      scores: 50
    };
    
    let currBestMatch = 50;

    // console.log("starting search");
      for (let i = 0; i < friends.length; i++) {
        diff = 0;
        console.log(friends[i].name);
        console.log(JSON.stringify(newUser));
        for (let j = 0; j < newUser.scores.length; j++) {
          console.log(newUserScore[i] + "" + friends[i].scores[j]);
          diff += Math.abs(parseInt(newUserScore[j]) - parseInt(friends[i].scores[j]));
          };
          console.log(diff);
          if (diff <= friendMatch.scores && diff <= currBestMatch) {
            friendMatch.name = friends[i].name;
            friendMatch.img = friends[i].img;
            friendMatch.diff = diff;
            console.log(`Match found ${friendMatch.img} ${friendMatch.name} ${friendMatch.diff}`);
            currBestMatch = diff;
        }
      };

    friends.push(newUser);
    
    res.json(friendMatch);

  });
};