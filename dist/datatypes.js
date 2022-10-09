"use strict";
console.log(`-------String------`);
let lName;
lName = 'Seyha';
let newName = lName.toUpperCase();
console.log(`My name's ${newName}`);
console.log(`-------Number------`);
let age;
age = 21;
age = 25;
console.log(`I'm ${age} years old.`);
let dob = "25";
console.log(typeof dob);
let result = parseInt(dob);
console.log(`My result is ${result}. ${typeof result}`);
// ------------------------------------
console.log(`-------Bolean------`);
let isValid = false;
console.log(isValid);
// ------------------------------------
console.log(`-------Array------`);
let emplist; // string[];
emplist = ['Seyha', 'Cheat', 'Letm'];
let numList;
numList = [1, 12, 2, 20];
let results = numList.filter((num) => num > 2);
let numRes = numList.find((num) => num === 2);
console.log(`Result : ${results}`);
console.log(`Number of ${numRes}`);
console.log(`------------------`);
let emp = emplist.find((num) => num === 'Cheat');
console.log(`Find Employee : ${emp}`);
console.log(`-------SUM-----------`);
let sum = numList.reduce((num) => 1 + num);
console.log(`Sum of Value: ${sum}`);
// ------------------------------------
console.log(`-------Enum------`);
let c;
c = 2 /* Color.Blue */;
console.log(c);
console.log(`-------tuple------`);
let swapNumbs;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNumbs = swapNumbers(10, 20);
swapNumbs[1];
swapNumbs[0];
console.log(swapNumbs);
//1:09:38
console.log(`-------any------`);
let department;
department = 'IT';
department = 1;
//# sourceMappingURL=datatypes.js.map