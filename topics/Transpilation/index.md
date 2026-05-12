# Babel — Transpilation & Polyfills Explained

## 1. What is Babel?

Babel is a JavaScript compiler (transpiler).

```txt
Modern JavaScript / TypeScript syntax
        ↓
Babel
        ↓
Older browser-compatible JavaScript
```

Key responsibilities:

- Convert modern JS syntax to older syntax
- Transform JSX into JavaScript
- Improve browser compatibility (syntax level)
- Run transformations via plugins and presets

---

## 2. What is Transpilation?

Transpilation = converting code from one version/style to another.

### Input

```js
const greet = () => {
  console.log("Hello Babel");
};
```

### Output

```js
var greet = function greet() {
  console.log("Hello Babel");
};
```

---

## 3. What Babel Transforms

Babel transforms **syntax only**:

- Arrow functions → functions
- const / let → var
- Optional chaining → safe checks
- JSX → JS runtime calls
- Classes → prototype-based output

---

## 4. What Babel Does NOT Do

Babel does NOT add missing browser features.

```js
[1, 2, 3].includes(2);
```

Output remains:

```js
[1, 2, 3].includes(2);
```

👉 If browser doesn't support `.includes()`, it will fail.

---

## 5. What is a Polyfill?

Polyfill = adds missing browser features.

```js
if (!Array.prototype.includes) {
  Array.prototype.includes = function (value) {
    return this.indexOf(value) !== -1;
  };
}
```

---

## 6. Babel vs Polyfill

| Type     | Role                  |
| -------- | --------------------- |
| Babel    | Syntax transformation |
| Polyfill | Feature support       |

---

## 7. @babel/preset-env

Automatically decides transformations based on target browsers.

```js
{
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "> 0.5%, last 2 versions",
      },
    ],
  ];
}
```

---

## 8. core-js

Polyfill library providing:

- Promise
- Array.includes
- Object.assign
- Map / Set

---

## 9. useBuiltIns: "usage"

```js
{
  useBuiltIns: "usage",
  corejs: 3
}
```

👉 Only required polyfills are added automatically.

---

## 10. Plugins & Presets

- Plugin = single transformation
- Preset = group of plugins

Examples:

- @babel/preset-env
- @babel/preset-react
- @babel/preset-typescript

---

## 11. Babel Internal Flow

```txt
Source Code
   ↓
Parser → AST
   ↓
Plugins → modify AST
   ↓
Generator → output JS
```

AST = Abstract Syntax Tree

---

## 12. Babel with Bundlers

Webpack:

```txt
JS → babel-loader → Babel → bundle
```

Rollup:

```txt
Code → Babel → Rollup → output
```

Vite:

```txt
Dev: ESModules + esbuild
Build: Rollup
```

---

## 13. Babel in Next.js

- Uses SWC by default
- Babel only if custom config is added

---

## 14. Best Practices

- Use preset-env
- Avoid unnecessary polyfills
- Use "usage" mode
- Prefer modern browsers
- Avoid custom Babel unless needed

---

## 15. Final Mental Model

```txt
Babel = syntax conversion
Polyfill = feature support
```

👉 Babel makes code readable  
👉 Polyfill makes browser capable
