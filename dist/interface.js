"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let { name: userName, email: UserLogin } = {
    id: 12,
    name: 'Seyha',
    email: 'seyha@gmil.com',
};
let employee = {
    id: 1,
    name: 'Cheat',
    email: 'cheat@gmail.com',
    salary: 1000,
    age: 32,
};
console.log(employee);
let [users1, users2, ...restUser] = [
    {
        id: 12,
        name: 'cheat',
        email: 'cheat@gmail.com',
    },
    {
        id: 14,
        name: 'seyha',
        email: 'seyha@gmail.com',
    },
    {
        id: 15,
        name: 'koko',
        email: 'koko@gmail.com',
    },
    {
        id: 16,
        name: 'koko',
        email: 'koko@gmail.com',
    },
];
console.log(users1);
console.log(users2);
console.log(restUser);
let result = restUser.map((data) => {
    data.name,
        data.age;
});
console.log(result);
// @Component({})
// class Component {
// 	constructor(public name: string;) {
// 	}
// }
//# sourceMappingURL=interface.js.map