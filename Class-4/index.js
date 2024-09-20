// const express = require("express");
// const jwt = require("jsonwebtoken");
// const jwtPassword = "123456";

// const app = express();

// app.use(express.json());

// const ALL_USERS = [
//   {
//     username: "harkirat@gmail.com",
//     password: "123",
//     name: "harkirat singh",
//   },
//   {
//     username: "raman@gmail.com",
//     password: "123321",
//     name: "Raman singh",
//   },
//   {
//     username: "priya@gmail.com",
//     password: "123321",
//     name: "Priya kumari",
//   },
// ];

// function userExists(username, password) {
//   // write logic to return true or false if this user exists
//   // in ALL_USERS array
//     //  for(let i = 0;i<ALL_USERS.length();i++){
//     //    if(ALL_USERS[i].username === username && ALL_USERS[i].password === password){
//     //      return true;
//     //    }else{
//     //      return false;
//     //    }
//     //  }

//     let userExist = false;

//     ALL_USERS.find((user) => {
//       if(user.username === username && user.password === password){
//         userExist = true;
//       }
//     })
//     return userExist;

// }

// app.post("/signin", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   var token = jwt.sign({ username: username }, jwtPassword);
//   return res.json({
//     token,
//   });
// });

// app.get("/users", function (req, res) {
//   const token = req.headers.authorization;
//   try {
//     const decoded = jwt.verify(token, jwtPassword);
//     const username = decoded.username;
//     // return a list of users other than this username
//     return res.json(ALL_USERS.filter((user) => user.username !== username));
//   } catch (err) {
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

// app.get('/',function(req,res){
//   res.send("Hello World");
// })

// app.listen(3000, function () {
//   console.log("Listening on port 3000");
// });




const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017");

const User = mongoose.model("User", {
  username: String,
  password: String,
  name: String,
});

app.post("/signup", async function (req, res) {
  const username = req.body.username; 
  const password = req.body.password;
  const name = req.body.name;
  const checkDB = await User.findOne({username});

  if(checkDB){
    return res.status(400).json({
      'msg ':"User already exists"
    })
  }

  const user = new User({
    // username:username,
    // password:password,
    // name:name,
    username,
    password,
    name
  });
  user.save();
  return res.json({
    "msg":"User created successfully"
  });
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
})
