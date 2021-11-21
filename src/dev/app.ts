// const names: Array<string> = [];
// names[0].split('');

// const promise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve('終わりました！');
//   }, 2000);
// });
// // const promise: Promise<string> = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     resolve('終わりました！');
// //   }, 2000);
// // });

// promise.then((data) => {
//   data.split('');
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergedObj.age);

// こういう意味ではあるがこの書き方をする必要はない。
const mergedObj2 = merge<{ name: string; hobbies: string[] }, { age: number }>(
  { name: 'taku', hobbies: ['Sports'] },
  { age: 28 }
);
console.log(mergedObj2.hobbies);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = '値がありません。';
  if (element.length > 0) {
    descriptionText = `値は${element.length}個です。`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('お疲れ様です！'));
console.log(countAndDescribe([]));
console.log(countAndDescribe(['Sports', 'Cooking']));
