//? Utility types are ready-made TypeScript helpers.

type User = {
  name: string;
  email: string;
};

type UpdateUser = Partial<User>;

//? means
// type UpdateUser = {
//   name?: string;
//   email?: string;
// };

//! Use case: edit form/update API.

//? Pick<T, K>
//? Pick only selected fields.

type UserPreview = Pick<User, "name">;
//! means
// type UserPreview = {
//   name: string;
// };

// Use case: card/list UI.

//? Omit<T, K>

//? Remove selected fields.

type CreateUser = Omit<User, "id">;

// const user: ReadonlyUser = {
//   name: "Ishwar",
//   email: "test@gmail.com",
// };

// user.name = "New"; ❌ error

//? Mapped Types

//? Mapped type means:
//? create new type by looping over keys of another type.

// type User = {
//   name: string;
//   email: string;
// };

//? Make all fields boolean:

type UserPermissions = {
  [Key in keyof User]: boolean;
};

//? Means:

// type UserPermissions = {
//   name: boolean;
//   email: boolean;
// };

//? Another example:

type OptionalUser = {
  [Key in keyof User]?: User[Key];
};

//?  This is basically how Partial<T> works internally.

//! Simple memory rule

// Generics      = reusable type
// Utility Types = built-in type helpers
// Mapped Types  = loop over object keys to create new type

//! Best practical use in your project:

interface ApiResponse<T> {
  success: boolean;
  data: T;
}

type Profile = {
  id: string;
  displayName: string;
  bio: string;
};

type UpdateProfilePayload = Partial<Profile>;

type ProfileCard = Pick<Profile, "id" | "displayName">;
