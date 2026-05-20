# CSS-in-JS Patterns

## Topics Covered

- What is CSS-in-JS
- styled-components
- Emotion
- Component-based styling
- Dynamic styles
- Theming
- Pros and cons
- CSS-in-JS vs Tailwind
- Modern recommendations

---

# 1. What is CSS-in-JS?

CSS-in-JS means:

> Writing CSS directly inside JavaScript or TypeScript files.

Instead of separate `.css` or `.scss` files, styles live with components.

Example:

```tsx
const Button = styled.button`
  background: black;
  color: white;
`;
```

This creates a styled React component.

---

# Why CSS-in-JS Exists

Large frontend apps often face problems like:

- CSS conflicts
- duplicate styles
- global CSS pollution
- hard-to-maintain styles
- naming issues

CSS-in-JS tries to solve these problems.

---

# 2. Main CSS-in-JS Libraries

Popular libraries:

| Library           | Purpose                    |
| ----------------- | -------------------------- |
| styled-components | Component styling          |
| Emotion           | Fast CSS-in-JS library     |
| Stitches          | Modern lightweight styling |
| Vanilla Extract   | Zero-runtime CSS           |
| Linaria           | Compile-time CSS           |

Most popular:

```text
styled-components
Emotion
```

---

# 3. What is styled-components?

styled-components is a CSS-in-JS library for React.

It allows creating styled React components.

Installation:

```bash
npm install styled-components
```

---

# Basic Example

```tsx
import styled from "styled-components";

const Button = styled.button`
  background: black;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
`;

export default function App() {
  return <Button>Save</Button>;
}
```

---

# What Happens Internally?

styled-components:

1. generates unique class names
2. injects CSS into the page
3. prevents style conflicts

Generated CSS looks like:

```css
.sc-kdHj {
  background: black;
}
```

Unique class names avoid collisions.

---

# 4. Dynamic Props Styling

One powerful feature is dynamic styling.

```tsx
const Button = styled.button<{ primary?: boolean }>`
  background: ${({ primary }) => (primary ? "#2563eb" : "#e5e7eb")};

  color: ${({ primary }) => (primary ? "white" : "black")};
`;
```

Usage:

```tsx
<Button primary>Primary</Button>
<Button>Secondary</Button>
```

Styles change based on props.

---

# 5. Reusable Styled Components

```tsx
const Card = styled.div`
  border-radius: 16px;
  padding: 24px;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;
```

Use anywhere:

```tsx
<Card>Profile</Card>
<Card>Settings</Card>
```

---

# 6. What is Emotion?

Emotion is another CSS-in-JS library.

Very popular in modern React apps.

Installation:

```bash
npm install @emotion/react @emotion/styled
```

---

# Emotion Styled Example

```tsx
import styled from "@emotion/styled";

const Button = styled.button`
  background: black;
  color: white;
`;
```

Looks similar to styled-components.

---

# Emotion css Prop

Emotion supports `css` prop.

```tsx
/** @jsxImportSource @emotion/react */

<div
  css={{
    background: "black",
    color: "white",
    padding: "20px",
  }}
>
  Hello
</div>
```

Useful for small dynamic styles.

---

# 7. CSS-in-JS Flow

```text
React Component
      ↓
CSS-in-JS Library
      ↓
Generate Unique CSS
      ↓
Inject into Browser
```

---

# 8. Theming

CSS-in-JS libraries support themes.

Example:

```tsx
const theme = {
  colors: {
    primary: "#2563eb",
    background: "#111827",
  },
};
```

Usage:

```tsx
background: ${({ theme }) => theme.colors.primary};
```

Useful for:

- dark mode
- design systems
- branding
- consistent UI

---

# 9. Global Styles

styled-components supports global styles.

```tsx
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: Inter, sans-serif;
  }
`;
```

---

# 10. Component-Based Styling

CSS-in-JS fits React architecture well.

Each component contains:

- UI
- logic
- styles

Example:

```text
Button.tsx
 ├── component logic
 ├── state
 ├── event handlers
 └── styles
```

Everything stays together.

---

# 11. Scoped Styles

CSS-in-JS automatically scopes styles.

Example:

```tsx
const Button = styled.button`
  background: red;
