//AUTHENTICATION
//Let's say we want to allow only verified users to get access to the website, using username, password
//When a user inputs username password and requests to get access to the site, the backend confirms if they are authorized users and sends a TOKEN
//This token is stored in the localStorage and is sent with every request that the user sends after getting access to the data, instead of username password
//This is done so that the sensitive data is not stured in localStorage of the browser as it might be unsafe...

const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")
const jwtpass = "123456"
const mongoose = require("mongoose")
const PORT = env.PORT
mongoose.connect(PORT)




app.use(express.json())

//In-memory-data
const USERS = [
    {
        username : "shivama",
        password : "123",
        name : "shiva"
    },
    {
        username : "rahul",
        password : "1234",
        name : "raj"
    },
    {
        username : "ram",
        password : "12345",
        name : "rama"
    }
]

const User = mongoose.model("User",{
    name : String,
    username : String,
    password : String,
})

//to be modified as per mongodb
async function userExists(name,username,password){
    let res = false
    //For IN_MEMORY_DATA
    for(let i=0;i<USERS.length;i++){
        if(USERS[i].username === username && USERS[i].password === password){
            return true
        }
    }
    //same, but using  find()
    const foundobj = USERS.find(obj => obj.username === username && obj.password === password)
    if(foundobj){
        res = true
    }
    return res
}


// Signup Functionality
app.post("/signup",async function(req,res){

    const name = req.body.name 
    const username = req.body.username 
    const password = req.body.password 


    const existingUser = await User.findOne({username: username});
    if(existingUser){
        return res.status(400).json({
            msg : "Username already exists"
        })
    }
    const user = new User({
        name : name,
        username : username,
        password : password
    })
    user.save()
    res.json({
        msg : "User created successfully..."
    })
})

//First, a POST request at /signup, which will take username and password as input from the body of the request, encrypt username which will be sent as JWT

app.post("/signin",(req,res)=>{

    const username = req.body.username 
    const password = req.body.password 

    if(!userExists(username,password)){
        return res.status(403).json({
            msg : "User doesn't exist in our DB"
        })
    }

    var token = jwt.sign({username : username},jwtpass)
    return res.json({
        token
    })

})

//Second, a GET request at /users, which will return an array of users that are signed in, if token is incorrect, returns error 403

app.get("/users",(req,res)=>{

    const token = req.headers.authorization
    try{
        const decoded = jwt.verify(token,jwtpass)
        const username = decoded.username 
        res.json({   
            users : USERS.filter(function(val){                 //returning a list of users except the username which was tokenized
                if(val.username == username){
                    return false
                }
                else{
                    return true
                }
            })
        })
    }catch(err){
        return res.status(403).json({
            msg : "Invalid token"
        })
    }
})

app.listen(3000)

