// LEETCODE 367
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) { return true; }
  function binarySearch(low, high) {
    if (low === high && (low * low !== num)) {
      return false;
    }
    if (low === high && (low * low === num)) {
      return true;
    }
    if (high - low === 1) { return false; }
    let mid = Math.floor((high + low) / 2);
    let square = mid * mid; 
    if (square === num) { return true; }
    if (square > num) {
      let searchLeft = binarySearch(low, mid);
      if (searchLeft) { return true; }
    } else if (square < num) {
      let searchRight = binarySearch(mid, high);
      if (searchRight) { return true; }
    }
    return false;
    
  }
  return binarySearch(0, num);
};