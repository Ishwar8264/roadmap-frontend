# ESLint & Prettier — Simple Guide

## 1. Big Picture

In modern frontend projects, code should be:

- correct
- readable
- consistent
- easy for the team to maintain

For this, we mainly use two tools:

```txt
ESLint   = finds code quality issues
Prettier = formats code style automatically
```

---

## 2. What is ESLint?

ESLint is a **linter** for JavaScript and TypeScript.

It checks your code and tells you:

- unused variables
- wrong imports
- bad React hook usage
- missing dependencies in hooks
- unsafe patterns
- project rule violations

### Simple example

```ts
const name = "Ishwar";

function App() {
  const unused = "hello";
  return <h1>{name}</h1>;
}
```

ESLint can warn:

```txt
'unused' is assigned a value but never used.
```

### Meaning

ESLint answers this question:

```txt
Is my code safe and following project rules?
```

---

## 3. What is Prettier?

Prettier is a **code formatter**.

It does not deeply care about business logic. It mainly fixes:

- spacing
- indentation
- quotes
- line breaks
- semicolons
- object formatting
- JSX formatting

### Before Prettier

```ts
const user={name:"Ishwar",role:"Frontend Developer"}
```

### After Prettier

```ts
const user = {
  name: "Ishwar",
  role: "Frontend Developer",
};
```

### Meaning

Prettier answers this question:

```txt
Does my code look clean and consistent?
```

---

## 4. ESLint vs Prettier

| Tool | Main Job | Example |
|---|---|---|
| ESLint | Code quality check | unused variable, wrong hook dependency |
| Prettier | Code formatting | spacing, indentation, quotes, line breaks |

Simple memory trick:

```txt
ESLint   = teacher who checks mistakes
Prettier = cleaner who makes code beautiful
```

---

## 5. Why both are needed?

Only Prettier is not enough because it cannot catch many logical or quality issues.

Only ESLint is not enough because formatting rules can create unnecessary team debates.

Best setup:

```txt
ESLint checks code quality
Prettier handles formatting
```

---

## 6. Real Development Flow

```txt
Developer writes code
        ↓
Prettier formats code on save
        ↓
ESLint checks quality issues
        ↓
Developer fixes warnings/errors
        ↓
Clean code is committed
```

In a team project, this flow usually runs in:

- VS Code save action
- terminal command
- Git pre-commit hook
- CI/CD pipeline

---

## 7. Common Commands

### Run ESLint

```bash
npm run lint
```

### Run Prettier check

```bash
npx prettier . --check
```

### Format files with Prettier

```bash
npx prettier . --write
```

---

## 8. Useful Packages

For a React / Next.js project, common packages are:

```bash
npm install -D prettier eslint-config-prettier
```

### What does eslint-config-prettier do?

It disables ESLint rules that conflict with Prettier formatting.

Without it, ESLint and Prettier can fight with each other.

Example:

```txt
ESLint says: use this style
Prettier says: use another style
```

`eslint-config-prettier` avoids this conflict.

---

## 9. Recommended Next.js Setup

Next.js already gives ESLint support.

A clean setup is:

```txt
Next.js ESLint rules
+ TypeScript rules
+ React rules
+ Prettier formatting
+ eslint-config-prettier to avoid conflicts
```

Recommended scripts:

```json
{
  "scripts": {
    "lint": "next lint",
    "format": "prettier . --write",
    "format:check": "prettier . --check"
  }
}
```

For newer Next.js versions, if `next lint` is not available in your setup, use ESLint directly:

```json
{
  "scripts": {
    "lint": "eslint .",
    "format": "prettier . --write",
    "format:check": "prettier . --check"
  }
}
```

---

## 10. Example Prettier Config

Create `.prettierrc`:

```json
{
  "semi": true,
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 100
}
```

Meaning:

| Option | Meaning |
|---|---|
| semi | Add semicolons |
| singleQuote | Use double quotes when false |
| tabWidth | 2 spaces indentation |
| trailingComma | Add commas where valid |
| printWidth | Wrap long lines around 100 chars |

---

## 11. Example ESLint Flat Config

Modern ESLint uses `eslint.config.mjs`.

Simple idea:

```js
import js from "@eslint/js";
import prettier from "eslint-config-prettier";

export default [
  js.configs.recommended,
  prettier,
];
```

In real Next.js projects, you may also include Next.js, TypeScript, and React-specific rules.

---

## 12. Best VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  }
}
```

Recommended extensions:

- ESLint
- Prettier - Code formatter

---

## 13. Common Mistakes

### Mistake 1: ESLint and Prettier conflict

Fix:

```bash
npm install -D eslint-config-prettier
```

### Mistake 2: Formatting only, no linting

Prettier makes code beautiful, but it does not catch many real issues.

### Mistake 3: Ignoring lint errors

Lint errors usually become bugs later.

### Mistake 4: Too many strict rules at the start

Start simple. Add strict rules slowly as the project grows.

---

## 14. Production Team Workflow

Best professional flow:

```txt
1. Format on save
2. ESLint auto-fix on save
3. Run lint before commit
4. Run format check in CI
5. Block PR if lint fails
```

This keeps code clean across the whole team.

---

## 15. Final Summary

```txt
ESLint finds code problems.
Prettier fixes code formatting.
Both together make your project clean, stable, and team-friendly.
```

Use this rule:

```txt
Code quality → ESLint
Code style   → Prettier
```
