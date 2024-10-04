// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <Summary name="vishal vishwakarma" age ="22" children = "Helllo Chela" />
//       <Sum num1="10" num2="20"/>
//     </div>
//   )
// }


// function Summary({name, age,children}) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h2>{age}</h2>
//       <p>{children}</p>
//     </div>
//   )
// }

// function Sum(props) {
//   return (
//     <div>
//       <h1>{props.num1}</h1>
//       <h2>{props.num2}</h2>
//       <p>{props.num1+props.num2}</p>
//     </div>
//   )
// }

// export default App



import { useState } from "react"

function App() {
  

  return (
    <div>
      <HeaderWithButton />
      <Header title={firstTitle} />
      <Header title="My name is raman" />
    </div>
  )
}

function HeaderWithButton(){
const [firstTitle, setFirstTitle] = useState("my name is vishal");

function changeTitle() {
  setFirstTitle("My name is " + Math.random());
}

  return <div>
    <button onClick={changeTitle}>Click me to change the title</button>
    <Header title={firstTitle} />
  </div>
}

function Header({title}) {
  return <div>
    {title}
  </div>
}

export default App

