// array

const languages = ['C', 'C++', 'Python', 'Java', true, 67]
const arr = new Array('name', 'age') //slightly slower

/*
* new Array(20) will create an empty array of size 20
* array = [20] will create an array with one element 20
*/

// access array
languages[4] = 'CSS'
console.log(languages);
console.log(languages.toLocaleString());
console.log(languages.length);
console.log(languages[3])
console.log(languages.at(3)); // same as accessing with index


//append
languages.push('pq');
console.log(languages)
// --> or
languages[7] = 'New item'
console.log(languages);
languages[10] = 'out of index'; // assign to index 10. and other 2 will be empty

console.log(languages);

// 
const person = [] //object
person['firstName'] = 'Shameem'
person['lastName'] = 'Ahammed'
console.log(person.length)
person[3] = 34
console.log(person.length)
console.log(person)

// join
console.log(languages.join("' '")); //seperate elements with

// push, pop
// add first
languages.unshift("first item");
// delete first ITEM

console.log(languages);
languages.shift()
console.log(languages)
languages.sort()
console.log(languages)
languages.pop()
languages.pop()
console.log(languages);
 

const x = [1, 3, 5, 7, 9]
const y = [2, 4 ,6, 8, 10]
const z = x.concat(y)
console.log(z)
const sub = [1, 4, 3]

// flat, flatmap

const mat =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(mat.flat())
console.log(x.flatMap((num) => num*num))

// splice
/*
* add items in middle
* array.splice(startIndex, delete number, new elements)
*/

x.splice(2,0, 89, 8)
console.log(x)

// slice
/*
* slice() method creates a new array.

* slice() method does not remove any elements from the source array.
* slice(startIndex, endIndex)
*/
console.log(x.slice(2)) // create new array slicing first 2 elements
console.log(x.slice(3, 5))
console.log(x)
// searcing, sorting, reverse
console.log(x.join(' '));

// copyWithIn()

/*
* method copies array elements to another position in an array:
* overwrites the existing values.
* does not add any new items. don't change the length of the array
*
*/
// x.copyWithin(2,0); //Copy to index 2, all elements from index 0:
// console.log(x);
// x.copyWithin(3,0,2);
// console.log(x)


// Iteration 


/* 1. forEach()
* calls a function (a callback function) once for each array element
* 
*/

x.forEach(element => {   
    console.log(element)
});

x.forEach(handleArray)

function handleArray(value, index, array){
    console.log(value + ' ' + index);
}
