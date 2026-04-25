//* let and const are also hoisted, but they are not initialized immediately.

//! They stay in TDZ.

console.log("const, let", a); // ReferenceError: Cannot access 'a' before initialization

// const a = 30;

let a = 30;
