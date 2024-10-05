// import { useState ,useContext} from 'react'

// import './App.css'
// import {countContext} from "./Context"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <countContext.Provider value={count}>
//       <Count setCount = {setCount} />
//       </countContext.Provider>
//     </>
//   );
// }

// function Count({setCount}){
//   return(
//     <div>
//       <CountRenderer />
//       <IncDec setCount = {setCount} />
//     </div>
//   )
// }

// function CountRenderer(){
//   const count = useContext(countContext);

//   return( <div>{count}</div>);
// }

// function IncDec({setCount}){
//   const count = useContext(countContext);

//   return(
//     <>
//     <button onClick = {()=>{
//       setCount(count+1)
//     }}> Increase</button>

//     <button onClick={()=>{
//       setCount(count-1);
//     }}>Decrease</button>
//     </>
//   )
// }

// export default App

// import React from 'react'
// import { useState } from 'react'

//  const App = () => {

//   const [principle, setPrinciple] = useState(0);
//   const [rate, setRate] = useState(0);
//   const [time, setTime] = useState(0);
//   const [simpleIntrest, setSimpleIntrest] = useState(0);

//   function  Intrest(){
//     const si = (principle*rate*time)/100;
//     setSimpleIntrest(si);
//   }

//    return (
//      <div>
//        <label>
//        Principle:
//          <input type="number" placeholder="Enter your Principle" value={principle} onChange={(e)=>setPrinciple(e.target.value)}></input>
//        </label>
//        <label>
//        Rate:
//          <input type="number" placeholder="Enter your Rate" value={rate} onChange={(e)=>setRate(e.target.value)}></input>
//        </label>
//        <label>
//        Time(year):
//          <input type="number" placeholder="Enter your Time"
//          value={time} onChange={(e)=>setTime(e.target.value)}></input>
//        </label>

//        <button onClick={Intrest}>Simple Intrest</button>

//        <div>Simple Intreat :{simpleIntrest}</div>
//      </div>

//    );
//  }

//  export default App


// Caluclator

// import React from "react";
// import { useState } from "react";
// const App = () => {
//   const [caluclate, setCalculate] = useState();
//   const [num1, setNum1] = useState();
//   const [num2, setNum2] = useState();
//   const [operation,setOperation] = useState("+");

//   function Calculater(){
//      let result;

//      switch (operation) {
//        case "+":
//          result = Number(num1) + Number(num2);
//          break;
//        case "-":
//          result = Number(num1) - Number(num2);
//          break;
//        case "x":
//          result = Number(num1) * Number(num2);
//          break;
//        case "%":
//          result = (Number(num1) * Number(num2)) / 100;
//          break;
//        case "/":
//          result =
//            Number(num2) !== 0
//              ? Number(num1) / Number(num2)
//              : "Cannot divide by zero";
//          break;
//        default:
//          result = 0;
//      }

//      setCalculate(result);
//   }

//   return (
//     <div>
//       <label>
        
//         <input
//           type="number"
//           value={num1}
//           placeholder="Enter Your First Number"
//           onChange={(e) => {
//             setNum1(e.target.value);
//           }}
//         ></input>
//       </label>
//       <label>  
//         <select value={operation} onChange={(e) => setOperation(e.target.value)}>
//           <option value="+">+</option>
//           <option value="-">-</option>
//           <option value="x">x</option>
//           <option value="%">%</option>
//           <option value="/">/</option>
//         </select>
//       </label> 
//       <label>
       
//         <input
//           type="number"
//           value={num2}
//           placeholder="Enter Your Second Number"
//           onChange={(e) => setNum2(e.target.value)}
//         ></input>
//       </label>
//       <label>
//         <button onClick={Calculater}>Calculate</button>
//       </label>

//       <div>{caluclate} </div>
//     </div>
//   );
// };

// export default App;




// Recoil  

import React from 'react'
import { countAtom ,charCountState } from './store/atoms/count'


import { RecoilRoot, useRecoilState ,useRecoilValue} from 'recoil'

const App = () => {
  
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

function Count(){
  return <div>
    <CountRenderer />
    <Buttons />
    <Even/>
  </div>
}

function CountRenderer (){
  const count = useRecoilValue(countAtom);
  return(
    <div>
      <b>{count}</b>
    </div>
  )
}

function Buttons(){
  const [count, setCount] = useRecoilState(countAtom);


  return(<>
    <button onClick={()=>{
      setCount(count+1);
    }}>Increase</button>
    <button onClick={()=>{
      setCount(count-1);
    }}>Decrease</button>
  </>)

}

function Even(){
 const  count= useRecoilValue(charCountState);
 return(
  <div>
    {count}
  </div>
 )
}

export default App