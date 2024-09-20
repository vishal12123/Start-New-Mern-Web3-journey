// const express = require("express");
// const zod = require("zod");
// const app = express();

// // const schema = zod.array(zod.number());
// // Describe the schema with the help of zod
// const schema  = zod.object({
//   email:zod.string(),
//   password:zod.string().min(8),
//   country:zod.literal("IN").or(zod.literal("USA")),
//   age:zod.number().min(18).max(99),
//   Kidneys:zod.array(zod.number()).min(1).max(5),
// })

// app.use(express.json());

// // function middleware(req, res, next) {
// //   fetch().then(){
// //     next()
// //   }
// // }

// app.post('/health-checkup', (req,res) =>{
//   const kidneys = req.body.kidneys;
//   // const kidneyLength = Kidneys.length;
//   const response = schema.safeParse();

//   if(!response.success){
//     res.status(400).send(response.error);
//   }else{
//     res.send(response);
//   }
  
// })

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// })

// // Global catches
// // app.use((err,req,res,next) => {
// //   res.status(500).send(err.message);
// // })


// app.listen(3000, () => {
//   console.log("Listening on port 3000");
// })


// const express = require("express");
// const zod = require("zod");
// const app = express();

// app.use(express.json());

// function validateInput(obj) {
//   const schema = zod.object({
//     email: zod.string().email(),
//     password: zod.string().min(8),
   
//   });
//   return schema.safeParse(obj);
// }

// app.post('/health-checkup', (req, res) => {
//   const response = validateInput(req.body);
//   if(!response.success){
//     res.status(400).json({
//       msg:"Invalid Input"
//     });
//   }else{
//     res.send(response);
//   }
  
// })



// app.listen(3000, () => {
//   console.log("Listening on port 3000");
// })




// Authentication 

const express = require("express");
const zod = require("zod");
const app = express();
app.use(express.json());






app.listen(3000, () => {
  console.log("Listening on port 3000");
})