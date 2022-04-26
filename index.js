
// Write your code here
let num1 = 2;
let num2 = 31;
let multiply = num1 * num2;

// Inspired from this MDN docs page:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getLargerThanZeroNumber() {
    let minNum = 1;
    let maxNum = 5;
    let random = Math.floor(Math.random() * (maxNum - minNum) + minNum);

    return random;
}

let random = getLargerThanZeroNumber();

let num3 = 19;
let num4 = 5;
let mod =  num3 % num4;

let max = Math.max(1, 5, 10, 15, 20);
