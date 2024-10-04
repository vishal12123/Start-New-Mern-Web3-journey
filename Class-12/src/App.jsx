// import React,{ Suspense, useState } from 'react'

// import './App.css'
// import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

// // import About from './pages/About'
// const Home  = React.lazy(()=> import ("./pages/Home"));
// const About  = React.lazy(()=> import ("./pages/About"));

// function App() {

//   // Same explation as below
// //  const navigate = useNavigate();

// //  const Homes = () => {
// //    navigate("/");
// //  };

// //  const Abouts = () => {
// //    navigate("/about");
// //  };

 
//   return (
//     <>
//       <div>Hi This is a Vishal</div>
//       {/* // useNavigate hook not get access outside the BrowserRouter if we access this hook then it will write a code in BrowserRouter components like below we make a new component and placed it in BrowserRouter and useNavigate hook will not work */}

//       {/* <button onClick={Homes}>Home </button>
//       <button onClick={Abouts}>About</button> */}

//       <BrowserRouter>
//         <Appbar />
//         <Routes>
//           {/* <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} /> */}

//           <Route
//             path="/"
//             element={
//               <Suspense fallback={"Loading..."}>
//                 <Home />
//               </Suspense>
//             }
//           />
//           <Route
//             path="/about"
//             element={
//               <Suspense fallback={"Loading..."}>
//                 <About />
//               </Suspense>
//             }
//           />
//         </Routes>
//       </BrowserRouter> 
//     </>
//   );
// }


// function Appbar(){

//   const navigate = useNavigate();

//   const Homes = () => {
//   navigate("/");
//   }

//   const Abouts = () => {
//     navigate( "/about");
//   }
//   return (
//     <div>
//       <button onClick={Homes}>Home </button>
//       <button onClick={Abouts}>About</button>
//     </div>
//   )
// }

// export default App



// // import React, { Suspense } from "react"; // Import React to use React.lazy
// // import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

// // import "./App.css";
// // import Home from "./pages/Home";
// // const About = React.lazy(() => import("./pages/About")); // Lazy load About

// // function App() {
// //   return (
// //     <>
// //             <div>Hi, This is Vishal</div>     {" "}
// //       <BrowserRouter>
// //                 <Appbar /> {/* Moved Appbar inside BrowserRouter */}       {" "}
// //         <Routes>
// //                    {" "}
// //            <Route
// //             path="/"
// //             element={
// //               <Suspense fallback={"Loading..."}>
// //                 <Home />
// //               </Suspense>
// //             }
// //           />
// //           <Route
// //             path="/about"
// //             element={
// //               <Suspense fallback={"Loading..."}>
// //                 <About />
// //               </Suspense>
// //             }/>
// //                  {" "}
// //         </Routes>
// //              {" "}
// //       </BrowserRouter>
// //          {" "}
// //     </>
// //   );
// // }

// // function Appbar() {
// //   const navigate = useNavigate(); // useNavigate can now be used here

// //   const Homes = () => {
// //     navigate("/");
// //   };

// //   const Abouts = () => {
// //     navigate("/about");
// //   };

// //   return (
// //     <div>
// //             <button onClick={Homes}>Home</button>     {" "}
// //       <button onClick={Abouts}>About</button>   {" "}
// //     </div>
// //   );
// // }

// // export default App;



import React, { useState } from 'react'
import { set } from 'zod';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Count count={count}/>
      <Buttons count = {count} setCount = {setCount} />
    </div>
  )
}

function Count({count}){
    return <>
      {count}
    </>
}

function Buttons({count,setCount}){
  return (
    <>
      <button onClick={() => setCount(count+1)}>Increase</button>
      <button onClick={() => (setCount (count - 1))}>Decrease</button>
    </>
  );
}

export default App