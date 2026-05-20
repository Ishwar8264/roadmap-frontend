# CSS Layout: Flexbox and Grid

## What is Layout in CSS?

Layout means arranging elements on a webpage.

CSS layout helps control:

- position
- alignment
- spacing
- rows
- columns
- responsive design

Two powerful layout systems are:

- Flexbox
- Grid

---

# 1. Flexbox

Flexbox is used for one-dimensional layout.

One-dimensional means:

> Either row OR column at a time.

Use Flexbox when you want to align items in a line.

Examples:

- navbar
- buttons group
- card actions
- center content
- horizontal list

---

# Flexbox Basic Example

HTML:

```html
<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

CSS:

```css
.container {
  display: flex;
}
```

Now items come in one row.

---

# Flex Direction

Controls main direction.

```css
.container {
  display: flex;
  flex-direction: row;
}
```

Common values:

| Value          | Meaning       |
| -------------- | ------------- |
| row            | left to right |
| row-reverse    | right to left |
| column         | top to bottom |
| column-reverse | bottom to top |

---

# justify-content

Controls alignment on the main axis.

```css
.container {
  display: flex;
  justify-content: center;
}
```

Common values:

| Value         | Meaning                |
| ------------- | ---------------------- |
| flex-start    | start                  |
| center        | center                 |
| flex-end      | end                    |
| space-between | equal space between    |
| space-around  | space around items     |
| space-evenly  | equal space everywhere |

---

# align-items

Controls alignment on the cross axis.

```css
.container {
  display: flex;
  align-items: center;
}
```

Common values:

| Value      | Meaning     |
| ---------- | ----------- |
| stretch    | fill height |
| flex-start | top/start   |
| center     | center      |
| flex-end   | bottom/end  |

---

# gap

Adds space between flex items.

```css
.container {
  display: flex;
  gap: 16px;
}
```

Use `gap` instead of adding margin to every item.

---

# Common Flexbox Pattern

```css
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
```

Used for navbar layouts.

---

# 2. CSS Grid

CSS Grid is used for two-dimensional layout.

Two-dimensional means:

> Rows AND columns together.

Use Grid when you want full page or card layouts.

Examples:

- dashboard
- image gallery
- product grid
- blog cards
- page layout
- admin panel

---

# Grid Basic Example

HTML:

```html
<div class="grid">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</div>
```

CSS:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
```

This creates 3 equal columns.

---

# grid-template-columns

Controls columns.

```css
.grid {
  grid-template-columns: 200px 1fr 1fr;
}
```

Meaning:

- first column: 200px
- second column: flexible
- third column: flexible

---

# repeat()

Makes grid code cleaner.

```css
.grid {
  grid-template-columns: repeat(4, 1fr);
}
```

Meaning:

Create 4 equal columns.

---

# Responsive Grid

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}
```

Meaning:

- minimum card width: 220px
- maximum width: 1fr
- automatically adjusts based on screen size

This is very useful in real projects.

# Flexbox vs Grid

| Feature        | Flexbox                    | Grid                               |
| -------------- | -------------------------- | ---------------------------------- |
| Layout type    | One-dimensional            | Two-dimensional                    |
| Works with     | Row or column              | Rows and columns                   |
| Best for       | Navbar, buttons, alignment | Dashboards, galleries, page layout |
| Content flow   | Content-based              | Layout-based                       |
| Easy alignment | Very strong                | Strong                             |

---

# When to Use Flexbox

Use Flexbox for:

- navbar
- header
- footer
- buttons
- small components
- center alignment
- horizontal/vertical lists

Example:

```css
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

---

# When to Use Grid

Use Grid for:

- full page layout
- product cards
- image gallery
- admin dashboard
- profile page sections

Example:

```css
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
}
```

---

# Real Project Example

```css
.page {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 24px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

Here:

- Grid controls page structure
- Flexbox controls header alignment

---

# Best Practices

✅ Use Flexbox for small component alignment
✅ Use Grid for page-level layout
✅ Use `gap` for spacing
✅ Use responsive grid with `auto-fit` and `minmax()`
✅ Avoid too many nested layouts
✅ Keep layout simple and readable

---

# Final Notes

Flexbox and Grid are not enemies.

Use them together:

- Grid for big structure
- Flexbox for inner alignment

This is how modern frontend layouts are built.
