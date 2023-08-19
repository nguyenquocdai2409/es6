let dog1 = {
  name: "milo",
  rating: 4.5,
};

let dog2 = { ...dog1, rating: 2 };
//clone và update cùng 1 dòng
//... tạo địa chỉ mới
//shallow copy, deep copy
//shallow compare, deep compare
// pass by reference
// dog1.rating = 1;
console.log("🚀 ~ file: index.js:7 ~ dog1:", dog1);
console.log("🚀 ~ file: index.js:7 ~ dog2:", dog2);

//chunk

let colors = ["red", "blue"];

let colorsv2 = [...colors, "green", "gray"];
// colorsv2.push("green");

console.log("🚀 ~ file: index.js:21 ~ colors:", colors);
console.log("🚀 ~ file: index.js:21 ~ colorsv2:", colorsv2);
