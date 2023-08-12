const arr = [1.1, 1.2, 1.3, 2.1, 2.2, 2.4, 3.2, 3.5];

console.log("Original Array", arr);

const segregate = arr.reduce((prev, current) => {
  // Round off current value
  const floored = Math.floor(current);

  // create object key if not exist
  if (!prev[floored]) {
    prev[floored] = [];
  }

  //push item in respective key array
  prev[floored].push(current);

  // return the updated value
  return prev;
}, {});

console.log(segregate);
