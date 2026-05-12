# Semantic HTML Elements

Semantic HTML elements clearly describe the meaning of content.

They improve:

- SEO
- Accessibility
- Readability
- Maintainability

---

# What is Semantic HTML?

Semantic tags tell the browser what the content actually means.

Example:

- `<header>` → top section
- `<section>` → grouped content
- `<article>` → standalone content
- `<footer>` → bottom area

---

# 1. `<header>`

The `<header>` element represents the top section of a page or section.

Usually contains:

- Logo
- Navigation
- Heading
- Search bar

## Example

```html
<header>
  <h1>My Portfolio</h1>

  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/projects">Projects</a>
  </nav>
</header>
```

## Best Use Cases

- Website top navbar
- Section heading
- Article heading

---

# 2. `<section>`

The `<section>` element groups related content together.

A section should usually contain a heading.

## Example

```html
<section>
  <h2>About Me</h2>

  <p>I am a frontend developer working with Next.js.</p>
</section>
```

## Best Use Cases

- About section
- Services section
- Contact section
- Features section

---

# 3. `<article>`

The `<article>` element represents independent or reusable content.

It should make sense even outside the page.

## Example

```html
<article>
  <h2>React 19 Features</h2>

  <p>React 19 introduces rendering improvements.</p>
</article>
```

## Best Use Cases

- Blog post
- News article
- Product card
- User comment
- Forum post

---

# Difference Between `<section>` and `<article>`

| Section                   | Article                   |
| ------------------------- | ------------------------- |
| Groups related content    | Independent content       |
| Depends on page           | Can exist alone           |
| Used for layout structure | Used for reusable content |

---

# 4. `<footer>`

The `<footer>` element represents the bottom section.

Usually contains:

- Copyright
- Social links
- Privacy policy
- Contact information

## Example

```html
<footer>
  <p>© 2026 My Website</p>

  <a href="/privacy">Privacy Policy</a>
</footer>
```

---

# Full Semantic HTML Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>Semantic HTML</title>
  </head>

  <body>
    <header>
      <h1>My Blog</h1>

      <nav>
        <a href="/">Home</a>
        <a href="/blogs">Blogs</a>
      </nav>
    </header>

    <main>
      <section>
        <h2>Latest Posts</h2>

        <article>
          <h3>Learning React</h3>

          <p>React helps developers build modern user interfaces.</p>
        </article>

        <article>
          <h3>Learning Next.js</h3>

          <p>Next.js provides SSR and routing features.</p>
        </article>
      </section>
    </main>

    <footer>
      <p>© 2026 My Blog</p>
    </footer>
  </body>
</html>
```

---

# Visual Structure

```txt
<body>

 ├── <header>
 │      Logo + Navigation
 │
 ├── <main>
 │
 │    ├── <section>
 │    │      Related Content
 │    │
 │    │    ├── <article>
 │    │    └── <article>
 │
 └── <footer>
        Bottom Content
```

---

# Benefits of Semantic HTML

| Benefit              | Description                         |
| -------------------- | ----------------------------------- |
| Better SEO           | Search engines understand structure |
| Accessibility        | Screen readers work better          |
| Cleaner Code         | Easy to maintain                    |
| Better Collaboration | Developers understand layout faster |

---

# Common Mistakes

## ❌ Using div for everything

```html
<div>
  <div>
    <div>Content</div>
  </div>
</div>
```

## ✅ Using semantic tags

```html
<header></header>

<section></section>

<article></article>

<footer></footer>
```

---

# Best Practices

- Use semantic elements properly
- Keep structure clean
- Use headings inside sections
- Avoid unnecessary div nesting
- Improve accessibility

---

# Conclusion

Semantic HTML helps create:

- Clean structure
- Better SEO
- Accessible websites
- Professional codebase

It is an important foundation for modern frontend development.
