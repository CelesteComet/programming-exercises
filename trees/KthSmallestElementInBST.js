// LEETCODE 230
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */ 
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // reverse inordertraversal
    let res = [];
    var exec = function(root) {
        if (!root) { return; }        
        if (root.left !== null) {
            exec(root.left);
        }
        res.push(root.val);
        if (root.right !== null) {
            exec(root.right);
        }
    };
    exec(root);
    console.log(res);
    return res[k-1];
};