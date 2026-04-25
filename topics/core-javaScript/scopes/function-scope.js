//* Variables declared inside a function are accessible only inside that function.

function loginuser() {
  const userName = "Ishwar";
  //   console.log("====name ====", userName); //  Ishwar
}

loginuser();

console.log("=======", userName); // ReferenceError: name is not defined
