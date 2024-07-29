// Function

function add(num1, num2){
    return num1 + num2
}
console.log(add(4,5));
console.log(add(8));

let adder = add; //return the function
console.log(adder(4,32));
let isSubscribed = false;

function toggleSubscribed(){
   self.isSubscribed = !self.isSubscribed
   document.getElementById('subscribeButton').innerHTML = self.isSubscribed ? 'Subscribed' : 'Subscribe';
   document.getElementById('subscribeButton').style.backgroundColor = self.isSubscribed ? "gray" : "red";
   console.log('Subscribed')
}

document.getElementById('subscribeButton').addEventListener('click', toggleSubscribed);


// Self invoke function

(function (params){
    console.log("the function invoke automatiocally, "+ params);
})('sham');


// Pass Array

let values = [1,2,3,4,5,6];

let square = values.map(function(number) {
    return number*number;
})
console.log(square);

function oddEven(numbers){
  numbers.forEach(number => {
     if (number%2===0){
        console.log(number + ' is even');
     }else{
        console.log(number + ' is odd');
     }
  });
}
console.log(oddEven(values));

// Arrow Function
/*
let multiplier = function multiply(num1, num2){
    return num1 * num2
}
console.log(multiplier(4,5));
*/

let multiplier = (x,y) => x*y;

console.log(multiplier(4,5));
console.log(multiplier(95,5));

// Pass by value, pass by reference

/*
* normally pass by value
* array & object are pass by ref
*/
console.log(`values array before func call= ${values}`);

function change(numbers){
    numbers[3] = 300;
}
change(values);
console.log(`values array after func call= ${values}`);


let obj = {
    a: 20,
    b: 30,
}

console.log(`before = ${obj.a}`);
function exchange(changeObject){
    let temp = changeObject.a;
    changeObject.a = changeObject.b;
    changeObject.b = temp 
}

exchange(obj);
console.log(`after = ${obj.a}`);
