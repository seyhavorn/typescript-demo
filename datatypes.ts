let lName: string;
lName = 'Seyha';

let newName = lName.toUpperCase();
console.log(`My name's ${newName}`);

let age: number;

age = 21;
age = 25;
console.log(`I'm ${age} years old.`);

let dob = "25";
console.log(typeof dob);

let result = parseInt(dob);
console.log(`My result is ${result}. ${typeof result}`);

let isValid : boolean = false;
console.log(isValid);

console.log(`-------Array------`);

let emplist : Array<string>; // string[];
emplist = ['Seyha','Cheat','Letm'];

let numList : Array<number>
numList = [1,12,2,20];

let results = numList.filter((num)=> num>2);
let numRes = numList.find((num) => num === 2);
console.log(`Result : ${results}`);
console.log(`Number of ${numRes}`);
console.log(`------------------`);
let emp = emplist.find((num)=> num === 'Cheat');
console.log(`Find Employee : ${emp}`);




