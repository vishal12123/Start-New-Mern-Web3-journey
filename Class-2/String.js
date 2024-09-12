function  getLength(str){
  console.log("Original String : ",str);
  console.log("Length of String : ",str.length);
}


// getLength("Vishal")

function findIndexOf(str,letter){
  console.log("Original String : ",str);
  console.log("Index of letter : ",str.indexOf(letter));
}


// findIndexOf("Vishal","a")


function findLastIndexOf(str,letter){
  console.log("Original String : ",str);
  console.log("Last Index of letter : ",str.lastIndexOf(letter));
} 


// findLastIndexOf("Vishaaaaaal","a")


function getSlice(str,start,end){
  console.log("Original String : ",str);
  console.log("Sliced String : ",str.slice(start,end));
}


getSlice("Vishal Word",1,4)  //output Sliced String :  ish

getSlice("Vishal Word",0,7)  //output Sliced String :  Vishal

getSlice("Vishal Word",0,8)  //output Sliced String :  Vishal W


const value1 = "Vishal Vishwakarma";

console.log(value.slice(2,6)) // Output :shal               |-> index of the string

console.log(value.substr(2,6)) // Output :shal V             |-> length of the string



const str = 'hello world';
console.log(str.replace('world','Vishal')); // Output : hello Vishal
const st = "hello world";
console.log(str.replace("wo", "Vishal")); // Output : hello Vishalrld




const value  = 'Hi my name is vishal';

const value2 = "Hi, my ,name ,is vishal";
const value3 = "Hi, my, name, is, vishal";

const words = (value.split(" "))

console.log(words);  // convert string into array  and the output is [ 'Hi', 'my', 'name', 'is', 'vishal' ]

const words1 = value.split(", ");
console.log(words1) //output :[ 'Hi my name is vishal' ]

const words2 = value2.split(", ");
console.log(words2);  //output :[ 'Hi', 'my ,name ,is vishal' ]

const words3 = value3.split(", ");
console.log(words3);  //output :[ 'Hi', 'my', 'name', 'is', 'vishal' ]



const value5 = "      Vishal Vishwakarma     ";

const value6 = "      Vishal            Vishwakarma     ";

console.log(value5.trim());  // output :Vishal Vishwakarma

console.log(value6.trim());  // output :Vishal            Vishwakarma

console.log(value5.toUpperCase());

console.log(value6.toLowerCase());