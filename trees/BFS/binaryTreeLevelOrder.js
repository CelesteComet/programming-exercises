/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
    if (!root) { return []; }
    var levels = [];
    var parents = [root];
    levels.push([root.val])
    while (parents.length > 0) {
        var children = [];
        for (let i = 0; i < parents.length; i++) {
          if (parents[i].left) {children.push(parents[i].left);}
          if (parents[i].right) {children.push(parents[i].right);}
        }
        
        if (children.length > 0) {
            levels.push(children.map(function(e) {return e.val; }));
        } 
        parents = children;        
    } 
    return levels;
};