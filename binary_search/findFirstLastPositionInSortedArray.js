// LEETCODE 34
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let ans = [];
    
    function binarySearchLow(nums, target) { 
      if (nums.length === 0) { return -1;}
      if (nums.length === 1 && nums[0] === target) {
        return 0;
      }  
      if (nums.length === 1 && nums[0] !== target) { return -1; }
      let mid = Math.floor(nums.length / 2);
      
      if (nums[mid] === target && nums[mid-1] !== undefined && nums[mid-1] !== target || nums[mid] === target && nums[mid-1] === undefined) {
        return mid;
      } else if (nums[mid] === target && nums[mid-1] !== undefined && nums[mid-1] === target) {
        let searchLeft = binarySearchLow(nums.slice(0, mid), target);
        return searchLeft;
      }
      
      if (target > nums[mid]) {
        let searchRight = binarySearchLow(nums.slice(mid, nums.length), target);
        if (searchRight !== -1) { return mid + searchRight; }
      } else if (target < nums[mid]) {
        let searchLeft = binarySearchLow(nums.slice(0, mid), target);
        return searchLeft;
      }
      return -1;
    }
  
    function binarySearchHigh(nums, target) {
      if (nums.length === 0) { return -1;}
      if (nums.length === 1 && nums[0] === target) {
        return 0;
      } 
      if (nums.length === 1 && nums[0] !== target) {
        return -1;
      }
      let mid = Math.floor(nums.length / 2);
      
      if (nums[mid] === target && nums[mid+1] !== undefined && nums[mid+1] !== target || nums[mid] === target && nums[mid+1] === undefined) {
        return mid;
      } else if (nums[mid] === target && nums[mid+1] !== undefined && nums[mid+1] === target) {
        let searchRight = binarySearchHigh(nums.slice(mid, nums.length), target);
        if (searchRight !== -1) {
          return mid + searchRight;
        }
      }
      
      if (target > nums[mid]) {
        let searchRight = binarySearchHigh(nums.slice(mid, nums.length), target);
        if (searchRight !== -1) { return mid + searchRight; }
      } else if (target < nums[mid]) {
        let searchLeft = binarySearchHigh(nums.slice(0, mid), target);
        return searchLeft;
      }
      return -1;      
    }
  
    // search Low
    ans[0] = binarySearchLow(nums, target); 
    // search High
    ans[1] = binarySearchHigh(nums, target);
  
  
    return ans;
};