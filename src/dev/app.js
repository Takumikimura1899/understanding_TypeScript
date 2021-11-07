"use strict";
let user1;
user1 = {
    name: 'Max',
    age: 30,
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    },
};
user1.greet('Hello,I am');
//# sourceMappingURL=app.js.map