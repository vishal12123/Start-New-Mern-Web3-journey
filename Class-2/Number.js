function explainParseInt(){
  console.log(parseInt("10"));
  console.log(parseInt("10.5"));
  console.log(parseInt("10.55"));
  console.log(parseInt("10.55",2));
  console.log(parseInt("10.55",10));

  console.log(parseInt("10.55",16));

}

explainParseInt();

// Output 
// 10;
// 10;
// 10;
// 2;
// 10;
// 16;

function explainParseInt1(value){
  console.log("Original value : ",value);
  console.log("After parseInt : ",parseInt(value));
}

explainParseInt1("10");
explainParseInt1("43x");
explainParseInt1("sdd43x"); //  output NaN
explainParseInt1(23.5);

//Output
// Original value :  10
// After parseInt :  10
// Original value :  43x
// After parseInt :  43
// Original value :  23.5
// After parseInt :  23