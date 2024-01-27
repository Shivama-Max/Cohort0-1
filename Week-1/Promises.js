//Lets see an async function without using promises
const fs = require('fs');

// function readFileFunc(fun){
     //An async fn
//     fs.readFile("a.txt","utf-8",function(err,data){
//         fun(data)
//     });
// }
// function show(x){
//     console.log(x)
// }
// readFileFunc(show)

// This is an ugly way to write an async function
// Now, lets use promises

// function readFileFunc(){
//     console.log("inside the function")
//     return new Promise(function(resolve){
//         console.log("inside promise");
//         fs.readFile("a.txt","utf-8",function(err,data){
//             console.log("before resolve")
//             resolve(data)
//         });
//     })
// }
// function show(x){
//     console.log(x)
// }
// readFileFunc().then(show)

//Async - Await

// Async await is a better syntax than .then to accept / get resolved promises
//Here is an example without Async await
// function fun(){
//     let p = new Promise(function(resolve){
//         setTimeout(function(){
//             resolve("hello");
//         },3000)
//     });
//     return p;
// }
// function main(){
//     fun().then(function(val){
//         console.log(val);
//     })
// }
// main();

//Using Async-Await
// function fun(){
//     let p = new Promise(function(resolve){
//         setTimeout(function(){
//             resolve("hello");
//         },3000)
//     });
//     return p;
// }
// async function main(){
//     const val = await fun()
//     console.log(val);
// }
// main();

//As we can see , the confusing parts like .then have been removed to get a cleaner code using async and await

//Some Observations

function fun(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("hello");
        },3000)
    });
    return p;
}
async function main(){
    const val = await fun()
    console.log(val);
    console.log("hello 2")
}
main();
console.log("hello 3")
//The output will be - 
//hello 3
//hello
//hello 2

//This is because , anything written after await , but inside async function will wait for the promise to get resolved. Hence, "hello 2" waits for "hello"
//Anything after async function can be treaded as anything after .then() i.e. -> both dont wait for async function...



