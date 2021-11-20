"use strict";
var _a;
const e1 = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result2 = add('Hello', 'TypeScript');
result2.split('');
const fetchedUserData = {
    id: 'u1',
    name: 'user1',
    job: {
        title: 'Developer',
        description: 'TypeScript',
    },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput2 = undefined;
const storedData = userInput2 !== null && userInput2 !== void 0 ? userInput2 : 'DEFAULT';
console.log(storedData);
function printEmployeeInformation(emp) {
    console.log(emp.name);
    if ('privileges' in emp) {
        console.log('Privileges:' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date:' + emp.startDate);
    }
}
printEmployeeInformation({ name: 'Manu', startDate: new Date() });
class Car {
    drive() {
        console.log('運転中...');
    }
}
class Track {
    drive() {
        console.log('トラックを運転中...');
    }
    loadCargo(amount) {
        console.log('荷物を載せています...' + amount);
    }
}
const v1 = new Car();
const v2 = new Track();
function useVehicle(vehicle) {
    vehicle.drive();
    if ('loadCargo' in vehicle) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('移動速度:' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
const userInputElement = document.getElementById('user-input');
userInputElement.value = 'こんにちは';
const errorBag = {
    1: '正しいメールアドレスではありません',
    username: 'ユーザー名に記号を含めることは出来ません',
};
//# sourceMappingURL=app.js.map