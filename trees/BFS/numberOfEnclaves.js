// LEETCODE 1020
/**
 * @param {number[][]} A
 * @return {number}
 */
var numEnclaves = function(A) {
  let enclaves = 0;
  function bfs(A, row, col) {
    let isEnclave = true;
    let numEnclaves = 0;
    let queue = [{row: row, col: col}];
    
    while (queue.length) {
      let popped = queue.shift();
      let {row, col} = popped;
      numEnclaves++;
      [[1,0],[-1,0],[0,1],[0,-1]].forEach(set => {
        if (A[row+set[0]] === undefined) {
          isEnclave = false;
        } else if (A[row+set[0]][col+set[1]] === undefined) {
          isEnclave = false;
        } else if (A[row+set[0]][col+set[1]] === 1) {
          A[row+set[0]][col+set[1]] = 0;
          let newRow = row + set[0];
          let newCol = col + set[1];
          queue.push({row: newRow, col: newCol})
        }
      });
    }
    return {isEnclave, numEnclaves};
  }
  
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] === 1) {
        A[i][j] = 0;
        let {isEnclave, numEnclaves} = bfs(A, i, j);
        if (isEnclave) { 
          enclaves += numEnclaves; 
        }
      }     
    }
  }
  return enclaves;
};