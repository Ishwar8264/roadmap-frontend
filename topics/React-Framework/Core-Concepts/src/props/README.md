# React Props

## What are Props?

**Props** means **properties**.

In React, props are used to pass data from a **Parent Component** to a **Child Component**.

Simple flow:

```txt
Parent Component  --->  Child Component
        data is passed using props
```

Example:

```tsx
<UserCard name="Ishwar" age={24} />
```

Here:

- `name` is a prop
- `age` is a prop
- `"Ishwar"` and `24` are prop values

---

## Why do we use Props?

Props help us make components **reusable**.

When the design is the same but the data is different, props are very useful.

Example:

```tsx
<UserCard name="Ishwar" age={24} />
<UserCard name="Rahul" age={22} />
<UserCard name="Amit" age={25} />
```

The same `UserCard` component is reused with different data.

---

## Basic Props Example

```tsx
type UserCardProps = {
  name: string;
  age: number;
};

function UserCard(props: UserCardProps) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <UserCard name="Ishwar" age={24} />
      <UserCard name="Rahul" age={22} />
    </div>
  );
}
```

### Explanation

The parent component sends data:

```tsx
<UserCard name="Ishwar" age={24} />
```

The child component receives data:

```tsx
props.name;
props.age;
```

---

## Cleaner Way: Destructuring Props

In modern React, destructuring props is cleaner.

```tsx
type UserCardProps = {
  name: string;
  age: number;
};

function UserCard({ name, age }: UserCardProps) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <UserCard name="Ishwar" age={24} />
      <UserCard name="Rahul" age={22} />
    </div>
  );
}
```

Now we do not need to write `props.name` or `props.age` again and again.

---

## Optional Props

Sometimes a prop is not required.

In TypeScript, optional props are defined using `?`.

```tsx
type UserCardProps = {
  name: string;
  age: number;
  role?: string;
};
```

Here, `role` is optional.

Example:

```tsx
type UserCardProps = {
  name: string;
  age: number;
  role?: string;
};

function UserCard({ name, age, role }: UserCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>

      {role && <p>Role: {role}</p>}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <UserCard name="Ishwar" age={24} role="Frontend Developer" />
      <UserCard name="Rahul" age={22} />
    </div>
  );
}
```

### Explanation

```tsx
{
  role && <p>Role: {role}</p>;
}
```

This means:

```txt
If role exists, show it.
If role does not exist, do not show anything.
```

---

## Default Prop Value

We can also give a default value to an optional prop.

```tsx
type UserCardProps = {
  name: string;
  age: number;
  role?: string;
};

function UserCard({ name, age, role = "User" }: UserCardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <UserCard name="Ishwar" age={24} role="Frontend Developer" />
      <UserCard name="Rahul" age={22} />
    </div>
  );
}
```

If the parent does not pass `role`, then `"User"` will be displayed.

---

## Boolean Props

Boolean props are used for `true` or `false` values.

```tsx
type ButtonProps = {
  label: string;
  disabled?: boolean;
};

function Button({ label, disabled = false }: ButtonProps) {
  return <button disabled={disabled}>{label}</button>;
}

export default function App() {
  return (
    <div>
      <Button label="Save" />
      <Button label="Submit" disabled />
    </div>
  );
}
```

This:

```tsx
<Button label="Submit" disabled />
```

is the same as:

```tsx
<Button label="Submit" disabled={true} />
```

---

## Function as Props

A parent component can also pass a function to a child component.

```tsx
type ButtonProps = {
  label: string;
  onClick: () => void;
};

function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}

export default function App() {
  const handleClick = () => {
    alert("Button clicked");
  };

  return (
    <div>
      <Button label="Click Me" onClick={handleClick} />
    </div>
  );
}
```

### Explanation

The parent passes the function:

```tsx
<Button label="Click Me" onClick={handleClick} />
```

The child receives the function:

```tsx
function Button({ label, onClick }: ButtonProps);
```

The child uses the function on button click:

```tsx
<button onClick={onClick}>
```

---

## Children Props

`children` means the content written between the opening and closing tags of a component.

Example:

```tsx
<Card>
  <h2>Hello Ishwar</h2>
  <p>This is inside the card.</p>
</Card>
```

Everything inside `<Card>...</Card>` is called `children`.

```tsx
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

function Card({ children }: CardProps) {
  return <div className="rounded-xl border p-4 shadow-sm">{children}</div>;
}

export default function App() {
  return (
    <Card>
      <h2 className="text-lg font-semibold">Hello Ishwar</h2>
      <p className="text-sm text-gray-600">
        This content is passed using children prop.
      </p>
    </Card>
  );
}
```

---

## Object as Props

Sometimes data is passed as an object.

```tsx
type User = {
  id: number;
  name: string;
  email: string;
};

type UserCardProps = {
  user: User;
};

function UserCard({ user }: UserCardProps) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export default function App() {
  const user = {
    id: 1,
    name: "Ishwar",
    email: "ishwar@example.com",
  };

  return <UserCard user={user} />;
}
```

---

## Array as Props

Array data can also be passed using props.

```tsx
type User = {
  id: number;
  name: string;
};

type UserListProps = {
  users: User[];
};

function UserList({ users }: UserListProps) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default function App() {
  const users = [
    { id: 1, name: "Ishwar" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Amit" },
  ];

  return <UserList users={users} />;
}
```

When rendering a list, always use a `key`.

```tsx
<li key={user.id}>{user.name}</li>
```

---

## Props in Class Component

In class components, props are accessed using `this.props`.

```tsx
import React from "react";

type UserCardProps = {
  name: string;
  age: number;
};

class UserCard extends React.Component<UserCardProps> {
  render() {
    return (
      <div>
        <h2>Name: {this.props.name}</h2>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}

export default function App() {
  return (
    <div>
      <UserCard name="Ishwar" age={24} />
    </div>
  );
}
```

Important line:

```tsx
class UserCard extends React.Component<UserCardProps>
```

This tells TypeScript that this component receives `name` and `age` as props.

---

## Common TypeScript Error

### Error

```txt
Property 'name' does not exist on type 'Readonly<{}>'
```

### Reason

You did not define the props type in the class component.

Wrong:

```tsx
class UserCard extends React.Component {
  render() {
    return <h2>{this.props.name}</h2>;
  }
}
```

Correct:

```tsx
type UserCardProps = {
  name: string;
};

class UserCard extends React.Component<UserCardProps> {
  render() {
    return <h2>{this.props.name}</h2>;
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

## Important Rules of Props

1. Props are passed from parent to child.
2. Props are read-only.
3. A child component should not directly change props.
4. Props make components reusable.
5. In TypeScript, always define prop types.
6. Use `?` for optional props.
7. Use default values when needed.
8. Use `children` when a component wraps content.

---

## One-Line Definition

**Props are read-only data passed from a parent component to a child component to make components reusable.**
