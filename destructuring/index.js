let dog = {
  name: "lulu mommy",
  age: 5,
  child: {
    name: "lulu baby",
    age: 1,
  },
};
let { name, age } = dog;
let { name: nameBaby, age: ageBaby } = dog.child;
console.log("🚀 ~ file: index.js:11 ~ ageBaby:", ageBaby);
console.log("🚀 ~ file: index.js:11 ~ nameBaby:", nameBaby);
// destructuring and rename
console.log("🚀 ~ file: index.js:10 ~ name:", name, age);

//array

let colors = ["red", "blue"];
let [c1, c2] = colors;
console.log("🚀 ~ file: index.js:20 ~ c1,c2:", c1, c2);
