# CSS Inheritance

## What is Inheritance in CSS?

Inheritance means:

> Some CSS properties automatically pass from parent element to child elements.

Simple meaning:

Child elements can inherit styles from their parent element.

---

# Basic Example

HTML:

```html
<div>
  <p>Hello World</p>
</div>
```

CSS:

```css
div {
  color: blue;
}
```

Result:

- `<div>` text becomes blue
- `<p>` also becomes blue automatically

Why?

Because `color` is an inheritable property.

---

# Parent and Child Relationship

HTML structure:

```html
<div class="parent">
  <p class="child">Text</p>
</div>
```

Here:

- `.parent` → parent element
- `.child` → child element

Child can inherit styles from parent.

---

# Common Inherited Properties

These properties usually inherit automatically.

| Property    | Example      |
| ----------- | ------------ |
| color       | Text color   |
| font-size   | Text size    |
| font-family | Font style   |
| font-weight | Boldness     |
| line-height | Text spacing |
| visibility  | Visibility   |
| cursor      | Mouse cursor |

---

# Example

```css
body {
  font-family: Arial, sans-serif;
  color: gray;
}
```

All child elements inside `<body>` inherit:

- font-family
- color

---

# Non-Inherited Properties

Some properties do NOT inherit automatically.

| Property   | Example         |
| ---------- | --------------- |
| margin     | Outer spacing   |
| padding    | Inner spacing   |
| border     | Border          |
| width      | Width           |
| height     | Height          |
| background | Background      |
| display    | Flex/block/grid |

---

# Example

```css
div {
  background: black;
}
```

Child elements do NOT automatically get black background.

---

# Why Inheritance is Useful

Inheritance helps:

- Reduce duplicate CSS
- Keep design consistent
- Write cleaner styles
- Improve maintainability

---

# Example Without Inheritance

```css
h1 {
  color: gray;
}

p {
  color: gray;
}

span {
  color: gray;
}
```

Too repetitive.

---

# Better Using Inheritance

```css
body {
  color: gray;
}
```

All text elements inherit automatically.

Cleaner and scalable.

---

# The `inherit` Keyword

You can force inheritance using `inherit`.

Example:

```css
button {
  font-family: inherit;
}
```

Meaning:

Button uses parent font-family.

---

# Why `inherit` is Important

Some form elements do not inherit styles properly.

Example:

```css
body {
  font-family: Arial, sans-serif;
}

button {
  font-family: inherit;
}
```

Now button matches website typography.

---

# Other Special Values

## 1. initial

Resets property to browser default value.

```css
color: initial;
```

---

## 2. unset

Acts like:

- inherited value if property is inheritable
- initial value if not inheritable

```css
color: unset;
```

---

## 3. revert

Reverts style back to browser or previous stylesheet.

```css
color: revert;
```

---

# Example of Inheritance Flow

HTML:

```html
<body>
  <div>
    <p>Hello</p>
  </div>
</body>
```

CSS:

```css
body {
  color: blue;
  font-size: 20px;
}
```

Flow:

```text
body
 └── div
      └── p
```

Inherited styles:

- color → blue
- font-size → 20px

---

# Inheritance in Real Projects

Common example:

```css
body {
  font-family: Inter, sans-serif;
  color: #111827;
  line-height: 1.5;
}
```

Entire application inherits:

- typography
- text color
- spacing behavior

---

# Inheritance with CSS Variables

Inheritance also works with CSS variables.

Example:

```css
:root {
  --primary-color: blue;
}

.card {
  color: var(--primary-color);
}
```

Variables can flow through child elements.

---

# Inheritance vs Cascading

People often confuse them.

---

## Inheritance

Styles passed from parent to child.

Example:

```css
body {
  color: red;
}
```

---

## Cascading

CSS conflict resolution system.

Example:

```css
p {
  color: blue;
}

.text {
  color: red;
}
```

More specific rule wins.

---

# Inheritance in Tailwind CSS

Tailwind also uses inheritance internally.

Example:

```html
<div class="text-gray-700">
  <p>Hello</p>
</div>
```

`<p>` inherits text color.

---

# Best Practices

## Use inheritance for:

✅ Typography
✅ Text color
✅ Font settings
✅ Line height

---

## Avoid inheritance for:

❌ Layout
❌ Width/height
❌ Margin/padding
❌ Positioning

---

# Common Mistake

```css
.parent {
  background: black;
}
```

Developers expect child background to become black automatically.

This does NOT happen.

Because background is NOT inherited.

---

# Quick Summary Table

| Property Type | Inherited? |
| ------------- | ---------- |
| color         | ✅         |
| font-size     | ✅         |
| font-family   | ✅         |
| line-height   | ✅         |
| margin        | ❌         |
| padding       | ❌         |
| border        | ❌         |
| background    | ❌         |
| width         | ❌         |

---

# Real Industry Usage

Inheritance is heavily used for:

- Design systems
- Typography systems
- Theme systems
- Dark mode
- UI consistency

---

# Final Notes

Inheritance is one of the most important CSS concepts.

Understanding inheritance helps you:

- Write cleaner CSS
- Reduce repetition
- Build scalable UI systems
- Debug styling issues faster
- Create professional frontend architecture
