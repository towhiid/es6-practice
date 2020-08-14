const person = {name : "Harry Potter", age : 20, job : "Amazon", gfName : "Isabella", address : "Dhanmondi", phone : "02374", friends : ["Rupert", "Alba Jordi", "Quinsland"]} ;

// const {phone, gfName, friends, name, age} = person;

// const gfName = person.gfName ;
// const phone = person.phone;
// console.log(phone);
// console.log(gfName, phone, friends);

// array destructure
// const friends = ['harry', 'potter', 'emma', 'watson'];
// const[mainF, nextF, ...restF] = friends;
// console.log(mainF, nextF, restF);
// complex object
const complexObject = {
    name = 'abc',
    info : {
        address = 'Dhaka',
        leader = 'heron'
    }  
}
const {leader} = complexObject.info;
console.log(leader);