console.log("start");

setTimeout(() => {
  console.log("timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("end");

//! Why?
//* start → runs immediately
//* end → runs immediately
//* Promise → goes to microtask queue
//* setTimeout → goes to callback queue
/* Event loop picks:
microtask first ✅
then macrotask
*/
