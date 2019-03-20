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

var preorderTraversal = function(root) {
    if (!root) { return []; }
    var arr = [];
    var stack = [root];
    while (stack.length) {
        var current = stack.pop();
        if (current && current.val !== undefined) {
          arr.push(current.val);  
          stack.push(current.left);  
          stack.push(current.right);               
        } else {
          arr.push(null);
        };
    }
    return arr;   
}

var preorderOppositeTraversal = function(root) {
    if (!root) { return []; }
    var arr = [];
    var stack = [root];
    while (stack.length) {
        var current = stack.pop();
        if (current && current.val !== undefined) {
          arr.push(current.val);  
          stack.push(current.right);  
          stack.push(current.left);               
        } else {
          arr.push(null);
        };
    }
    return arr;           
}

var isSymmetric = function(root) {
    if (!root) { return true;}
    // if both children is null then it is symmetrical
    if (!root.left && !root.right) { return true; }
    if (!root.left || !root.right) { return false; }
    var left = preorderTraversal(root.left);
    var right = preorderOppositeTraversal(root.right);
    for (let i = 0; i < left.length; i++) {
        if (left[i] !== right[i]) { return false;}
    }
    return true;
};