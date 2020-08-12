// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function(num){
//     return num * 2;
// }

// after es6

const doubleIt = (num) => num * 2;
const add = (x, y=20) => x+y;
const output = add(2);
console.log(output);
const result = doubleIt(13);
console.log(result);

const give5 = () => 5;
console.log(give5());

// multiple statements
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const result3 = doMath (8 , 4);
console.log(result3);