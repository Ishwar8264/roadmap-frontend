# JavaScript Execution Context

Execution Context = Environment where JavaScript code is executed

# 🔹 Types of Execution Context

1. Global Execution Context (GEC)
   created first
   this → global object (window in browser)
2. Function Execution Context (FEC)
   created when function is called

ex:

var x = 10;

function foo() {
var y = 20;
console.log(x + y);
}

foo();

# explain

Execution Context defines how JavaScript stores variables and executes code using the call stack.
