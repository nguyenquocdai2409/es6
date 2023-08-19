function sayHello() {
  console.log("🚀 ~ file: index.js:2 ~ sayHello ~ sayHello:", sayHello);
}

let say_hello = () => {
  console.log("hello arrow function");
};
say_hello();

// let tinhTong = (n1, n2) => {
//   return n1 + n2;
// };
// var n3 = tinhTong(2, 6);
// console.log("🚀 ~ file: index.js:14 ~ n3:", n3);

let tinhTong = (n1, n2) => n1 + n2;
var n3 = tinhTong(2, 6);
console.log("🚀 ~ file: index.js:14 ~ n3:", n3);
