var findBottomLeftValue = function(root) {
  if (!root) { return null; }
  var stack = [root];
  var lastProcessed = null;
  while (stack.length) {
    var current = stack.pop();
    lastProcessed = current;
    if (current) {
      if (current.right) {
        stack.unshift(current.right); 
      }
      if (current.left) {
        stack.unshift(current.left);  
      }
    }
  }
  return lastProcessed.val;
};
