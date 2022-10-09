"use strict";
function add(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
    //if (num3)
    // num1+num3+num3
    // else
    // num1+num2;
}
let myResults = add(10, 20, 10);
console.log(`My result is : ${myResults}`);
const sumData = (num1, num2) => num1 + num2;
console.log(sumData(30, 40));
const mult = function (num1, num2) {
    return num1 * num2;
};
console.log(mult(10, 20));
console.log('-------------------------');
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}
let numbers2 = [1, 2, 34, 55];
console.log(...numbers2);
console.log(`result add 2: ${add(23, 23, ...numbers2)}`);
//1:27:44
function getItem(item) {
    return new Array().concat(item);
}
let concatResult = getItem([12, 23, 1, 3, 5]);
let concatString = getItem(['frf', 'erer', 'erer']);
//# sourceMappingURL=function.js.map