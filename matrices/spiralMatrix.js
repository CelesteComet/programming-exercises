// LEETCODE 54
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let ans = [];
  if (matrix.length === 0) { return ans; }
  
  let r1 = 0;
  let r2 = matrix.length - 1;
  
  let c1 = 0;
  let c2 = matrix[0].length - 1;
  while (r1 <= r2 && c1 <= c2) {
    
    // do top sweep to right
    for (let i = c1; i <= c2; i++) {
      ans.push(matrix[r1][i]);
    }
    
    // do right sweep down
    for (let i = r1+1; i <= r2; i++) {
      ans.push(matrix[i][c2]);
    }
    
    // only do the other half if pointers do not intersect
    if (r1 < r2 && c1 < c2) {
      for (let i = c2-1; i > c1; i--) {
        ans.push(matrix[r2][i]);
      }
      
      for (let i = r2; i > r1; i--) {
        ans.push(matrix[i][c1]);
      }
    }
    r1++;
    r2--;
    c1++;
    c2--;
  }
  return ans;
};