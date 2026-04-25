function sum(...nums) {
  const res = nums.reduce((a, b) => a + b, 0);
  console.log(res);
  //   return res;
}

sum(1, 2, 43, 563, 356, 5, 36354, 6, 634563);
