"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'taku',
    age: 28,
    hobbies: ['sports', 'Cooking'],
    role: Role.ADMIN,
};
let favoriteActivities;
favoriteActivities = ['Sports', 1];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
if (person.role === Role.ADMIN) {
    console.log('管理者ユーザー');
}
const product = {
    id: 'aaa111',
    price: 10,
    tags: ['good', 'bad'],
    details: {
        title: 'Red Carpet',
        description: 'A great carpet - almost brand-new!',
    },
};
const { id, tags: [first], details: { title }, } = product;
const { tags: [, ff], } = product;
console.log(id, first, title, ff);
