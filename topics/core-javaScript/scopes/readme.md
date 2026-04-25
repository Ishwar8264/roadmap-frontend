# JavaScript Scopes

Scope means **where a variable is accessible** in your code.

In JavaScript, scope decides:

- Where you can use a variable
- Where a variable is hidden
- Which variable will be used when names are same

---

## 1. Global Scope

A variable created outside any block/function is called a global variable.

```js
const appName = "Klakar";

function showAppName() {
  console.log(appName);
}

showAppName(); // Klakar
```
