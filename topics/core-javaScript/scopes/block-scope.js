//* Variables declared with let and const inside {} are accessible only inside that block.

if (true) {
  const status = "active";
  let count = 1;

  //   console.log("---------", status); // active
  //   console.log("====count ", count); // 1
}

// console.log("===status", status); // ReferenceError: status is not defined

// console.log("=--=== count ", count); // eferenceError: count is not defined
