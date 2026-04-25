//* var does not properly follow block scope.

if (true) {
  var message = "Hello World";
}

// console.log("========= var ", message); // Hello World

//* But inside function:

function test() {
  var inside = "Hello World";
}

// console.log("======inside ", inside); // ReferenceError: inside is not defined
