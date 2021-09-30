let data = [
  { id: 1, title: "AAAA", price: 100, count: 2 },
  { id: 1, title: "BBBB", price: 200, count: 1 },
  { id: 1, title: "CCCC", price: 300, count: 1 },
  { id: 1, title: "DDDD", price: 500, count: 2 },
];

// acc = 累計值
let result = data.reduce(function (acc, item) {
  return acc + item.price * item.count;
}, 0);
// 0 = acc初始值

console.log(result);

// let a = () => {
//   console.log(a);
// };

// function a() {
//   console.log(a);
// }

// (a, b) => {
//   return a + b;
// };

// (a, b) => a + b;

// let a = () => {
//   console.log(a);
// };

// if (a == b) {
//   console.log("相等");
// }
