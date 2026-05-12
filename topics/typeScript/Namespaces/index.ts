namespace Auth {
  export type User = {
    id: string;
    name: string;
  };

  export function login() {
    return "User logged in";
  }
}

const user: Auth.User = {
  id: "1",
  name: "Ishwar",
};

Auth.login();

//? Important: In modern apps like Next.js, you usually use modules, not namespaces.
