/* Task 1 */
let repeat = (array) => {
  return array.join("").repeat(3).split("").map(Number);
};

console.log(repeat([1, 2, 3]));