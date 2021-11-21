"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergedObj.age);
const mergedObj2 = merge({ name: 'taku', hobbies: ['Sports'] }, { age: 28 });
console.log(mergedObj2.hobbies);
//# sourceMappingURL=app.js.map