// global.d.ts

declare module "my-lib" {
  export function hello(name: string): string;
}

//? Usage:
// import { hello } from "my-lib";

// hello("Ishwar");

//? Another example (window)

// declare global {
//   interface Window {
//     myAppName: string;
//   }
// }

//? Now you can use:

// window.myAppName = "Klakar";
