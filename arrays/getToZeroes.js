/*
# Your previous Plain Text content is preserved below:
# 
# Get to Zero
# 
# We will receive a array of integers and a starting index.
# 
# The integer at each index describes how many spaces from the current index you can move.
# 
# For this problem, we'll assume that you can move either forward or backward from the position and that when you get to either end of the array, you wrap around to the other end.
# 
# So if the array is: [3, 2, 0, 4, 8, 2] and I'm at index 1, I can move two spaces in either direction.  Either to index 5 (by moving backward and wrapping around) or index 3 by moving forward.
# 
# Your goal is to write a function that takes in an array and a starting position and return true if you can reach a space with a value of zero from that index by following the rules specified above.
# 
# In the above example ([3, 2, 0, 4, 8, 2]), this isn't possible from index 1 but is possible from index 4."
# 
# 
# Decide on a language that you would like to program in, and choose it from the dropdown in the top bar.
# 
# Remember to think out loud
# 
# Extra test cases
# [ 40, 7, 37, 24, 46, 33, 40, 7, 44, 32, 0, 44, 3, 41, 32, 4, 19, 19, 22, 19 ] starting at 0 impossible, but possible starting at 19
# [ -47, 35, 24, 1, 0, 25, -6, 38, 25, 32 ] possible starting at 5

#  x - - [3, 2, 0, 4, 8, 2]        
*/

function getToZero(arr, i) {

  let positionsSeen = [];

  function exec(arr, i) {

    i = Math.abs(i);

    // found it return
    if (arr[i] === 0) { return true; }

    // check if the position i is seen, if so, we made a huge loop
    if (positionsSeen[i] !== undefined) { return false; }

    // mark the seen
    positionsSeen[i] = true;
    
    let movesToMake = arr[i];
    let rightIndex = (i + movesToMake) % arr.length // 12 i = 4; moves = 8  // i = 0; moves = 3 3 % 
    let leftIndex = i - movesToMake;
    if (leftIndex < 0) {
      leftIndex = Math.abs(leftIndex);
      leftIndex += arr.length;
      leftIndex = leftIndex % arr.length;
      leftIndex = arr.length - leftIndex;
    }

    let checkLeft = exec(arr, leftIndex);
    let checkRight = exec(arr, rightIndex);

    return checkLeft || checkRight
  }

  return exec(arr, i);
}

console.log(getToZero([3, 2, 0, 4, 8, 2], 4));
console.log(getToZero([3, 2, 0, 4, 8, 2], 1));




