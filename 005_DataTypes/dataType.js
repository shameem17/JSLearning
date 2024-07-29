// String

let str = "He says, \"I am ill\" ";
console.log(str); 
let str2 = "He says, 'you are a good boy'";
console.log(str2);
console.log(str[0]);
let myName = "Shameem"
let age = 40;
let age2 = 4;
let calculation = age + age2 + myName;
console.log(calculation);
calculation = myName + age + age2;
console.log(calculation);

// Numbers

/* 
* BigInt
* BigInt can not be mixed with other dataTypes. i.e: compare, operator
! No decimal in BigInt
 */

let bigNumber = BigInt(99999999999999999999999n);
console.log(bigNumber*bigNumber);


// Array
let fruits = ["apple", 'mange', 'banana', 45, 67];
fruits[2]= 'orange';
console.log(fruits);
console.log(typeof fruits);

// Object
let student = {
    fullName: 'Shameem Ahammed',
    age: 25,
    university: "Kuet",
    department: 'CSE',
    bloodGroup: 'O+',
}
console.log(typeof student);
console.log(student);