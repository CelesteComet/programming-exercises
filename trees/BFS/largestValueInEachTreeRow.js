/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) { return []; }
    
    let ans = [root.val]
    let queue = [root];
    var children = [];
    
    while (queue.length) {
        while (queue.length) {
            var current = queue.shift();

            if (current.left) {
                children.push(current.left);
            }

            if (current.right) {
                children.push(current.right);
            }
        }
        
        if (children.length > 0) {
            let max = null;
            children.forEach(c => {
                if (c.val >= max || max == null) {
                    max = c.val;
                }
            })

            ans.push(max);

            children.forEach(child => {
                queue.push(child);
            });            
        }

        children = [];        
    }
    return ans;
};