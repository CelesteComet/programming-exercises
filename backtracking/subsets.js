// LEETCODE 78
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
   let set = [];
   backtrack(set, nums, [], 0);
   return set;
};

function backtrack(set, nums, selectedSoFar, decisionPointer) {
  
  // after deciding all
  if (decisionPointer > nums.length - 1) {
    set.push(selectedSoFar);
    return;
  }
  
  let numsCopy = nums.slice();
  
  // we take it
  let takeSelectedCopy = selectedSoFar.slice();
  takeSelectedCopy.push(numsCopy[decisionPointer]);
  backtrack(set, numsCopy, takeSelectedCopy, decisionPointer + 1);
  
  // we dont take it
  let notTakeSelectedCopy = selectedSoFar.slice();
  backtrack(set, numsCopy, notTakeSelectedCopy, decisionPointer + 1);
};