import { Login, User } from './interface';

interface Address {
	street: string;
	city: string;
	state: string;
	pin: string;
}

class Employee implements Login {
	#id: number;
	protected name: string;
	address: Address;

	get empId(): number {
		return this.#id;
	}

	set empId(id: number) {
		this.#id = id;
	}

	static employeeCount(): number {
		return 50;
	}

	constructor(id: number, name: string, address: Address) {
		this.#id = id;
		this.name = name;
		this.address = address;
	}
	login(): User { 
		return { id: 12, name: 'Seyha', email: 'seyha@gmil.com' };
	}
	getNameByAddress(): string {
		return ` ${this.name} stay in ${this.address}`;
	}
}

class Manager extends Employee {
	constructor(id: number, name: string, address: Address) {
		super(id, name, address);
	}
	getNameWithAddress(): string {
		return `${this.name} is a manager ${this.address}`;
	}
}

//base class
let jong = new Employee(12, 'Seyha', {
	street: '099',
	city: 'Phnom Penh',
	state: '12',
	pin: '12',
});
jong.empId = 100;
console.log(jong.empId);

Employee.employeeCount();
console.log(Employee.employeeCount());

let myAddress = jong.getNameByAddress();
console.log(`My adress is ${myAddress}`);
//child class

// jong.id = 1;
// jong.name = 'Jonh';
// jong.address = 'Phnom Penh';

let mike = new Manager(13, 'Mik', {
	street: '099',
	city: 'Phnom Thum',
	state: '12',
	pin: '12',
});
let addressMike = mike.getNameByAddress();
let addressHerBoss = mike.getNameWithAddress();
mike.getNameWithAddress();
console.log(mike, addressMike, addressHerBoss);

console.log(`This is her Address ${mike} . ${addressMike}. ${addressHerBoss}`);
