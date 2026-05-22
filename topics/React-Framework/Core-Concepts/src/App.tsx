// JSX

// import WelcomeMessage from "./1.JSX/exercise/WelcomeMessage";

// function App() {
//   return (
//     <>
//       <WelcomeMessage />
//     </>
//   );
// }

// export default App;

// const App = () => {
//   return (
//     <section id="section">
//       <h1>My Website</h1>
//       <article>
//         <h2>Welcome To React</h2>
//         <p className="text">Paragraph Content</p>
//       </article>
//     </section>
//   );
// };

// export default App;

// ------------------------------------
// Go to babel 👇 and past your code and checkout the result.
// https://babeljs.io/repl

// import React from "react";

// const App = () => {
//   return React.createElement(
//     "section",
//     {
//       id: "section",
//     },
//     React.createElement("h1", null, "My Website"),
//     React.createElement(
//       "article",
//       null,
//       React.createElement("h2", null, "Welcome To React"),
//       React.createElement(
//         "p",
//         {
//           class: "text",
//         },
//         "Paragraph Content"
//       )
//     )
//   );
// };

// export default App;

//  ********** 2. JSX RULES **********

// 1. Return a single root element
// To return multiple elements from a component, wrap them with a single parent tag.

// ERROR
// const App = () => {
//     return (
//         <section id="section">
//         </section>
//           <h1>Welcome To React</h1>
//       );
// }

// 2. Close all the tags
// JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, and wrapping tags like <li>oranges must be written as <li>oranges</li>.

// Error
// const App = () => {
//     return (
//         <section id="section">
//           <img >
//         </section>
//       );
// }

// 3. className
// open your DevTools and read the error message
// const App = () => {
//   return (
//     <section class="section">
//       <h1 class="title">Hello HuXn</h1>
//     </section>
//   );
// };

// 4. forHTML
// open your DevTools and read the error message
// const App = () => {
//   return (
//     <section className="section">
//       <form>
//         <label htmlFor="name">Name</label>
//         <input type="text" placeholder="Enter Your Name" id="name" />
//       </form>
//     </section>
//   );
// };

// export default App;

//  ********** Components **********
import Greet from "./3.Components/Greet";
function App() {
  return <Greet />;
}

export default App;
