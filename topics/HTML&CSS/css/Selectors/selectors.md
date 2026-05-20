# CSS Selectors

## What are CSS Selectors?

CSS selectors are used to select HTML elements and apply styles to them.

Simple meaning:

> CSS selector tells the browser:
> “Which HTML element should I style?”

---

## Basic Example

HTML:

```html
<h1>Hello CSS</h1>
<p>This is a paragraph.</p>
```

CSS:

```css
h1 {
  color: blue;
}

p {
  color: gray;
}
```

Here:

- `h1` selects all `<h1>` elements
- `p` selects all `<p>` elements

---

# 1. Element Selector

Element selector selects HTML tags directly.

```css
h1 {
  color: red;
}

button {
  background: black;
  color: white;
}
```

Use when you want to style all same HTML elements.

---

# 2. Class Selector

Class selector selects elements using class name.

HTML:

```html
<p class="text">Hello</p>
```

CSS:

```css
.text {
  color: green;
}
```

Class selector starts with a dot `.`.

Use class selector for reusable styles.

---

# 3. ID Selector

ID selector selects one unique element.

HTML:

```html
<h1 id="title">Welcome</h1>
```

CSS:

```css
#title {
  color: purple;
}
```

ID selector starts with `#`.

Important:

- ID should be unique on a page
- Avoid using ID for common styling
- Prefer class selector in most cases

---

# 4. Universal Selector

Universal selector selects all elements.

```css
* {
  margin: 0;
  padding: 0;
}
```

Use carefully because it affects every element.

Common use:

```css
* {
  box-sizing: border-box;
}
```

---

# 5. Group Selector

Group selector applies same style to multiple selectors.

```css
h1,
h2,
p {
  font-family: Arial, sans-serif;
}
```

This avoids duplicate CSS.

---

# 6. Descendant Selector

Descendant selector selects elements inside another element.

HTML:

```html
<div class="card">
  <p>Hello inside card</p>
</div>
```

CSS:

```css
.card p {
  color: gray;
}
```

Meaning:

Select all `<p>` elements inside `.card`.

---

# 7. Child Selector

Child selector selects direct child elements only.

```css
.card > p {
  color: blue;
}
```

Meaning:

Select only `<p>` elements that are direct children of `.card`.

---

# 8. Adjacent Sibling Selector

Adjacent sibling selector selects the next element immediately after another element.

```css
h1 + p {
  margin-top: 10px;
}
```

Meaning:

Select the first `<p>` that comes immediately after `<h1>`.

---

# 9. General Sibling Selector

General sibling selector selects all matching siblings after another element.

```css
h1 ~ p {
  color: gray;
}
```

Meaning:

Select all `<p>` elements that come after `<h1>` at the same level.

---

# 10. Attribute Selector

Attribute selector selects elements based on attributes.

```css
input[type="text"] {
  border: 1px solid gray;
}
```

More examples:

```css
a[target="_blank"] {
  color: blue;
}

input[disabled] {
  opacity: 0.5;
}
```

---

# 11. Pseudo-class Selector

Pseudo-class selector styles elements in a special state.

Examples:

```css
button:hover {
  background: black;
  color: white;
}

input:focus {
  border-color: blue;
}

li:first-child {
  font-weight: bold;
}
```

Common pseudo-classes:

| Selector       | Meaning                       |
| -------------- | ----------------------------- |
| `:hover`       | When mouse is over element    |
| `:focus`       | When input/button is focused  |
| `:active`      | When element is being clicked |
| `:first-child` | First child element           |
| `:last-child`  | Last child element            |
| `:nth-child()` | Select by position            |

---

# 12. Pseudo-element Selector

Pseudo-element selector styles part of an element.

Examples:

```css
p::first-line {
  color: red;
}

p::first-letter {
  font-size: 32px;
}

button::before {
  content: "👉 ";
}

button::after {
  content: " ✅";
}
```

Common pseudo-elements:

| Selector         | Meaning                    |
| ---------------- | -------------------------- |
| `::before`       | Add content before element |
| `::after`        | Add content after element  |
| `::first-letter` | Style first letter         |
| `::first-line`   | Style first line           |
| `::selection`    | Style selected text        |

---

# 13. Multiple Class Selector

Select an element that has multiple classes.

HTML:

```html
<button class="btn primary">Save</button>
```

CSS:

```css
.btn.primary {
  background: blue;
  color: white;
}
```

Meaning:

Select element that has both `btn` and `primary` classes.

---

# 14. Specificity

Specificity decides which CSS rule wins.

Example:

```css
p {
  color: red;
}

.text {
  color: blue;
}

#title {
  color: green;
}
```

Priority order:

| Selector Type                    | Power   |
| -------------------------------- | ------- |
| Inline style                     | Highest |
| ID selector                      | High    |
| Class / pseudo-class / attribute | Medium  |
| Element / pseudo-element         | Low     |
| Universal selector               | Lowest  |

---

# 15. Best Practices

Use classes for most styling.

Avoid:

```css
#title {
  color: red;
}
```

Prefer:

```css
.title {
  color: red;
}
```

Good practice:

```css
.card {
  padding: 20px;
}

.card-title {
  font-size: 24px;
}

.card-description {
  color: gray;
}
```

---

# 16. Quick Summary

| Selector       | Example              | Meaning                |
| -------------- | -------------------- | ---------------------- |
| Element        | `p`                  | Select all `<p>`       |
| Class          | `.box`               | Select class box       |
| ID             | `#header`            | Select id header       |
| Universal      | `*`                  | Select all             |
| Group          | `h1, p`              | Select multiple        |
| Descendant     | `.card p`            | Select p inside card   |
| Child          | `.card > p`          | Select direct child p  |
| Sibling        | `h1 + p`             | Select next p          |
| Attribute      | `input[type="text"]` | Select by attribute    |
| Pseudo-class   | `button:hover`       | Select state           |
| Pseudo-element | `p::first-line`      | Select part of element |

---

# Final Notes

CSS selectors are the foundation of styling.

If you understand selectors clearly, you can:

- Target elements correctly
- Write clean CSS
- Avoid duplicate styles
- Build scalable UI
- Debug styling issues faster
