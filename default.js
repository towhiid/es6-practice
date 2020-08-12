// function add(num1, num2){
//     return num1 + num2;
// }
// const total = add(34, 23);
// console.log(total);


// function add(num1, num2){
//     // if (num2 == undefined){
//     //     num2 = 0;
//     // }
//     num2 = num2 || 0;
//     return num1 + num2;
// }
// const total = add(34);
// console.log(total);

// after es6
function add(num1, num2 = 15){
    return num1 + num2;
}
const total = add(34, 56);
console.log(total);