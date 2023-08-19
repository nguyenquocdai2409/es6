let tinhDTB = (toan, ly, hoa = 0) => (toan + ly + hoa) / 3;
let ketqua1 = tinhDTB(5, 5);
console.log("🚀 ~ file: index.js:3 ~ ketqua1:", ketqua1);

var introduce = (
  name,
  age,
  handleMessage = () => {
    console.log("không thích chào thì làm sao");
  }
) => {
  console.log("Nhân viên : ", name, age);
  handleMessage();
};
var username = "alice nguyễn";
var age = 20;

var sayHello = () => {
  console.log("hello công ty");
};
introduce(username, age, sayHello);
introduce("tommy", 22);
