import { useState } from 'react'
import './App.css'


//Count Application
// function App() {
//   const [count,setCount] = useState(0);
//   return (
//     <div>
//         <CustomButton count={count} setCount={setCount}></CustomButton>
//     </div>
//   )
// }

// function CustomButton(props){
//   function onClickHandler(){
//     props.setCount(props.count+1)
//   }
//   return <button onClick = {onClickHandler}>
//     Counter {props.count}
//   </button>
// }

// export default App


// TO DO APPLICATION

// to-dos
//{
//  todos : [{title : "todo1", description : "todo2", completed : false}]
//}

function App(){
  const [todos,setTodos] = useState([{
    title : "Sleep",
    description : "viubevbsbu",
    completed : false
  }])

  return(
    <div>
      {todos.map(function(todo){
        return <Todo title = {todo.title} description = {todo.description} />
      })}
    </div>
  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App