"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
let combineValues;
combineValues = add;
console.log(combineValues(8, 8));
printResult(add(5, 12));
function sendRequest(data, cb) {
    return cb({ data: 'Hi there!' });
}
sendRequest('send this!', (response) => {
    console.log(response);
    return true;
});
//# sourceMappingURL=app.js.map