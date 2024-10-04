import { useState } from "react";
import axios from "axios";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  // useEffect(() => {
  //  axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
  //    setTodos(res.data.todos);
  //  });
  // }, []);

   useEffect(() => {
     fetch("https://sum-server.100xdevs.com/todos").then(async function (res) {
       const json = await res.json();
       setTodos(json.todos);
     });
   }, []);
  return <>
    {todos.map(todo => <Todo title={todo.title} description={todo.description} />)}
  </>;
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default App;
