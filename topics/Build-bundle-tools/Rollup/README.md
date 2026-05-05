# Rollup — Simple Explanation

Rollup is a JavaScript bundler mainly used for building **libraries, packages, SDKs, and component libraries**.

Its main job is:

```txt
Your source code
  ↓
Rollup bundles it
  ↓
Clean optimized package output
  ↓
Other apps can import and use it
```

---

## Why Rollup Exists

When you create reusable code, you usually write many small files:

```txt
src/
  button.tsx
  modal.tsx
  utils.ts
  index.ts
```

But when you publish a package to npm, you need clean output files like:

```txt
dist/
  index.esm.js
  index.cjs.js
  index.d.ts
```

Rollup helps convert your source code into production-ready package files.

---

## Rollup Is Best For

| Use Case | Rollup Fit |
|---|---|
| React component library | Excellent |
| npm package | Excellent |
| Utility library | Excellent |
| SDK package | Excellent |
| Full frontend app | Possible, but Vite is better |
| Next.js app | Usually not needed directly |

---

## Core Rollup Flow

```txt
Entry File
  ↓
Dependency Graph
  ↓
Plugins Transform Code
  ↓
Tree-Shaking Removes Unused Code
  ↓
Bundle Generation
  ↓
Output Formats: ESM / CJS / UMD
```

---

## Important Concepts

### 1. Entry

Entry is the starting file.

Example:

```ts
// src/index.ts
export { Button } from './button';
export { Modal } from './modal';
```

Rollup starts from this file and follows all imports.

---

### 2. Dependency Graph

Rollup checks which files are connected through imports.

```txt
index.ts
 ├─ button.tsx
 ├─ modal.tsx
 └─ utils.ts
```

This graph helps Rollup understand what code is actually used.

---

### 3. Tree-Shaking

Tree-shaking means removing unused code from the final bundle.

Example:

```ts
export const used = () => 'used';
export const unused = () => 'unused';
```

If only `used` is imported, Rollup can remove `unused` from the final output.

This is one of Rollup's biggest strengths.

---

### 4. Plugins

Rollup uses plugins to understand different file types and transformations.

Common plugin jobs:

```txt
TypeScript → JavaScript
React JSX → JavaScript
CSS → bundled CSS
Images → assets
Node modules → resolved imports
```

Example plugins:

```txt
@rollup/plugin-node-resolve
@rollup/plugin-commonjs
@rollup/plugin-typescript
rollup-plugin-dts
```

---

### 5. Output Formats

Rollup can generate different module formats.

| Format | Meaning | Used By |
|---|---|---|
| ESM | Modern `import/export` | Modern bundlers, Vite, Next.js |
| CJS | `require/module.exports` | Node.js older ecosystem |
| UMD | Works in browser script tag | CDN/browser global builds |

A good package often ships ESM + CJS + TypeScript types.

---

## Simple Rollup Config Example

```js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
    },
  ],
  plugins: [resolve(), commonjs(), typescript()],
  external: ['react', 'react-dom'],
};
```

---

## What Is `external`?

`external` means: do not bundle this dependency inside your package.

Example:

```js
external: ['react', 'react-dom']
```

Why?

Because if you are building a React library, React should come from the user's app, not from your package bundle.

Good:

```txt
Your library uses app's React
```

Bad:

```txt
Your library bundles its own React copy
```

Bundling React inside a package can create duplicate React issues.

---

## Rollup vs Webpack vs Vite

| Tool | Best For |
|---|---|
| Webpack | Large apps with complex config |
| Rollup | Libraries and npm packages |
| Vite | Fast modern frontend apps |

Simple rule:

```txt
App banana hai → Vite / Next.js
Package banana hai → Rollup
```

---

## Real Example

If you are building your own UI package:

```txt
@ishwar/ui
  Button
  Modal
  Input
  Card
```

Rollup is useful because it can create:

```txt
dist/index.esm.js   → modern apps ke liye
dist/index.cjs.js   → Node/CommonJS ke liye
dist/index.d.ts     → TypeScript users ke liye
```

Then other projects can use it:

```ts
import { Button } from '@ishwar/ui';
```

---

## Mental Model

Think of Rollup like a professional package maker.

```txt
You write clean source code
Rollup reads imports
Rollup removes unused code
Rollup converts formats
Rollup creates npm-ready dist files
```

---

## Final Summary

Rollup is best when you want to create reusable production packages.

Use Rollup when:

```txt
You are making a library
You want clean bundle output
You want strong tree-shaking
You want ESM/CJS/UMD builds
You are publishing to npm
```

Do not overthink it:

```txt
Website/App → Vite or Next.js
Reusable Package → Rollup
```
