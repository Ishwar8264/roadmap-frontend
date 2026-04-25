//* If JavaScript does not find a variable in the current scope, it checks the outer scope.

const userName = "Ishwar";
function outerFn() {
  const role = "Frontend Developer";

  const innerFn = () => {
    console.log("====userName ==", userName);
    console.log("role ==", role);
  };
  innerFn();
}

outerFn();
