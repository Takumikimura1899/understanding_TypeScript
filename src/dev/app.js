"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergedObj.age);
const mergedObj2 = merge({ name: 'taku', hobbies: ['Sports'] }, { age: 28 });
console.log(mergedObj2.hobbies);
function countAndDescribe(element) {
    let descriptionText = '値がありません。';
    if (element.length > 0) {
        descriptionText = `値は${element.length}個です。`;
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('お疲れ様です！'));
console.log(countAndDescribe([]));
console.log(countAndDescribe(['Sports', 'Cooking']));
function extractAndConvert(obj, key) {
    return `Value:${obj[key]}`;
}
console.log(extractAndConvert({ name: 'taku' }, 'name'));
//# sourceMappingURL=app.js.map