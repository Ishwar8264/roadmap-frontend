# React Context API

Context API is a React feature used to share data between components without passing props manually at every level.

It helps solve the problem called **prop drilling**.

---

## What is Prop Drilling?

Prop drilling means passing data from parent to child, then child to another child, and so on.

Example:

```tsx
<App theme={theme}>
  <Layout theme={theme}>
    <Navbar theme={theme}>
      <Button theme={theme} />
    </Navbar>
  </Layout>
</App>
```
