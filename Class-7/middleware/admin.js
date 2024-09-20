// Middleware for handling auth
const { Admin } = require("../models/model");
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  
  

    const username = req.header.username;

    const password = req.header.password;

    Admin.findOne({
      username: username,
      password: password,
    }).then((value) => {
      if (value) {
        next();
      } else {
        res.status(403).json({
          msg: "Admin not found",
        });
      }
    });
  }



module.exports = adminMiddleware;
