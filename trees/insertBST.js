/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (!root) { return new TreeNode(val); }
    
    var leftRoot = root.left;
    var rightRoot = root.right;
    
    if (val >= root.val) {
        root.right = insertIntoBST(rightRoot, val);
    }
    
    if (val < root.val) {
        root.left = insertIntoBST(leftRoot, val);
    }
    
    return root;
};