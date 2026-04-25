let num = 20;
num = 40; // allow

// console.log("===Num == ", num);  // 40

const name = "Ishwar";

name = "Amit"; // not allow

// console.log("=====Name -== ", name);  // TypeError: Assignment to constant variable.

//! Key Points
//* let → reassign allowed
//* const → reassign not allowed
//* both are block scoped
//* both go to TDZ
