//?  Without strict ❌

// let name: string;
// name = undefined; // allowed 😡

//? With strict ✅

// let name: string;
// name = undefined; // ❌ error

//? Real example

// function greet(name?: string) {
//   return "Hello " + name.toUpperCase(); // ❌ error
// }

//! Fix:

function greet(name?: string) {
  return "Hello " + (name?.toUpperCase() || "Guest");
}

//? Strict mode  force:

// null handle
// undefined handle
// write safe code
