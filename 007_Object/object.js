// Object
/*
* can have properties and methods
* pass by ref
? common practice to use const
* can be defined in 3 ways:
1. object Literal
2. new keyword
3. object constructor
*/

// Object Literal
const mySymbol = Symbol("myKey")
const Person = {
    firstName: 'Shameem',
    lastName: 'Ahammed',
    age: 25,
    university: 'Kuet',
    department: 'CSE',
    'date of birth': '22 April',
    [mySymbol]: 'black',
    //methods
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    description: function() {
        console.log(`Hello ${this.fullName()}. You are ${this.age} years old`);
    }
};
console.log(Person.firstName);
console.log(Person['firstName']);
let fullName = Person.fullName();
console.log(fullName);
console.log(Person.description())
//! console.log(Person.date of birth); //error
console.log(Person['date of birth']);
Person.age = 26;
Person.country = 'Bd';

console.log(Person);


// new keyword
const car = new Object()

car.brandName = "BMW";
car.model = "BMW 23";
car.price = "12";

console.log(car);

//  if a key exist or not. how to check
console.log(Person.hasOwnProperty('address'));
Person.address ='Dhaka Bangladesh';
console.log(Person.hasOwnProperty('address'));

//  find the keys in an object
console.log(Object.keys(Person));
//  values
console.log(Object.values(Person));


// ? concate objects

const obj1 ={
    a: 1,
    b: 2,
};
const obj2 ={
    p: 3,
    q: 4,
};

const obj3 ={
    x: 10,
    y: 20,
};
// const objFinal = { obj1, obj2};
// console.log(objFinal);
// * Object.assign(target, soruce);
// const objFinal = Object.assign(obj1, obj2, obj3); --> not memory efficient. all merge to obj1
// console.log(objFinal);
console.log(obj1); //obj1 == objFinal

const objFinal2 = Object.assign({}, obj1, obj2, obj3);
console.log(objFinal2);
console.log(obj1); 

const obj4={
    a: 78,
    b: 7,
};
const finalOjb = Object.assign({}, obj1,obj2,obj3,obj4);
console.log(finalOjb); //value for key a and b rewrite

//---> modern practice

const obj = {...obj1, ...obj2, ...obj4}
console.log(obj);

// object inside object
const outsideObject = {
    fullName: 'Shameem Ahammed',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
};
console.log(outsideObject.address.city);

// 
const x = outsideObject
x.fullName = "Mr x"
console.log(outsideObject);


// Constructor Object
/*
* used to create many object of same type
* not memory efficient. use prototype instead
*/

function Students(firstName, age){
    this.firstName = firstName,
    this.age = age
};
const student1 = new Students('Shameem', 8);
const student2 = new Students("Ahammed", 56);
console.log(student1);
console.log(student2);
// change value & add property to object
student1.age = 34;
student1.nationality = 'Bangladeshi';
console.log(student1);
console.log(student2);

// add property to constructor
Students.prototype.university = 'Kuet';
console.log(student2.university);

// add methods to constructor
Students.prototype.changeName = function(name){
    this.firstName = name;
};
student1.changeName('no name');
console.log(student1);

