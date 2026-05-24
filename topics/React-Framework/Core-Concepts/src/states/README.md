# React State

## What is State?

**State** is data inside a React component that can change over time.

Simple meaning:

```txt
State = component's own changeable data
```

Example:

```tsx
const [count, setCount] = useState(0);
```

Here:

- `count` is the state value
- `setCount` is the function used to update the state
- `0` is the initial value

---

## Why do we use State?

State is used when the UI needs to update based on changing data.

Examples:

- Counter increase/decrease
- Form input value
- Modal open/close
- Dropdown show/hide
- Loading state
- API data
- Dark/light mode toggle

When state updates, React re-renders the component.

```txt
State changes
     ↓
Component re-renders
     ↓
UI updates
```

---

## Basic Counter Example

```tsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

### Explanation

```tsx
const [count, setCount] = useState(0);
```

- `count` stores the current value
- `setCount` updates the value
- `useState(0)` sets the initial value to `0`

```tsx
setCount(count + 1);
```

This increases the current count by `1`.

---

## useState Syntax

```tsx
const [stateValue, setStateValue] = useState(initialValue);
```

Example:

```tsx
const [name, setName] = useState("Ishwar");
```

Here:

- `name` is the state value
- `setName` is the state update function
- `"Ishwar"` is the initial value

---

## State with String

```tsx
import { useState } from "react";

export default function UserName() {
  const [name, setName] = useState("Ishwar");

  return (
    <div>
      <h2>Name: {name}</h2>

      <button onClick={() => setName("Rahul")}>Change Name</button>
    </div>
  );
}
```

### Flow

```txt
Initial name = Ishwar
Button clicked
setName("Rahul")
UI updates
Name becomes Rahul
```

---

## State with Number

```tsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>

      <button onClick={() => setCount(count - 1)}>Decrease</button>

      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}
```

---

## State with Boolean

Boolean state is used for `true` or `false` values.

Example: show or hide content.

```tsx
import { useState } from "react";

export default function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Message</button>

      {isVisible && <p>Hello Ishwar!</p>}
    </div>
  );
}
```

### Explanation

```tsx
const [isVisible, setIsVisible] = useState(false);
```

The initial value is `false`, so the message is hidden.

```tsx
setIsVisible(!isVisible);
```

If the value is `false`, it becomes `true`.  
If the value is `true`, it becomes `false`.

---

## State with Input

We can store form input values in state.

```tsx
import { useState } from "react";

export default function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(event) => setName(event.target.value)}
      />

      <p>Your name is: {name}</p>
    </div>
  );
}
```

### Explanation

```tsx
value = { name };
```

The input value is controlled by state.

```tsx
onChange={(event) => setName(event.target.value)}
```

Whatever the user types is saved in state.

---

## State with TypeScript

TypeScript can automatically understand the state type.

```tsx
const [count, setCount] = useState(0);
```

Here, TypeScript understands that `count` is a number.

You can also define the type manually.

```tsx
const [name, setName] = useState<string>("");
const [age, setAge] = useState<number>(0);
const [isOpen, setIsOpen] = useState<boolean>(false);
```

---

## State with Object

Object data can also be stored in state.

```tsx
import { useState } from "react";

type User = {
  name: string;
  email: string;
};

export default function UserProfile() {
  const [user, setUser] = useState<User>({
    name: "Ishwar",
    email: "ishwar@example.com",
  });

  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>

      <button
        onClick={() =>
          setUser({
            ...user,
            name: "Rahul",
          })
        }
      >
        Change Name
      </button>
    </div>
  );
}
```

### Important

When updating object state, preserve the previous values.

```tsx
setUser({
  ...user,
  name: "Rahul",
});
```

`...user` copies the old object data and only updates the `name`.

---

## State with Array

Array data can also be stored in state.

```tsx
import { useState } from "react";

