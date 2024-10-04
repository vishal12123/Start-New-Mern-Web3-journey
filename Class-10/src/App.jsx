// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import CardWrapper from './components/CardWrapper'


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <CardWrapper  innerComponent={<TextComponent/>}/>
//     </>
//   )
// }

// export default App


// function TextComponent() {
//   return (
//     <div>
//       <h1>Text Component</h1>
//     </div>
//   )
// }


// above code is same as below code but it is more effective than above code

import React from 'react'



const App = () => {
  return (
    <div><CardWrapper>Hi There</CardWrapper></div>
  )
}


function CardWrapper({ children }) {
  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>{children}</div>
  );
}

export default App


