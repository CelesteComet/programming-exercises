// LEETCODE 238
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let leftSideProducts = new Array(nums.length)
    let rightSideProducts = new Array(nums.length);
    
    // loop through twice and get left side and right side
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) { 
            leftSideProducts[i] = 1; 
        } else {
            let prevLeftSideProduct = leftSideProducts[i-1];
            let curr = nums[i-1];
            leftSideProducts[i] = (curr * prevLeftSideProduct);
        }
    }
    for (let i = nums.length-1; i >= 0; i--) {
       if (i === nums.length-1) {
           rightSideProducts[i] = 1;
       } else {
           let prevRightSideProduct = rightSideProducts[i+1];
           let curr = nums[i+1];
           rightSideProducts[i] = (curr * prevRightSideProduct);
       }
    }
    
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        res.push(leftSideProducts[i] * rightSideProducts[i]);
    }
    return res;
};