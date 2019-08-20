// LEETCODE 98
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  let ans = [];
  var inOrderTraversal = function(root) {
    if (!root) { return; }
    if (root.left) {
      inOrderTraversal(root.left);
    }
    ans.push(root.val);
    if (root.right) {
      inOrderTraversal(root.right);
    }
  };
  inOrderTraversal(root);
  for (let i = 1; i < ans.length; i++) {
    let prev = ans[i-1];
    let curr = ans[i];
    if (curr <= prev) { return false; }
  }
  return true;
};