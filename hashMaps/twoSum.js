/**
   LEETCODE #1 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        let complement = target - n;
        if (map[complement] !== undefined) {
           return [i, map[complement]];
        } else {
            map[n] = i;
        }        
    }
}