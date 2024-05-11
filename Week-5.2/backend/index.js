const express = require('express');
const app = express()
const { createTodo } = require("./types")
const { updateTodo } = require("./types")
const { todo } = require("./db")
app.use(express.json())



app.post('/todo',async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg : "Wrong Inputs...",
        })
        return;
    }
    // else put it on mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo Created..."
    })
})

app.get('/todos',async (req,res)=>{
    const todos = await todo.find()
    res.json({
        todos
    })
})

app.put('/completed',async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = updateTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Wrong Inputs...",
        })
        return;
    }
    //else update the data for that id
    await todo.update({
        _id: createPayload.id
    },{
        completed: true,
    })
    res.json({
        msg: "Todo marked as completed..."
    })
})

app.listen(3000);