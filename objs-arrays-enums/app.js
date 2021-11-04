"use strict";
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'taku',
//   age: 28,
//   hobbies: ['sports', 'Cooking'],
//   role: [2, 'author'],
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: 'taku',
    age: 28,
    hobbies: ['sports', 'Cooking'],
    role: Role.ADMIN,
};
// person.role.push("admin")
// person.role[1] = 10
var favoriteActivities;
favoriteActivities = ['Sports', 1];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('管理者ユーザー');
}
var product = {
    id: 'aaa111',
    price: 10,
    tags: ['good', 'bad'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!',
    },
};
var id = product.id, first = product.tags[0], title = product.details.title;
var _b = product.tags, ff = _b[1];
console.log(id, first, title, ff);
