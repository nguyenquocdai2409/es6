console.log("🚀 ~ file: index.js:2 ~ username:", username);
var username = "bob";
var username = "alice";

/**
 *
 * es6 => ko cho phép tại trùng tên
 *
 *
 *
 *
 */
//console.log("🚀 ~ file: index.js:10 ~ account:", account)
let account = "alice@123";
// let account = "abc"

// scope : phạm vi hoạt động

//var : function scope
//let : block scope (nằm trong if)

var isLogin = true;
function checkLogin() {
  if (isLogin) {
    var message = "success";
  } else {
    var message = "Error";
  }
  console.log("🚀 ~ file: index.js:27 ~ checkLogin ~ message:", message);
}
checkLogin();

////////////////////////////

let is_login = false;
function check_login() {
  if (is_login) {
    let message = "success";
  } else {
    let message = "error";
  }
  console.log("🚀 ~ file: index.js:39 ~ check_login ~ message:", message);
}
check_login();
