//AUTHENTICATION
//Let's say we want to allow only verified users to get access to the website, using username, password
//When a user inputs username password and requests to get access to the site, the backend confirms if they are authorized users and sends a TOKEN
//This token is stored in the localStorage and is sent with every request that the user sends after getting access to the data, instead of username password
//This is done so that the sensitive data is not stured in localStorage of the browser as it might be unsafe...

const express = require("express")
const app = express()
app.use(express.json())

//First, a POST request at /signup, which will take username and password as input from the body of the request, encrypt username which will be sent as JWT

app.post("/signup",(req,res)=>{

    const username = req.body.username 
    const password = req.body.password 


})

//Second, a GET request at /users, which will return an array of users that are signed in, if token is incorrect, returns error 403

app.get("/users",(req,res)=>{


})