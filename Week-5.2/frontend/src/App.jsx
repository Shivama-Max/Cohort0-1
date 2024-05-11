import './App.css'
import { CreateTodo } from '../components/CreateTodo'
import { Todos } from '../components/Todos'
import { useState } from 'react'

function App() {
  const [todos,setTodos] = useState([]);

  //wrong way to do it -> after using setTodo here, the function re renders
  //this causes this fetch function to run infinitely
  //to solve this, we use useEffect hook.
  fetch("http://localhost:3000/todos")
    .then(async function(res){
      const json = await res.json();
      setTodos(json.todos);
  })

  return (
    <>
      <CreateTodo />
      <Todos todos = {todos} />
    </>
  )
}

export default App
