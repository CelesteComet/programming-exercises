// LEETCODE 35
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  function binarySearch(nums, target) {
    if (nums.length === 0) { return 0; }
    if (nums.length === 1 && target <= nums[0]) {
      return 0;
    } else if (nums.length === 1 && target > nums[0]) {
      return 1;
    }
    let mid = Math.floor(nums.length / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target > nums[mid]) {
      let searchRight = binarySearch(nums.slice(mid, nums.length), target);
      if (searchRight !== -1) {
        return mid + searchRight;
      }
    } else if (target < nums[mid]) {
      let searchLeft = binarySearch(nums.slice(0, mid), target);
      if (searchLeft !== -1) {
        return searchLeft;
      }
    }
    return -1;
  } 
  return binarySearch(nums, target);
};