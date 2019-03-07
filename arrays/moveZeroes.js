// [1,0,3,2,0]


function moveZeroes(arr) {
  // keep count of index
  index = 0

  // iterate array and put in element at index for every non zero
  for (var i = 0; i < arr.length; i++) {
    var current = arr[i];

    if (current !== 0) {
      arr[i] = 0;
      arr[index] = current;
      index++;
    }
  }

  return arr;
}

var arr = [3];
console.log(moveZeroes(arr));