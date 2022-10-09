function add(num1: number, num2: number, num3?: number): number {
	return num3 ? num1 + num2 + num3 : num1 + num2;
	//if (num3)
	// num1+num3+num3
	// else
	// num1+num2;
}

let myResults = add(10, 20, 10);

console.log(`My result is : ${ myResults }`);

const sumData = (num1: number, num2: number): number => num1 + num2;
console.log(sumData(30, 40));

const mult = function (num1: number, num2: number): number {
	return num1 * num2;
}

console.log(mult(10, 20));

console.log('-------------------------');

function add2(num1: number, num2: number, ...num3: number[]): number {
	return num1 + num2 + num3.reduce((a, b) => a + b, 0);
}

let numbers2 = [1, 2, 34, 55];
console.log(...numbers2);
console.log(`result add 2: ${add(23, 23, ...numbers2)}`);
//1:27:44

function getItem<Type>(item: Type[]):Type[] {
	return new Array<Type>().concat(item);
}

let concatResult = getItem<number>([12,23,1,3,5]);
let concatString = getItem<string>(['frf','erer','erer']);