// console.log("Hello World");
// console.log(a)


const  user ={
  firstName:"Vishal",
  gender:"male"
}

//Access of an Object with 2 ways

console.log(user['firstName']);  // Output :Vishal

console.log(user.firstName);  // Output :Vishal


// it is an array which take object and value in it

const allUser = [{
  firstName:"Vishal",
  gender:"male"
},{
  firstName:"Harkirat",
  gender:"male"
},
{
  firstName:"Priya",
  gender:"female"
}
];

console.log(allUser[0]["firstName"]); // output :Vishal

for(let i=0;i<allUser.length;i++){
  if(allUser[i]["gender"]=="male"){
    console.log(allUser[i]["firstName"]);
  }else{
    console.log("No male  exist is this area");
  }   
// Output will be 1) Vishal
// 2)Harkirat
// 3)No male  exist is this area
}