type Todo = {
  id: number;
  text: string;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn Props" },
    { id: 2, text: "Learn State" },
  ]);

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: "New Todo",
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
```

### Important

Do not directly push items into a state array.

Wrong:

```tsx
todos.push(newTodo);
setTodos(todos);
```

Correct:

```tsx
setTodos([...todos, newTodo]);
```

---

## Updating State Based on Previous State

When the new state depends on the previous state, use the callback form.

```tsx
setCount((prevCount) => prevCount + 1);
```

Better counter example:

```tsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}
```

### Why is this better?

React state updates can be batched.

So when the new value depends on the previous value, the callback form is safer.

---

## Multiple State Values

A component can have multiple state values.

```tsx
import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);

    console.log({
      email,
      password,
    });
  };

  return (
    <div>
      <input
        value={email}
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
      />

      <input
        value={password}
        placeholder="Password"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />

      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? "Loading..." : "Login"}
      </button>
    </div>
  );
}
```

---

## State for Modal Open and Close

```tsx
import { useState } from "react";

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <div>
          <h2>Modal Title</h2>
          <p>This is modal content.</p>

          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </div>
  );
}
```

---

## State in Class Component

In class components, state is stored as an object.

```tsx
import React from "react";

type CounterState = {
  count: number;
};

class Counter extends React.Component<object, CounterState> {
  constructor(props: object) {
    super(props);

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

### Important Line

```tsx
class Counter extends React.Component<object, CounterState>
```

Inside `React.Component`:

```tsx
React.Component<PropsType, StateType>;
```

Here, there are no props, so `object` is used.  
The state type is `CounterState`.

---

## Class Component with Props and State

```tsx
import React from "react";

type CounterProps = {
  title: string;
};

type CounterState = {
  count: number;
};

class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increaseCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>Count: {this.state.count}</p>

        <button onClick={this.increaseCount}>Increase</button>
      </div>
    );
  }
}

export default function App() {
  return <Counter title="My Counter" />;
}
```

---

## Common TypeScript Error in Class State

### Error

```txt
Property 'count' does not exist on type 'Readonly<{}>'
```

### Reason

You did not define the state type.

Wrong:

```tsx
class Counter extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return <h2>{this.state.count}</h2>;
  }
}
```

Correct:

```tsx
type CounterState = {
  count: number;
};

class Counter extends React.Component<object, CounterState> {
  state: CounterState = {
    count: 0,
  };

  render() {
    return <h2>{this.state.count}</h2>;
  }
}
```

---

## Props vs State

| Props                                  | State                                   |
| -------------------------------------- | --------------------------------------- |
| Data is passed from parent to child    | Data is managed inside the component    |
| Props are read-only                    | State can be updated                    |
| Props make components reusable         | State makes UI dynamic                  |
| Child should not directly modify props | Component can update its own state      |
| Example: `name`, `title`, `age`        | Example: `count`, `isOpen`, `isLoading` |

---

## Props and State Together

```tsx
import { useState } from "react";

type CounterProps = {
  title: string;
};

function Counter({ title }: CounterProps) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{title}</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </div>
  );
}

export default function App() {
  return <Counter title="My Counter" />;
}
```

### Explanation

```tsx
title;
```

comes from props.

```tsx
count;
```

is managed inside the component using state.

---

## Important Rules of State

1. State is managed inside the component.
2. When state changes, the component re-renders.
3. Do not update state directly.
4. Use the setter function to update state.
5. When updating objects, use the spread operator.
6. When updating arrays, create a new array.
7. When the new state depends on the previous state, use the callback form.
8. Keep state as simple as possible.

---

## Wrong vs Correct State Update

Wrong:

```tsx
count = count + 1;
```

Correct:

```tsx
setCount(count + 1);
```

---

Wrong object update:

```tsx
user.name = "Rahul";
setUser(user);
```

Correct object update:

```tsx
setUser({
  ...user,
  name: "Rahul",
});
```

---

Wrong array update:

```tsx
todos.push(newTodo);
setTodos(todos);
```

Correct array update:

```tsx
setTodos([...todos, newTodo]);
```

---

## Real-Life Example

Think of a light switch.

```txt
Switch OFF = false
Switch ON = true
```

In React:

```tsx
const [isOn, setIsOn] = useState(false);
```

On button click:

```tsx
setIsOn(!isOn);
```

The state changes and the UI updates.

---

## Quick Revision

```tsx
const [count, setCount] = useState(0);
```

Meaning:

```txt
count = current state value
setCount = state update function
0 = initial value
```

Update:

```tsx
setCount(count + 1);
```

Better update:

```tsx
setCount((prevCount) => prevCount + 1);
```

---

## One-Line Definition

**State is a component’s own changeable data that controls how the UI looks and behaves.**
