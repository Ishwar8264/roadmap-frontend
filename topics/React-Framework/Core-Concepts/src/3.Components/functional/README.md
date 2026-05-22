# React Components: Functional vs Class

## 1. What is a Component?

A **component** is a reusable piece of UI.

In React, we build the page using small components like:

- Header
- Button
- Card
- Profile
- Footer

Example:

```jsx
function App() {
  return (
    <div>
      <Header />
      <ProfileCard />
      <Footer />
    </div>
  );
}
```

Think of a component like a small block. Many blocks together create a complete UI.

---

## 2. Types of React Components

React has two main ways to create components:

1. Functional Component
2. Class Component

Modern React mostly uses **Functional Components**.

---

# Functional Components

## 3. What is a Functional Component?

A **functional component** is a normal JavaScript function that returns JSX.

```jsx
function Welcome() {
  return <h1>Welcome to React</h1>;
}

export default Welcome;
```

### Simple Meaning

A functional component is just a function that creates UI.

---

## 4. Functional Component Example

```jsx
function UserCard() {
  return (
    <div>
      <h2>Ishwar Kumar</h2>
      <p>Frontend Developer</p>
    </div>
  );
}

export default UserCard;
```

### How to use it

```jsx
import UserCard from "./UserCard";

function App() {
  return (
    <div>
      <UserCard />
    </div>
  );
}

export default App;
```

---

## 5. Functional Component with Props

**Props** are used to pass data from one component to another.

```jsx
function UserCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.role}</p>
    </div>
  );
}

export default UserCard;
```

### Use Component

```jsx
function App() {
  return (
    <div>
      <UserCard name="Ishwar Kumar" role="Frontend Developer" />
      <UserCard name="Rahul Sharma" role="Backend Developer" />
    </div>
  );
}

export default App;
```

### Better Way: Destructuring Props

```jsx
function UserCard({ name, role }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}

export default UserCard;
```

---

## 6. Functional Component with State

In functional components, we use the **useState** hook for state.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
```

### Explanation

```jsx
const [count, setCount] = useState(0);
```

- `count` stores the current value
- `setCount` updates the value
- `0` is the initial value

---

## 7. Functional Component with Event

```jsx
function LoginButton() {
  function handleLogin() {
    alert("Login button clicked");
  }

  return <button onClick={handleLogin}>Login</button>;
}

export default LoginButton;
```

---

## 8. Functional Component with useEffect

`useEffect` is used for side effects like:

- API calls
- document title update
- timers
- subscriptions

```jsx
import { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );
      const data = await response.json();
      setUsers(data);
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users List</h2>

      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;
```

### Explanation

```jsx
useEffect(() => {
  // code
}, []);
```

The empty array `[]` means this effect runs only once when the component loads.

# Functional vs Class Components

## 14. Difference Table

| Feature            | Functional Component | Class Component   |
| ------------------ | -------------------- | ----------------- |
| Syntax             | Simple function      | JavaScript class  |
| State              | `useState` hook      | `this.state`      |
| State update       | `setCount()`         | `this.setState()` |
| Side effects       | `useEffect`          | Lifecycle methods |
| Props access       | Direct props         | `this.props`      |
| Code size          | Less code            | More code         |
| Modern React       | Recommended          | Old style         |
| Easy to understand | Yes                  | Slightly harder   |

---

## 15. Same Counter Example: Functional vs Class

### Functional Component

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Counter;
```

### Class Component

```jsx
import React from "react";

class Counter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>

        <button onClick={this.increaseCount}>Increase</button>
      </div>
    );
  }
}

export default Counter;
```

---

# Modern Recommendation

## 16. Which One Should You Use?

Use **Functional Components**.

Modern React development uses functional components because:

- Simple syntax
- Less code
- Hooks support
- Better readability
- Easy to reuse logic
- Recommended for new projects

Class components are still found in old projects, but new React apps should use functional components.

---

# Best Practice Component Structure

## 17. Recommended Functional Component Style

```jsx
function ProductCard({ title, price, image }) {
  return (
    <article>
      <img src={image} alt={title} />

      <h2>{title}</h2>

      <p>Price: ₹{price}</p>

      <button>Add to Cart</button>
    </article>
  );
}

export default ProductCard;
```

### Why this is good?

- Component name is clear
- Props are simple
- JSX is readable
- Semantic HTML is used
- Component is reusable

---

## 18. Real Example: Button Component

```jsx
function Button({ children, onClick, type = "button" }) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
```

### Use Button

```jsx
import Button from "./Button";

function App() {
  function handleSave() {
    alert("Saved successfully");
  }

  return (
    <div>
      <Button onClick={handleSave}>Save</Button>
    </div>
  );
}

export default App;
```

---

## 19. Real Example: Profile Component

```jsx
function Profile({ name, role, location }) {
  return (
    <section>
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{location}</p>
    </section>
  );
}

export default Profile;
```

### Use Profile

```jsx
import Profile from "./Profile";

function App() {
  return (
    <div>
      <Profile name="Ishwar Kumar" role="Frontend Developer" location="India" />
    </div>
  );
}

export default App;
```

---

# Component Naming Rules

## 20. Important Rules

### Component name must start with capital letter

Correct:

```jsx
function Header() {
  return <h1>Header</h1>;
}
```

Wrong:

```jsx
function header() {
  return <h1>Header</h1>;
}
```

---

### Return only one parent element

Correct:

```jsx
function Card() {
  return (
    <div>
      <h2>Title</h2>
      <p>Description</p>
    </div>
  );
}
```

Wrong:

```jsx
function Card() {
  return (
    <h2>Title</h2>
    <p>Description</p>
  );
}
```

You can also use React Fragment:

```jsx
function Card() {
  return (
    <>
      <h2>Title</h2>
      <p>Description</p>
    </>
  );
}
```

---

# Final Summary

## Functional Component

```jsx
function ComponentName() {
  return <h1>Hello</h1>;
}
```

Best for modern React.

## Class Component

```jsx
class ComponentName extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

Old style, mostly used in legacy projects.

## Final Recommendation

For new React projects, always prefer:

```txt
Functional Components + Hooks
```
