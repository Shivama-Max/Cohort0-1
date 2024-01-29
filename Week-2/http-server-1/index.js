const express = require("express");
const bodyParser = require("body-parser")
const app = express()
const port = 3000
app.use(bodyParser.json())

// app.get('/', function(req, res){
//   res.send('Hello World!')
// })
app.post('/conversation',(req,res)=> {
    // console.log(req.headers) //--> to get the header object
    console.log(req.body.msg)
    res.send({
        out : "2+2 is 4"
    })
})
app.listen(port,()=>{
    console.log(`Running on Port ${port}...`)
})