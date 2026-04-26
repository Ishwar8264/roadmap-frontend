// fetch("https://dummyjson.com/test")
//   .then((data) => data.json())
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Request completed");
//   });

const getData = async () => {
  try {
    const res = await fetch("https://dummyjson.com/test");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("successfully");
  }
};

getData();