`;
```

This style only affects this button component.

No global conflict.

---

# 12. Conditional Styling

```tsx
const Card = styled.div<{ active?: boolean }>`
  border: 2px solid ${({ active }) => (active ? "#2563eb" : "#e5e7eb")};
`;
```

Very useful in interactive UI.

---

# 13. Animations

styled-components supports animations.

```tsx
import { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Box = styled.div`
  animation: ${fadeIn} 0.3s ease;
`;
```

---

# 14. CSS-in-JS Advantages

| Advantage           | Meaning                       |
| ------------------- | ----------------------------- |
| Scoped styles       | No CSS conflicts              |
| Dynamic styling     | Styles based on props         |
| Reusable components | Better architecture           |
| Co-location         | Styles live with components   |
| Theme support       | Easy dark mode/design systems |
| TypeScript support  | Better developer experience   |

---

# 15. CSS-in-JS Disadvantages

| Problem              | Meaning                        |
| -------------------- | ------------------------------ |
| Runtime cost         | Styles generated in browser    |
| Performance overhead | More JS work                   |
| Bundle size          | Larger packages                |
| Learning curve       | Different from traditional CSS |
| Debugging            | Generated class names          |
| SSR complexity       | Extra setup sometimes needed   |

---

# 16. CSS-in-JS vs SCSS

| Feature            | CSS-in-JS    | SCSS           |
| ------------------ | ------------ | -------------- |
| Location           | Inside JS/TS | Separate files |
| Dynamic styles     | Excellent    | Limited        |
| Runtime generation | Yes          | No             |
| Performance        | Medium       | Fast           |
| Scoped styles      | Automatic    | Manual         |
| React integration  | Excellent    | Normal         |

---

# 17. CSS-in-JS vs Tailwind CSS

| Feature            | CSS-in-JS | Tailwind        |
| ------------------ | --------- | --------------- |
| Styling method     | JS-based  | Utility classes |
| Runtime styles     | Yes       | No runtime      |
| Dynamic props      | Excellent | Good            |
| Performance        | Medium    | Very fast       |
| Developer speed    | Medium    | Fast            |
| Bundle size        | Larger    | Smaller         |
| Design consistency | Good      | Excellent       |

---

# 18. Modern Industry Trend

Modern frontend ecosystem is moving toward:

```text
Tailwind CSS
CSS Modules
Zero-runtime CSS
```

Reason:

- better performance
- smaller bundles
- easier scaling
- better SSR support

---

# 19. When CSS-in-JS is Useful

Good use cases:

✅ Complex dynamic UI
✅ Design systems
✅ White-label apps
✅ Theme-heavy applications
✅ Highly interactive components

Examples:

- dashboards
- component libraries
- enterprise apps

---

# 20. When to Avoid CSS-in-JS

Avoid when:

❌ performance is critical
❌ project is very large
❌ simple styling is enough
❌ Tailwind already solves needs

---

# 21. Modern Recommendation

Modern Next.js projects usually prefer:

```text
Tailwind CSS
+ reusable components
+ CSS variables
```

Instead of heavy runtime CSS-in-JS.

Better performance and easier scaling.

---

# 22. Hybrid Approach

Sometimes teams combine approaches.

Example:

```text
Tailwind → layout + spacing
CSS-in-JS → dynamic component styling
```

---

# 23. Example Architecture

```text
components/
 ├── button/
 │    ├── button.tsx
 │    └── styles.ts
```

or

```text
components/
 ├── button.tsx
```

with styles inside component file.

---

# 24. Common Mistake

Bad:

```tsx
const Button = styled.button`
  width: 937px;
`;
```

Not responsive.

Better:

```tsx
const Button = styled.button`
  width: 100%;
  max-width: 320px;
`;
```

# Final Notes

CSS-in-JS changed how React applications manage styles.

Simple understanding:

```text
Traditional CSS → separate files
CSS-in-JS → styles inside components
```

Best modern approach depends on project needs.

For modern scalable frontend apps:

```text
Tailwind CSS + reusable components
```

is usually the most practical solution.

CSS-in-JS is still powerful for:

- dynamic UI
- advanced theming
- design systems
- enterprise applications
