/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
  var myMaxDepth = function(root, currentDepth) {
    if (!root) { return 0; }
    if (root.children.length === 0) { return 1;}
    
    var max = 0;
    
    root.children.forEach(child => {
      var depth = 1 + myMaxDepth(child, 0);
      if (depth > max) { max = depth; }               
    });
    
    return max;
  }
  
  return myMaxDepth(root, 0);
};