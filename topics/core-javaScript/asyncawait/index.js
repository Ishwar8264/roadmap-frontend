async function getdata() {
  const res = await fetch("https://dummyjson.com/test");
  const data = (await res).json();

  //   console.log(data);
}

//* With Error Handling

async function getData() {
  try {
    const res = await fetch("https://dummyjson.com/test");
    const data = await res.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("done");
  }
}
getData();

//! Key Points
//* async → function always returns a Promise
//* await → waits for Promise to resolve
//* can only use await inside async
//* replaces .then() chaining
