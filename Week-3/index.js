const express = require("express")
const app = express()

// An ugly way to add Authentication and Input Validation
// app.get("/healthy",(req,res)=>{
//     const kidneyId = req.query.kidneyId
//     const uname = req.headers.unsame
//     const pass = req.headers.pass 

//     if(uname != "shivama" || pass != "pass"){
//         res.status(403).json({
//             msg: "This user doesn't exist!!"
//         })
//         return;
//     }
//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(411).json({
//             msg: "Wrong Inputs"
//         })
//         return;
//     }
//     res.send("Healthy")
// })

// app.listen(3000)

// Now, lets say we have to add other route for kidney replacement using put request
//We will have to do checks 2 times
//Like this

// app.get("/healthy",(req,res)=>{
//     const kidneyId = req.query.kidneyId
//     const uname = req.headers.unsame
//     const pass = req.headers.pass 

//     if(uname != "shivama" && pass != "pass"){
//         res.status(403).json({
//             msg: "This user doesn't exist!!"
//         })
//         return;
//     }
//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(411).json({
//             msg: "Wrong Inputs"
//         })
//         return;
//     }
//     //Fulfil Get Request
//     res.send("Healthy")
// })

// app.put("/healthy",(req,res)=>{
//     const kidneyId = req.query.kidneyId
//     const uname = req.headers.unsame
//     const pass = req.headers.pass 

//     if(uname != "shivama" || pass != "pass"){
//         res.status(403).json({
//             msg: "This user doesn't exist!!"
//         })
//         return;
//     }
//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(411).json({
//             msg: "Wrong Inputs"
//         })
//         return;
//     }

//     //Fulfil Put request

//     res.send("Healthy")
// })

// app.listen(3000)

//This will violate DRY principle i.e. Don't Repeat Yourself
//To tackle this, we can use a wrapper function to look out for validation and authentication
//Like this...


// function authetication(uname,pass){
//     if(uname != "shivama" && pass != "pass"){
//         return false;
//     }
//     return true;
// }
// function inputValidation(kidneyId){
//     if(kidneyId != 1 && kidneyId != 2){
//         return false;
//     }
//     return true;
// }

// app.get('/healthy',(req,res)=>{
//     const kidneyId = req.query.kidneyId
//     if(!authetication(req.query.uname,req.query.pass)){
//         res.status(403).json({
//             msg: "User doesn't exist..."
//         })
//         return
//     }
//     if(!inputValidation(kidneyId)){
//         res.status(411).json({
//             msg : "wrong input..."
//         })
//     }
//     //logic for get request
//     res.send("Healthy")
// })
// app.put('/healthy',(req,res)=>{
//     const kidneyId = req.query.kidneyId
//     if(!authetication(req.query.uname,req.query.pass)){
//         res.status(403).json({
//             msg: "User doesn't exist..."
//         })
//         return
//     }
//     if(!inputValidation(kidneyId)){
//         res.status(411).json({
//             msg : "wrong input..."
//         })
//     }
//     //logic for PUT request
//     res.send("Healthy")
// })

// app.listen(3000)

//But, this is also a cluttered way of reusing stuff as we can see we have to deal with big code
//let's see another way to do it

// function authentication(req,res,next){
//     const uname = req.headers.uname
//     const pass = req.headers.pass 
//     if(uname != "shivama" && pass != "pass"){
//         res.status(403).json({
//             msg : "User doesn't exist"
//         })
//     }
//     else{
//         next() //else passed on to next middleware
//     }
// }
// function validation(req,res,next){
//     const kidneyId = req.query.kidneyId 
//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(411).json({
//             msg : "input values wrong"
//         })
//     }
//     else{
//         next() // else passed on to next middleware
//     }
// }

// app.get('/healthy',authentication,validation,(req,res)=>{
//     //logic to get
//     res.send("healthy")
// })

// app.put('/healthy',authentication,validation,(req,res)=>{
//     //logic to put
//     res.send("healthy")
// })
// //and so on...
// app.listen(3000)


//app.use()
//It is used if we have to make use of a middleware for every route. Eg - we need authentication for each route , so instead of writing it in every route, we can make use of - 
// app.use(authentication)
// Similarly, any other middlewares, which needs to be executed in each route will be used like this...

//Why Input Validation is Required?

// app.use(express.json())

// app.post('/healthy',(req,res)=>{
//     const kidneys = req.body.kidneys 
//     const kidneyLength = kidneys.length 

//     res.send("you have "+kidneyLength+" kidneys.")

// })
// app.listen(3000)

//Here, if the client sends a post request with kidneys as a number , or nothing, or anything gibberish , we should be able to handle these. That is the reason we need 
//input validation

// app.use(express.json())

// app.post('/healthy',(req,res)=>{
//     const kidneys = req.body.kidneys 

//     if(!kidneys){
//         res.json({
//             msg : "Empty Input"
//         })
//     }
//     else{
//         const kidneyLength = kidneys.length 
//         res.send("you have "+kidneyLength+" kidneys.")
//     }
// })
// app.listen(3000)

//This is one way to validate inputs. But, for multiple validation checks , we will have multiple if else statements which is ugly.
//That's why, we use Zod Library


//GLOBAL CATHCHES
//If we check the preview pane in postman or in any browser, we will be able to see what error has occured. We don't want this to be exposed to clients.
//For this , we use global catches
//It is used at the end of code

// app.use((err,req,res,next)=>{
//     res.json({
//         msg : "Something went wrong ... "
//     })
// })

//ZOD - AN INPUT VALIDATION LIBRARY

// const zod = require("zod")
// app.use(express.json())

// const schema = zod.array(zod.number()) //make a schema which defines the structure of input. Here , it is array of numbers

// app.post('/healthy',(req,res)=>{
//     const kidneys = req.body.kidneys 
//     const response = schema.safeParse(kidneys)
//     if(!response.success){
//         res.status(411).json({
//             msg : "Invalid Inputs"
//         })
//     }
//     else{
//         res.send({
//             response
//         })
//     }
// })
// app.listen(3000)

//let's say we want to have a schema like this...
//  {
//    email : string => email validation
//    password: string => atleast 8 length
//    country: either "IN" or "US"
//  }

const zod = require("zod")


function validate(obj){
    const schema = zod.object({
        email : zod.string().email(),
        password : zod.string().min(8),
        country : zod.literal("IN").or(zod.literal("US"))
    })

    const response = schema.safeParse(obj)
    console.log(response)
}

validate({
    email : "abc@gmail.com",
    password : "abcdefghijklmnop",
    country : "US"
})

app.post('/login',(req,res)=>{
    const response = validate(req.body)
    if(!response.success){
        res.json({
            msg : "Invalid inputs..."
        })
        return
    }
})

