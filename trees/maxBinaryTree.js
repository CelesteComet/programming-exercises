/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if (nums.length === 0) { return null; }
    
    // find max value and its index
    var maxValue;
    var maxIndex;
    for (var i = 0; i < nums.length; i++) {
        var current = nums[i];

        // set max as first if none is set
        if (i === 0 || current > maxValue) { 
            maxValue = current; 
            maxIndex = i;
        }
    }

    // get left and right subarray
    var left = nums.slice(0, maxIndex);
    var right = nums.slice(maxIndex + 1, nums.length);

    // construct nodes
    var node = new TreeNode(maxValue);
    node.left = constructMaximumBinaryTree(left);
    node.right = constructMaximumBinaryTree(right);
    return node;
    
};