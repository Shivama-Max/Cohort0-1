
//Strings

// str = "abcde"

console.log(str.length)
console.log(str.indexOf("de"))
console.log(str.lastIndexOf("e"))
console.log(str.slice(1,3))
console.log(str.substr(1,3))
console.log(str.replace("bc","xy"))

str2 = "this is a sentence which is going to be broken into array of each word"

wordarr = str2.split(" ")
console.log(wordarr)

//--------------------------------------------------------------------------------------------------------------------------------
//Arrays

let arr = [1,2,3,4,5]

arr.push(6)
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift(0)
console.log(arr)

let arr2 = [7,8,9]

let arr3 = arr.concat(arr2)
console.log(arr3)

function printthis(x){
    console.log(x);
}

arr.forEach(printthis);

//--------------------------------------------------------------------------------------------------------------------------------
//Classes

class Animal{
    constructor(name,legs,speaks){
        this.name = name;
        this.legs = legs;
        this.speaks = speaks;
    }
    static myfun(){
        console.log("This is a function of this class, not of any object defined by this class.");
    }
    describe(){
        console.log(this.name+" has "+this.legs+" legs & it "+this.speaks+".")
    }
}

let dog = new Animal("dog",4,"barks")
dog.describe()
Animal.myfun()

//--------------------------------------------------------------------------------------------------------------------------------
//Date

const curr = new Date()
console.log(curr.getDate())
console.log(curr.getMonth()+1)
console.log(curr.getFullYear())
console.log(curr.getDay())

console.log(curr.getTime()) //-> Gets time in ms since 1970

//To get the time taken for a function to run

const before = new Date()
const bTime = before.getTime()

function fun(){
    let res = 0;
    for(let i=0;i<10000000000;i++){
        res++;
    }
}
fun()
const after = new Date()
const aTime = after.getTime()

console.log((aTime-bTime)/1000) //-> Seconds taken to run the program

//Printing current time

function currtime(){
    console.log(new Date().getTime());
}
setInterval(currtime,1000)

//--------------------------------------------------------------------------------------------------------------------------------
//JSON

const users = {
    id:1,
    name:"Shivama",
    age:21,
}

console.log(JSON.stringify(users)) //converts object to str

let str = '{"id":1,"name":"Shivama","age":21}'

console.log(JSON.parse(str)) //converts string to object

//--------------------------------------------------------------------------------------------------------------------------------
//Sync and Async Functions


//This is a synchronous function
function fun(){
    let res = 0;
    for(let i=0;i<10;i++){
        res+=i;
    }
    return res;
}
console.log(fun())

//But, lets say we introduce setTimeout function here,

function fun(){
    let res = 0;
    for(let i=0;i<10;i++){
        res+=i;
    }
    console.log(res);
}
setTimeout(fun,3000)
console.log("hello")

//here , async function setTimeout is being handled by API and when it finishes, it just gives back the result to main workflow
