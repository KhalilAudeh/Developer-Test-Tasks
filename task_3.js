/* Task 3 */
let next_binary_number = (array) => {
  var i;

  for (var i = array.length - 1; i >= 0; i--) {
    if (array[i] == 0) {
      array = array.slice(0, i) + "1" + array.slice(i + 1);
      break;
    } // else convert '1' to '0'
    else {
      array = array.slice(0, i) + "0" + array.slice(i + 1);
    }
  }

  // if the binary representatio contains only the set bits
  if (i < 0) {
    array = "1" + array;
  }

  return array.split("").map(Number);
};

console.log(next_binary_number([1, 1]));