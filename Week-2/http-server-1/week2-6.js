//map,filter,arrow functions

//Arrow Functions - A syntax to write a function
//Eg-
//----------------Normal Way----------
function sum1(a,b){
    return a+b;
}

//----------------Arrow Function-------
const sum2 = (a,b) =>{
    return a+b;
}

//Map

//Given an array - [1,2,3] , we have to return a new array with elements 2 times that of elements of the given array i.e. - [2,4,6]

//------------------Normal Way-----------------
const arr = [1,2,3]
const newArr = []
for(let i=0;i<arr.length;i++){
    newArr[i] = arr[i]*2
}
console.log(newArr)

//-----------------Using Map-------------------

const ans = arr.map(function(a){
    return a*2
})
console.log(ans)


//Filter
//Getting all even numbers from an array

//------------------Normal Way-----------------
const inp = [1,2,3,4,5,6]
const newInp = []
for(let i=0;i<inp.length;i++){
    if(inp.arr[i]%2 == 0){
        newInp.push(arr[i])
    }
}
console.log(newInp)

//-----------------Using Filter-------------------

const out = arr.filter(function(n){
    if(n%2==0){
        return true
    }
    else{
        return false
    }
})
console.log(out)