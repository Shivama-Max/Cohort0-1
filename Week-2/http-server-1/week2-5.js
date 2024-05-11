const express = require("express")

const app = express()
app.use(express.json())
// function sumOfn(n){
//     let ans = 0;
//     for(let i=1;i<=n;i++){
//         ans +=i;
//     }
//     return ans;
// }
// //localhost:3001/?n=5 -> here n=5 is a query parameter
// app.get('/',(req,res)=>{
//     const n = req.query.n //Fetching the query parameter
//     const result = sumOfn(n)
//     res.send(`the sum of ${n} natural numbers is ${result}`)
// })




var users = [{
    name : 'Shivama',
    kidneys : [{
        healthy : true
    },{
        healthy : false
    }]
}]

app.get('/',(req,res)=>{
    const johnKidneys = users[0].kidneys
    const noOfKidneys = johnKidneys.length  //2
    let noOfHealthyKidneys = 0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            noOfHealthyKidneys++
        }
    }
    let noOfUnhealthyKidneys = noOfKidneys - noOfHealthyKidneys
    res.json({
        noOfKidneys,
        noOfHealthyKidneys,
        noOfUnhealthyKidneys
    })
})

app.post('/',(req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg : "done"
    })
})


//updates all the unhealthy to healthy

app.put('/',(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true
    }
    res.json({})
})

app.delete('/',(req,res)=>{
    if(isAtleastOneHealthyKidney()){
        const newKidneys = []
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy : true
                })
            }
        }
        users[0].kidneys = newKidneys
        res.json({
            msg : "done"
        })
    }
    else{
        res.status(411).json({
            msg : "no bad kidneys"
        })
    }
    
})

function isAtleastOneHealthyKidney(){
    let n = false
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            n = true
        }
    }
    return n
}

app.listen(3001,()=>{
    console.log("working in port 3001...")
})