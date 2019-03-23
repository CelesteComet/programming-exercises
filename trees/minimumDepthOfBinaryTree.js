var minDepth = function(root) {
    if (!root) { return 0; }
    
    var leftMinDepth = 0;
    var rightMinDepth = 0;
    
    if (root.left !== undefined) {
        leftMinDepth = minDepth(root.left);
    }
    
    if (root.right !== undefined) {
        rightMinDepth = minDepth(root.right);
    }
    
    var bothHasDepth = leftMinDepth > 0 && rightMinDepth > 0;
    var leftHasDepth = leftMinDepth > 0;
    var leftDepthLesser = leftMinDepth < rightMinDepth;
    
    if (bothHasDepth) {
        if (leftDepthLesser) {
            return 1 + leftMinDepth;
        } else {
            return 1 + rightMinDepth;
        }
    } else if (leftHasDepth) {
        return 1 + leftMinDepth;
    } else {
        return 1 + rightMinDepth;
    }
}; 