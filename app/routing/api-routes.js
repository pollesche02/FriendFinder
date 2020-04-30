var friends = require("../data/friends");

// ROUTING


module.exports = function(app) {
  // API GET Requests

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests

  app.post("/api/friends", function(req, res) {
      var totalDifference = 0;

// find the best match  / compare the survey with every survey in the friends array

 var bestMatch = {
     name: " ",
     photo: " ",
     friendDifference: 1000
 };

 var userData = req.body;
 var userName = userData.name;
 var userScores = userData.scores;
 console.log (req.body);
 var b = userScores.map(function(item) {
     return parseInt(item, 10);
 });

 userData = {
     name: req.body.name,
     photo: req.body.photo,
     score: b
 };
 console.log("Name: " + userName);

 var sum = b.reduce((a, b) => a + b, 0);
 console.log("*************************");

 for (var i = 0; i < friends.length; i++) {
     console.log(friends[i].name);
     totalDifference = 0;
     console.log("Total Difference " + totalDifference);
      console.log("Best match friend difference " + bestMatch.friendDifference);

      var bfriendScore = friends[i].scores.reduce((a, b) => a + b, 0);
      totalDifference += Math.abs(sum - bfriendScore);
      console.log("**********************" + totalDifference);

  if (totalDifference <= bestMatch.friendDifference) {
      bestMatch.name = friends[i].name;
      bestMatch.photo = friends[i].photo;
      bestMatch.friendDifference = totalDifference;
  }
  console.log(totalDifference + "Total Difference");
 }
  console.log(bestMatch);


  friends.push(userData);
  console.log("New User Added");
  console.log(userData);
  res.json(bestMatch);
 
 
  });


};



// CRUD   create read update delete

// methods POST GET PUT DELETE