"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(id, name, address) {
        _Employee_id.set(this, void 0);
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    static employeeCount() {
        return 50;
    }
    login() {
        return { id: 12, name: 'Seyha', email: 'seyha@gmil.com' };
    }
    getNameByAddress() {
        return ` ${this.name} stay in ${this.address}`;
    }
}
_Employee_id = new WeakMap();
class Manager extends Employee {
    constructor(id, name, address) {
        super(id, name, address);
    }
    getNameWithAddress() {
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
//# sourceMappingURL=class.js.map