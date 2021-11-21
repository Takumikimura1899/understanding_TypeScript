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
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Data1');
textStorage.addItem('Data2');
textStorage.removeItem('Data1');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['Max', 'Anna'];
//# sourceMappingURL=app.js.map