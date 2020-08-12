const firstName = "Abu";
const lastNAme = "Salah";
// const fullName = firstName +" " + lastNAme + " " + "is a good boy." ;
// after es6
const fullName = `${firstName} ${lastNAme} ${30+498+32} is a good boy.`;

const multiLine = "you are good boy\n"
 + "YOu are the motivator\n" 
 + "You are a simple man";

// console.log(fullName);
// console.log(multiLine);
// after es6
const multiLine2 = `You are a good boy.
i know you very well,
and you are well behaved.`
console.group(multiLine2);