//? type (Type alias – flexible & powerful)

type User1 = {
  id: string;
  name: string;
};

type Status = "pending" | "success" | "error";
const stat: Status = "success"; // valid

//* Union + Intersection

type A = { name: string };
type B = { age: number };

type Person = A & B; // combine

const p: Person = {
  name: "Ishwar",
  age: 22,
};

//* Function type

type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
