/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) { return []; }
    
    let queue = [root];
    
    let ans = [[root.val]];
    
    while (queue.length) {
        let children = [];
        while (queue.length) {
            let current = queue.shift();
            current.children.forEach(c => {
                children.push(c);        
            });
        }
        if (children.length) {
            ans.push(children.map(c => {return c.val;}));
        }
        children.forEach(c => {queue.push(c)});
    }
    return ans;
};