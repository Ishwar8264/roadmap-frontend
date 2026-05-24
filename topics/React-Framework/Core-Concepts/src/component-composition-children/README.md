# Component Composition and Children in React

## 1. What is Component Composition?

**Component composition** means building a UI by combining small reusable components.

Simple meaning:

```txt
Small components + Small components = Big UI
```

Instead of writing one large component, we break the UI into smaller components and combine them together.

Example:

```tsx
<Card>
  <CardHeader />
  <CardContent />
  <CardFooter />
</Card>
```

This is called composition.

---

## 2. What is `children` in React?

`children` is a special prop in React.

It represents the content written between the opening and closing tags of a component.

Example:

```tsx
<Card>
  <h2>Hello Ishwar</h2>
  <p>This content is passed as children.</p>
</Card>
```

Here, this part is `children`:

```tsx
<h2>Hello Ishwar</h2>
<p>This content is passed as children.</p>
```

---

## 3. Basic Children Example

```tsx
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

function Card({ children }: CardProps) {
  return <div className="rounded-xl border p-4">{children}</div>;
}

export default function App() {
  return (
    <Card>
      <h2>Hello Ishwar</h2>
      <p>This is inside the card.</p>
    </Card>
  );
}
```

### Explanation

The `Card` component receives content using `children`.

```tsx
function Card({ children }: CardProps);
```

Then it renders the content here:

```tsx
{
  children;
}
```

---

## 4. Why do we use Component Composition?

Component composition helps us write clean and reusable code.

Benefits:

1. Components become smaller.
2. Code becomes easier to read.
3. UI becomes reusable.
4. Components become flexible.
5. We avoid too many props.
6. We can build complex UI from simple parts.

---

## 5. Problem Without Composition

Without composition, we may create one large component with many props.

```tsx
type CardProps = {
  title: string;
  description: string;
  content: string;
  buttonText: string;
  showFooter: boolean;
  showBadge: boolean;
};
```

This can become messy.

The component becomes hard to maintain because it is trying to handle too many things.

---

## 6. Better Approach with Composition

Instead of passing too many props, we can compose UI like this:

```tsx
<Card>
  <CardHeader title="React Basics" />
  <CardContent>
    <p>Learn props, state, and hooks.</p>
  </CardContent>
  <CardFooter>
    <Button>Start Learning</Button>
  </CardFooter>
</Card>
```

This is cleaner and easier to understand.

---

## 7. Full Example

```tsx
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

function Card({ children }: CardProps) {
  return (
    <section className="rounded-2xl border p-5 shadow-sm">{children}</section>
  );
}

type CardHeaderProps = {
  title: string;
  description?: string;
};

function CardHeader({ title, description }: CardHeaderProps) {
  return (
    <div>
      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}

type CardContentProps = {
  children: ReactNode;
};

function CardContent({ children }: CardContentProps) {
  return <div>{children}</div>;
}

type CardFooterProps = {
  children: ReactNode;
};

function CardFooter({ children }: CardFooterProps) {
  return <div>{children}</div>;
}

export default function App() {
  return (
    <Card>
      <CardHeader
        title="React Basics"
        description="Learn React step by step."
      />

      <CardContent>
        <p>This course covers props, state, hooks, and composition.</p>
      </CardContent>

      <CardFooter>
        <button>Start Learning</button>
      </CardFooter>
    </Card>
  );
}
```

---

## 8. Composition Flow

```txt
App component
     ↓
Card component
     ↓
CardHeader + CardContent + CardFooter
     ↓
Final UI
```

The parent decides what to put inside the component.

The child component only controls layout and styling.

---

## 9. Props vs Children

| Props                                    | Children                                      |
| ---------------------------------------- | --------------------------------------------- |
| Used to pass specific data               | Used to pass JSX/content                      |
| Example: `title="React"`                 | Example: `<Card>Content</Card>`               |
| Good for small values                    | Good for flexible UI                          |
| Component controls where props are used  | Parent controls what content goes inside      |
| Used for text, number, boolean, function | Used for elements, components, layout content |

---

## 10. Props Example

```tsx
function UserCard({ name }: { name: string }) {
  return <h2>{name}</h2>;
}

export default function App() {
  return <UserCard name="Ishwar" />;
}
```

Here, `name` is passed as a prop.

---

## 11. Children Example

```tsx
function Card({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export default function App() {
  return (
    <Card>
      <h2>Ishwar</h2>
      <p>Frontend Developer</p>
    </Card>
  );
}
```

Here, the content inside `<Card>...</Card>` is passed as `children`.

---

## 12. Real-Life Example

Think of a photo frame.

The frame design is fixed.

But the photo inside can change.

```txt
Card = Frame
Children = Photo/content inside the frame
```

Example:

```tsx
<Card>
  <ProfileInfo />
</Card>
```

Another example:

```tsx
<Card>
  <CourseInfo />
</Card>
```

Same `Card` component, different children.

---

## 13. When to Use Children?

Use `children` when:

1. A component should wrap other content.
2. The parent should decide what goes inside.
3. You want a reusable layout component.
4. You want flexible UI.
5. You want to avoid too many props.

Good examples:

```tsx
<Card>...</Card>
<Modal>...</Modal>
<Layout>...</Layout>
<Button>Save</Button>
<Sidebar>...</Sidebar>
```

---

## 14. Component Composition Example

```tsx
function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <header>Navbar</header>

      <section>{children}</section>

      <footer>Footer</footer>
    </main>
  );
}

export default function App() {
  return (
    <Layout>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard.</p>
    </Layout>
  );
}
```

Here, `Layout` controls the page structure.

The page content is passed using `children`.

---

## 15. Button with Children

Buttons commonly use children.

```tsx
type ButtonProps = {
  children: ReactNode;
};

function Button({ children }: ButtonProps) {
  return (
    <button className="rounded bg-black px-4 py-2 text-white">
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <Button>Save</Button>
      <Button>Delete</Button>
      <Button>Submit</Button>
    </div>
  );
}
```

Here, button text is passed as `children`.

---

## 16. Common Mistake

### Mistake: Forgetting to render children

Wrong:

```tsx
function Card({ children }: { children: ReactNode }) {
  return <div className="border p-4"></div>;
}
```

The content will not show because `{children}` is missing.

Correct:

```tsx
function Card({ children }: { children: ReactNode }) {
  return <div className="border p-4">{children}</div>;
}
```

---

## 17. Common Mistake: Using Too Many Props

Avoid this when UI becomes flexible and complex:

```tsx
<Card
  title="React Basics"
  description="Learn React"
  footerButtonText="Start"
  showFooter
  showIcon
/>
```

Better:

```tsx
<Card>
  <CardHeader title="React Basics" description="Learn React" />
  <CardContent>
    <p>Course content here.</p>
  </CardContent>
  <CardFooter>
    <Button>Start</Button>
  </CardFooter>
</Card>
```

Composition makes the UI easier to extend.

---

## 18. Best Practices

1. Use `children` for wrapper components.
2. Keep components small and focused.
3. Use props for specific values.
4. Use children for flexible content.
5. Avoid creating one huge component.
6. Compose small components together.
7. Type `children` using `ReactNode`.
8. Prefer readable component structure.

---

## 19. Quick Revision

```tsx
function Card({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
```

Usage:

```tsx
<Card>
  <h2>Hello</h2>
  <p>This is children content.</p>
</Card>
```

Flow:

```txt
Parent passes JSX inside Card
        ↓
Card receives it as children
        ↓
Card renders children
```

---

## 20. One-Line Definition

**Component composition means building UI by combining small reusable components, and `children` is used to pass flexible content inside a component.**
