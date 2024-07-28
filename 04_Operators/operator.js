// operators
/*
console.log("operators");
let number = window.prompt("Enter a number:");
let intNumber = parseInt(number);
if (intNumber % 2 === 0){
    console.log(`${intNumber} is even`);
}else{
    console.log(`${intNumber} is odd`);
}

*/

// Comparison Operator

/* 1. ==
* losly typed
* type miss na korle o result true hoy

*/
let num1 = 4;
let num2 = 9;
if (num1 == num2){
    console.log("Equal value");
}else{
    console.log("not equal value");
}

if (num1 == num2){
    console.log("Equal in type & value");
}else{
    console.log("not equal in type & value");
}

let result = num1 > num2 ? true : false;
console.log(typeof(result));