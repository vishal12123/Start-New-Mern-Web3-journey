const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../models/model");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username= req.body.username;
  const password = req.body.password;

  // Validate the username and password
  Admin.create({
    username: username,
    password: password
  })
  .then((value) => {
    res.json({ msg: "Admin created successfully" });
  })
  .catch((error) => {
    res.status(500).json({ msg: "Error creating admin" });
  });
});

  // Save the admin to the database



router.post("/courses", adminMiddleware, async(req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  // Validate the title, description, imageLink, and price
  const newCourse = await Course.create({
    title: title,
    description: description,
    imageLink: imageLink,
    price: price
  })
  res.json({ msg: "Course created successfully",courseId:newCourse._id });

  
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  // Course.find({}).then(function(response){
  //   res.json({
  //     courses:response
  //   })
  // })

  // 2nd way to do this
  const allCourses = await Course.find({});
  res.json({ courses: allCourses });

});

module.exports = router;
