function outerFn() {
  const name = "Ishwar";

  const innerFn = () => {
    console.log("=====Name ==", name); // Ishwar
  };
  return innerFn;
}

const fn = outerFn();
fn(); // Ishwar
