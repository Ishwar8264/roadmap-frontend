type UserCardProps = {
  name: string;
  age: number;
  role?: string;
};

function UserCard({ name, age, role = "User" }: UserCardProps) {
  return (
    <div className="rounded-lg border p-4">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p>Age: {age}</p>
      <p>Role: {role}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="space-y-4">
      <UserCard name="Ishwar" age={24} role="Frontend Developer" />

      <UserCard name="Amit" age={21} />
    </div>
  );
}
