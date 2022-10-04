console.log(`-------String------`);
let lName: string;
lName = 'Seyha';

let newName = lName.toUpperCase();
console.log(`My name's ${ newName }`);

console.log(`-------Number------`);
let age: number;

age = 21;
age = 25;
console.log(`I'm ${ age } years old.`);

let dob = "25";
console.log(typeof dob);

let result = parseInt(dob);
console.log(`My result is ${ result }. ${ typeof result }`);
// ------------------------------------
console.log(`-------Bolean------`);
let isValid: boolean = false;
console.log(isValid);
// ------------------------------------
console.log(`-------Array------`);

let emplist: Array<string>; // string[];
emplist = ['Seyha', 'Cheat', 'Letm'];

let numList: Array<number>
numList = [1, 12, 2, 20];

let results = numList.filter((num) => num > 2);
let numRes = numList.find((num) => num === 2);
console.log(`Result : ${ results }`);
console.log(`Number of ${ numRes }`);
console.log(`------------------`);
let emp = emplist.find((num) => num === 'Cheat');
console.log(`Find Employee : ${ emp }`);
console.log(`-------SUM-----------`);
let sum = numList.reduce((num) => 1 + num);
console.log(`Sum of Value: ${ sum }`);

// ------------------------------------
console.log(`-------Enum------`);

const enum Color {
	Red,
	Green,
	Blue
}

let c: Color;
c = Color.Blue;
console.log(c);

console.log(`-------tuple------`);
let swapNumbs: [firstNumber: number, secondNumber: number];

function swapNumbers(num1: number, num2: number): [number, number] {
	return [num2, num1];
}

swapNumbs = swapNumbers(10, 20);

swapNumbs[1];
swapNumbs[0];
console.log(swapNumbs);
//1:09:38

console.log(`-------any------`);
let department: any;
department = 'IT';
department = 1;






