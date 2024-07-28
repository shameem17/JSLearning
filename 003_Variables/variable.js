/*
* variables are container of data
* 4 ways to declare varibale
1. var
2. let
3. const
*/

// Example
let countryName = "Bangladesh";
console.log(`${countryName} is my country. ${countryName} is a poor country`);

/*
* var variable
* can reassign
* can redeclare
* global scope
? var is hosted. i.e: can be used before declare
*/

var myName = 'Shameem';
console.log(myName);
var myName = "Ahammed";
console.log(myName);

{
    var blockVar = "var inside the block";
    console.log(`inside other scope ${myName}`);
}
// access the block var outside the block
console.log(blockVar);

console.log(age); //undefined
var age = 30; 

/*
* let variable
! can't reassign
* can redeclare
? block scope
! let is not hosted.
*/
let color = "red";
// let "color" = "blue"; // error
console.log(color);
color = "Black";
console.log(color);
{
    let blockLet = "let inside block";
    console.log(color); //color is golobal
    console.log(blockLet);
}
// console.log(blockLet); //can't use outside block


/*
* const variable
! can't reassign
! can't redeclare
? block scope
! const is not hosted.
* const er object, array change kora jay
*/

const myAge = 45;
// const myAge = 33; -> redeclare
// myAge = 33; -> reassign
console.log(myAge);
{
    const blockConst = "const inside block";
    console.log(blockConst);
}
// console.log(blockConst);
// ! const er object, array change kora jay
const person= {
    firstName: 'Shameem',
    lastName: 'Ahammed',
    age: 25
}
console.log(person);
person.countryName = 'Bangladesh';
person.age = 26;
console.log(person);
