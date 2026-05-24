import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

function Card({ children }: CardProps) {
  return (
    <section className="rounded-2xl border bg-white p-5 shadow-sm">
      {children}
    </section>
  );
}

type CardHeaderProps = {
  title: string;
  description?: string;
};

function CardHeader({ title, description }: CardHeaderProps) {
  return (
    <div className="space-y-1">
      <h2 className="text-xl font-semibold text-gray-900">{title}</h2>

      {description && <p className="text-sm text-gray-600">{description}</p>}
    </div>
  );
}

type CardContentProps = {
  children: ReactNode;
};

function CardContent({ children }: CardContentProps) {
  return <div className="mt-4 space-y-3">{children}</div>;
}

type CardFooterProps = {
  children: ReactNode;
};

function CardFooter({ children }: CardFooterProps) {
  return (
    <div className="mt-5 flex items-center justify-end gap-3 border-t pt-4">
      {children}
    </div>
  );
}

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

function Button({ children, variant = "primary" }: ButtonProps) {
  const buttonClass =
    variant === "primary"
      ? "bg-black text-white"
      : "border bg-white text-gray-900";

  return (
    <button
      className={`rounded-lg px-4 py-2 text-sm font-medium ${buttonClass}`}
    >
      {children}
    </button>
  );
}

function ProfileCard() {
  return (
    <Card>
      <CardHeader title="Ishwar Sahani" description="Frontend Developer" />

      <CardContent>
        <p className="text-sm text-gray-700">
          I build clean, reusable, and scalable React components using
          TypeScript and Tailwind CSS.
        </p>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
            React
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
            TypeScript
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
            Next.js
          </span>
        </div>
      </CardContent>

      <CardFooter>
        <Button variant="secondary">Cancel</Button>
        <Button>View Profile</Button>
      </CardFooter>
    </Card>
  );
}

function CourseCard() {
  return (
    <Card>
      <CardHeader
        title="React Basics"
        description="Learn props, state, hooks, and component composition."
      />

      <CardContent>
        <ul className="list-inside list-disc text-sm text-gray-700">
          <li>Props</li>
          <li>State</li>
          <li>Children</li>
          <li>Composition</li>
        </ul>
      </CardContent>

      <CardFooter>
        <Button>Start Learning</Button>
      </CardFooter>
    </Card>
  );
}

export default function CompositionExample() {
  return (
    <main className="mx-auto max-w-3xl space-y-6 p-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">
          Component Composition and Children
        </h1>

        <p className="text-gray-600">
          This example shows how small components can be combined together using
          the children prop.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ProfileCard />
        <CourseCard />
      </div>
    </main>
  );
}
