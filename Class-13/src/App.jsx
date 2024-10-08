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

// import React from 'react'
// import { countAtom ,charCountState } from './store/atoms/count'

// import { RecoilRoot, useRecoilState ,useRecoilValue} from 'recoil'

// const App = () => {

//   return (
//     <div>
//       <RecoilRoot>
//         <Count />
//       </RecoilRoot>
//     </div>
//   );
// }

// function Count(){
//   return <div>
//     <CountRenderer />
//     <Buttons />
//     <Even/>
//   </div>
// }

// function CountRenderer (){
//   const count = useRecoilValue(countAtom);
//   return(
//     <div>
//       <b>{count}</b>
//     </div>
//   )
// }

// function Buttons(){
//   const [count, setCount] = useRecoilState(countAtom);

//   return(<>
//     <button onClick={()=>{
//       setCount(count+1);
//     }}>Increase</button>
//     <button onClick={()=>{
//       setCount(count-1);
//     }}>Decrease</button>
//   </>)

// }

// function Even(){
//  const  count= useRecoilValue(charCountState);
//  return(
//   <div>
//     {count}
//   </div>
//  )
// }

// export default App

/// TDOD

// import React from "react";
// import { descriptionTodo, workName } from "./store/atoms/count";

// const App = () => {
//   return (
//     <div>
//       <Todo />
//     </div>
//   );
// };

// function Todo() {
//   return (
//     <>
//       <InputBox />
//       {/* <Todos /> */}
//     </>
//   );
// }

// function InputBox() {
//   const [text1, setText1] = useRecoilValue(workName);
//   const [text2, setText2] = useRecoilValue(descriptionTodo);

//   function handleChange() {
//     return (
//       <>
//         {text1} <br></br>
//         {text2}
//       </>
//     );
//   }

//   return (
//     <>
//       <input
//         type="text"
//         onChange={(e) => {
//           setText1(e.target.value);
//         }}
//         value={text1}
//         placeholder="Enter your work"
//       ></input>
//       <input
//         type="text"
//         onChange={(e) => {
//           setText2(e.target.value);
//         }}
//         value={text2}
//         placeholder="Enter your Description"
//       ></input>

//       <button onClick={handleChange}>Add Todo</button>

//       <div>
//         <h4>Current Todo:</h4>
//         {handleChange()}
//       </div>
//     </>
//   );
// }

// export default App;

// import React from "react";
// import { RecoilRoot, useRecoilState } from "recoil";
// import { descriptionTodo, workName } from "./store/atoms/count"; // Assuming these are atoms in your Recoil state

// const App = () => {
//   return (
//     <RecoilRoot>
//       <Todo />
//     </RecoilRoot>
//   );
// };

// function Todo() {
//   return (
//     <>
//       <InputBox />
//       {/* <Todos /> */}
//     </>
//   );
// }

// function InputBox() {
//   const [text1, setText1] = useRecoilState(workName); // Changed to useRecoilState to both read and set state
//   const [text2, setText2] = useRecoilState(descriptionTodo); // Changed to useRecoilState to both read and set state

//   function handleChange() {
//     return (
//       <>
//         {text1} <br />
//         {text2}
//       </>
//     );
//   }

//   return (
//     <>
//       <input
//         type="text"
//         onChange={(e) => {
//           setText1(e.target.value); // This updates the workName atom state
//         }}
//         value={text1} // Show the current value of text1 in the input
//         placeholder="Enter your work"
//       />
//       <input
//         type="text"
//         onChange={(e) => {
//           setText2(e.target.value); // This updates the descriptionTodo atom state
//         }}
//         value={text2} // Show the current value of text2 in the input
//         placeholder="Enter your Description"
//       />
//       <button onClick={handleChange}>Add Todo</button>

//       {/* Display the added todos */}
//       <div>
//         <h4>Current Todo:</h4>
//         {handleChange()}
//       </div>
//     </>
//   );
// }

// export default App;

// App.js
import React, { useState } from "react";
import { RecoilRoot, useRecoilState } from "recoil";
import { todoListState } from "./store/atoms/count";

const App = () => {
  return (
    <div>
      <h1>To-Do List (CRUD with Recoil)</h1>
      <RecoilRoot>
        <TodoList />
      </RecoilRoot>
    </div>
  );
};

function TodoList() {
  const [todos, setTodos] = useRecoilState(todoListState); // Manage the list of todos
  const [work, setWork] = useState(""); // Track work input
  const [description, setDescription] = useState(""); // Track description input

  // Create a new todo
  const addTodo = () => {
    if (work && description) {
      const newTodo = { id: Date.now(), work, description };
      setTodos([...todos, newTodo]); // Add new todo to the list
      setWork(""); // Clear input fields
      setDescription("");
    }
  };

  // Update an existing todo
  const updateTodo = (id, newWork, newDescription) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? { ...todo, work: newWork, description: newDescription }
        : todo
    );
    setTodos(updatedTodos);
  };

  // Delete a todo
  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div>
      {/* Input fields to create a new todo */}
      <input
        type="text"
        placeholder="Work"
        value={work}
        onChange={(e) => setWork(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      {/* Display the list of todos */}
      <div>
        <h2>Your Todos</h2>
        {todos.length === 0 ? (
          <p>No todos available. Add some!</p>
        ) : (
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <EditableTodo
                  todo={todo}
                  onUpdate={updateTodo}
                  onDelete={deleteTodo}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// Editable todo item component
function EditableTodo({ todo, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newWork, setNewWork] = useState(todo.work);
  const [newDescription, setNewDescription] = useState(todo.description);

  const handleUpdate = () => {
    onUpdate(todo.id, newWork, newDescription); // Update the todo
    setIsEditing(false); // Exit edit mode
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newWork}
            onChange={(e) => setNewWork(e.target.value)}
          />
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>
            <strong>Work:</strong> {todo.work}
          </p>
          <p>
            <strong>Description:</strong> {todo.description}
          </p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default App;
