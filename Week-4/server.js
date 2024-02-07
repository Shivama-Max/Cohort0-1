const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

const todos = [{
    id: 1,
    title: "Todo 1",
    description: "This is todo 1",
    completed: false,
  }, {
    id: 2,
    title: "Todo 2",
    description: "This is todo 2",
    completed: false,
  }, {
    id: 3,
    title: "Todo 3",
    description: "This is todo 3",
    completed: false,
  
  }, {
    id: 4,
    title: "Todo 4",
    description: "This is todo 4",
    completed: false,
  }, {
  
    id: 5,
    title: "Todo 5",
    description: "This is todo 5",
    completed: false,
  }]

//to send random todos to the frontend
app.get("/todos", (req, res) => {
const randomTodos = [];
for (let i = 0; i < 5; i++) {
    if (Math.random() > 0.5) {
    randomTodos.push(todos[i]);
    }
}
res.json({
    todos: randomTodos,
})
});

app.get("/sum",(req,res)=>{
    let num1 = req.query.a
    let num2 = req.query.b
    let result = parseInt(num1)+parseInt(num2)

    res.send(`${result}`) //can use result.toString() as well 
})

app.get("/interest",(req,res)=>{
    let principal = req.query.principal
    let rate = req.query.rate
    let time = req.query.time

    let interest = (parseInt(principal)*parseInt(rate)*parseInt(time))/100;
    let total = parseInt(principal) + interest
    res.json({
        total : total,
        interest : interest,
    })
})

app.listen(3000)