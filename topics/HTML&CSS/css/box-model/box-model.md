# box-model.md

# CSS Box Model

## What is Box Model?

Every HTML element is treated like a box in CSS.

The box model controls:

- content
- padding
- border
- margin

Simple meaning:

> Box model decides how much space an element takes on the page.

---

# Box Model Layers

```text
Margin
 └── Border
      └── Padding
           └── Content
```

---

# 1. Content

Content is the actual text, image, or element data.

Example:

```html
<div class="box">Hello World</div>
```

```css
.box {
  width: 200px;
  height: 100px;
}
```

Here, `width` and `height` define the content area.

---

# 2. Padding

Padding is the space inside the element.

It creates space between content and border.

```css
.box {
  padding: 20px;
}
```

Meaning:

Content gets inner spacing.

---

# 3. Border

Border wraps around padding and content.

```css
.box {
  border: 2px solid black;
}
```

---

# 4. Margin

Margin is the space outside the element.

It creates distance between elements.

```css
.box {
  margin: 20px;
}
```

---

# Full Example

```html
<div class="box">Box Model</div>
```

```css
.box {
  width: 200px;
  padding: 20px;
  border: 4px solid black;
  margin: 30px;
}
```

Total width:

```text
200 + 20 + 20 + 4 + 4 = 248px
```

Margin is outside spacing, so it affects layout space but not the actual box size.

---

# box-sizing

By default:

```css
box-sizing: content-box;
```

This means:

```text
width = only content width
```

Better modern practice:

```css
* {
  box-sizing: border-box;
}
```

Now:

```text
width = content + padding + border
```

This makes layout easier to control.

---

# content-box vs border-box

| Type        | Meaning                                   |
| ----------- | ----------------------------------------- |
| content-box | Width only includes content               |
| border-box  | Width includes content + padding + border |

---

# Recommended Setup

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

Use this in almost every modern project.

---

# Common Mistake

```css
.box {
  width: 300px;
  padding: 30px;
}
```

With default `content-box`, actual width becomes:

```text
300 + 30 + 30 = 360px
```

This can break layouts.

Use:

```css
box-sizing: border-box;
```

---

# Quick Summary

| Part    | Meaning               |
| ------- | --------------------- |
| Content | Actual data           |
| Padding | Space inside element  |
| Border  | Line around element   |
| Margin  | Space outside element |

---

# Final Notes

Box model is the foundation of CSS layout.

If you understand box model clearly, you can debug:

- spacing issues
- alignment problems
- layout overflow
- width and height bugs
