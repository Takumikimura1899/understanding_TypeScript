const names: Array<string> = [];
names[0].split('');

const promise = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve('終わりました！');
  }, 2000);
});
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('終わりました！');
//   }, 2000);
// });

promise.then((data) => {
  data.split('');
});
