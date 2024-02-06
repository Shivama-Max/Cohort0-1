const express = require("express")
const app = express()

app.get("/sum",(req,res)=>{
    let num1 = req.query.a
    let num2 = req.query.b
    let result = parseInt(num1)+parseInt(num2)

    res.send(`${result}`) //can use result.toString() as well 
})

app.listen(3000)