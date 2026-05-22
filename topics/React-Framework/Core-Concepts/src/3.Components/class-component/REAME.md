# Class Components

## 9. What is a Class Component?

A **class component** is created using JavaScript class syntax.

Before React Hooks, class components were commonly used for state and lifecycle methods.

```jsx
import React from "react";

class Welcome extends React.Component {
  render() {
    return <h1>Welcome to React</h1>;
  }
}

export default Welcome;
```

### Simple Meaning

A class component is a class that extends `React.Component` and must have a `render()` method.

---

## 10. Class Component Example

```jsx
import React from "react";

class UserCard extends React.Component {
  render() {
    return (
      <div>
        <h2>Ishwar Kumar</h2>
        <p>Frontend Developer</p>
      </div>
    );
  }
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

## 11. Class Component with Props

```jsx
import React from "react";

class UserCard extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.role}</p>
      </div>
    );
  }
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

### Important

In class components, props are accessed using:

```jsx
this.props;
```

---

## 12. Class Component with State

In class components, state is created inside the constructor.

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

### Explanation

```jsx
this.state = {
  count: 0,
};
```

This creates state.

```jsx
this.setState({
  count: this.state.count + 1,
});
```

This updates state.

---

## 13. Class Component Lifecycle Method

Class components use lifecycle methods.

Example: `componentDidMount`

```jsx
import React from "react";

class Users extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          users: data,
        });
      });
  }

  render() {
    return (
      <div>
        <h2>Users List</h2>

        {this.state.users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    );
  }
}

export default Users;
```

### Explanation

`componentDidMount()` runs after the component is shown on the screen.

In functional components, we use `useEffect()` instead.
