// Math

let num = 30.53948
console.log(Math.round(num));
console.log(Math.floor(num)); //ceil

// square
let num2 = 9
console.log(Math.pow(num2,4));

// root
console.log(Math.sqrt(num2))

// abs
// min
// max

console.log(Math.max(13,5,6,67,3,2));

console.log(Math.PI)

// sin, cos

console.log(Math.sin(45*Math.PI / 180))

// random

console.log(Math.random().toFixed(3))


const rollButton = document.getElementById('rollDice')
const diceImage = document.getElementById('diceImage')
rollButton.addEventListener('click', function(){
    let dice = Math.ceil(Math.random().toFixed(3)*100)
    dice %= 6
    diceImage.src = 'Assets/'+(dice+1) + '.png';

})