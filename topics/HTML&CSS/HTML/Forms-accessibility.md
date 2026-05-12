# Forms & Accessibility in HTML

Accessible forms help:

- Screen reader users
- Keyboard users
- Mobile users
- Better SEO
- Better UX

Good accessibility is an important part of modern frontend development.

---

# Why Accessibility Matters

Without accessibility:

- Users may not understand forms
- Screen readers cannot identify fields
- Keyboard navigation breaks
- Error handling becomes confusing

Accessible forms create better user experience for everyone.

---

# 1. Labels in Forms

The `<label>` element connects text with form inputs.

## Correct Example

```html
<label for="email">Email</label>

<input type="email" id="email" name="email" />
```

## How it Works

- `for="email"` connects to:
- `id="email"`

When user clicks label:

- input automatically focuses

---

# Why Labels are Important

## Accessibility

Screen readers announce:

```txt
Email, edit text
```

instead of only:

```txt
edit text
```

## Better UX

Users can click label text to focus input.

---

# Incorrect Example

```html
<input type="text" placeholder="Enter Name" />
```

❌ Placeholder is NOT a label.

---

# Correct Example

```html
<label for="name">Name</label>

<input id="name" type="text" />
```

---

# 2. ARIA (Accessible Rich Internet Applications)

ARIA helps screen readers understand UI elements.

ARIA attributes improve accessibility when native HTML is not enough.

---

# Common ARIA Attributes

| Attribute        | Purpose                    |
| ---------------- | -------------------------- |
| aria-label       | Adds accessible name       |
| aria-hidden      | Hides from screen readers  |
| aria-required    | Marks required field       |
| aria-invalid     | Marks invalid input        |
| aria-describedby | Connects helper/error text |
| role             | Defines element role       |

---

# 3. `aria-label`

Used when visible label does not exist.

## Example

```html
<button aria-label="Close Menu">X</button>
```

Screen reader says:

```txt
Close Menu button
```

---

# 4. `aria-required`

Tells screen readers field is required.

## Example

```html
<input type="email" aria-required="true" />
```

---

# 5. `aria-invalid`

Used for validation errors.

## Example

```html
<input type="email" aria-invalid="true" />
```

Screen readers understand:

- input currently has error

---

# 6. `aria-describedby`

Connects helper or error message.

## Example

```html
<label for="password">Password</label>

<input id="password" type="password" aria-describedby="password-help" />

<p id="password-help">Password must contain 8 characters.</p>
```

---

# 7. Accessible Form Example

```html
<form>
  <div>
    <label for="email"> Email Address </label>

    <input id="email" type="email" name="email" required aria-required="true" />
  </div>

  <div>
    <label for="password"> Password </label>

    <input id="password" type="password" aria-describedby="password-note" />

    <small id="password-note"> Minimum 8 characters </small>
  </div>

  <button type="submit">Login</button>
</form>
```

---

# 8. Fieldset & Legend

Used for grouped inputs like radio buttons.

## Example

```html
<fieldset>
  <legend>Select Gender</legend>

  <label>
    <input type="radio" name="gender" />
    Male
  </label>

  <label>
    <input type="radio" name="gender" />
    Female
  </label>
</fieldset>
```

---

# 9. Keyboard Accessibility

Forms should work fully using keyboard.

Users should navigate with:

- Tab
- Shift + Tab
- Enter
- Space

---

# Important Accessibility Rules

## ✅ Use semantic HTML

```html
<button>Save</button>
```

❌ Avoid:

```html
<div>Save</div>
```

---

## ✅ Always connect labels

```html
<label for="name">Name</label> <input id="name" />
```

---

## ✅ Show visible focus states

```css
input:focus {
  outline: 2px solid blue;
}
```

---

# 10. Screen Reader Friendly Buttons

## Bad Example

```html
<button>🔍</button>
```

❌ Screen reader does not know meaning.

---

## Good Example

```html
<button aria-label="Search">🔍</button>
```

---

# 11. Error Accessibility

## Example

```html
<input aria-invalid="true" aria-describedby="email-error" />

<p id="email-error">Invalid email address</p>
```

---

# 12. Placeholder vs Label

| Placeholder             | Label                  |
| ----------------------- | ---------------------- |
| Temporary hint          | Permanent identifier   |
| Disappears while typing | Always visible         |
| Not accessible enough   | Accessibility friendly |

---

# 13. Accessibility Best Practices

## Always:

✅ Use labels  
✅ Use semantic HTML  
✅ Support keyboard navigation  
✅ Use proper button elements  
✅ Use ARIA only when necessary  
✅ Maintain focus visibility

---

# 14. Common Mistakes

## ❌ Missing labels

```html
<input type="text" />
```

---

## ❌ Clickable div

```html
<div onclick="submit()">Submit</div>
```

---

## ❌ Placeholder as label

```html
<input placeholder="Email" />
```

---

# 15. Modern React / Next.js Accessibility Example

```tsx
export default function LoginForm() {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>

        <input
          id="email"
          type="email"
          className="border p-2 rounded"
          aria-required="true"
        />
      </div>

      <button type="submit" className="rounded bg-black text-white px-4 py-2">
        Login
      </button>
    </form>
  );
}
```

---

# Visual Structure

```txt
Form
 ├── Label
 ├── Input
 ├── Helper Text
 ├── Error Message
 └── Submit Button
```

---

# Benefits of Accessible Forms

| Benefit          | Description           |
| ---------------- | --------------------- |
| Better UX        | Easy for all users    |
| Accessibility    | Supports disabilities |
| SEO              | Better structure      |
| Professional UI  | Industry standard     |
| Keyboard Support | Faster navigation     |

---

# Conclusion

Accessible forms are essential for:

- Professional frontend development
- Better UX
- Inclusive design
- Modern web standards

Good accessibility improves experience for everyone.
