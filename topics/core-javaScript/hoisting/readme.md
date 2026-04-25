## Global Scope, Hoisting & TDZ

In JavaScript, `var`, `let`, and `const` can all be declared in the global scope.

But before initialization, they behave differently.

### Example

```js
console.log(a); // undefined
console.log(b); // ReferenceError
console.log(c); // ReferenceError

var a = 10;
let b = 20;
const c = 30;
```
