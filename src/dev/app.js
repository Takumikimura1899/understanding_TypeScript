"use strict";
const names = [];
names[0].split('');
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('終わりました！');
    }, 2000);
});
promise.then((data) => {
    data.split('');
});
//# sourceMappingURL=app.js.map