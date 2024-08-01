// Numbers

// limit => 10e16
const a = 9999999999999999;
console.log(a);

const c = 0.6
const d = 0.7
console.log(c+d);
// deviates due to bit calcualtion
console.log((c+d).toFixed(2));
//will get 1.30 but it is string

// convert to number

const number =new Number((c+d).toFixed(2)) 
console.log(number) // number is an object

const p = 20;
const q = (c+d).toFixed(2)
console.log(p+q) // string concat
console.log(p-q) // type cast
console.log(p*q)
console.log(p/q)

// binary
const s = 9
console.log(s.toString(2)); //1001
console.log(s.toString(8))
