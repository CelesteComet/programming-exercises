// LEETCODE 11
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    // two pointers while keeping max height
    let start = 0;
    let end = height.length - 1;
    let maxArea = 0;
    
    while (start < end) {
      // take pointer of larger height
      let startHeight = height[start];
      let endHeight = height[end];
        
       // calculate a maxHeight
      let currMaxArea = calculateArea(start, startHeight, end, endHeight);
      if (currMaxArea > maxArea) {
        maxArea = currMaxArea;
      }
      
      if (startHeight < endHeight) {
        start++;
      } else {
        end--;
      }
    }
    return maxArea;
};

function calculateArea(start, startHeight, end, endHeight) {
    
    // to account for 0 index
    start = start + 1;
    end = end + 1;
    
    let maxHeight = Math.min(startHeight, endHeight);
    
    let length = end - start;
    
    return maxHeight * length;
}