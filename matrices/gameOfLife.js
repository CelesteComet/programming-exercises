// LEETCODE 289
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

/* add two more states
  was alive but will die - 4
  was dead but will be alive - 3
*/

var gameOfLife = function(board) {
   for (let i = 0; i < board.length; i++) {
     for (let j = 0; j < board[0].length; j++) {
        let curr = board[i][j];
        let numberOfNeighbors = getNeighbors(board,i,j);
        let isAlive = (curr === 1 || curr === 4) ? true : false;
        if (numberOfNeighbors < 2 && isAlive) {
          board[i][j] = 4;
        } else if (numberOfNeighbors > 3 && isAlive) {
          board[i][j] = 4
        } else if (numberOfNeighbors === 3 && !isAlive) {
          board[i][j] = 3;
        }
     }
   }
  
   for (let i = 0; i < board.length; i++) {
     for (let j = 0; j < board[0].length; j++) {
        let curr = board[i][j];
        if (curr === 3) {
          board[i][j] = 1;
        } else if (curr === 4) {
          board[i][j] = 0
        } 
     }
   }  
  
  
  return board;
};

function getNeighbors(board, i, j) {
  let dirs = [
    [-1,0], // up 
    [-1,1], // up-right
    [0,1], // right
    [1,1], // down right
    [1,0], // down
    [1,-1], // downleft
    [0, -1], // left
    [-1,-1], // up left
  ];
  let count = 0;
  for (let dir of dirs) {
    if (board[i+dir[0]] && board[i+dir[0]][j+dir[1]] !== undefined) {
      let curr = board[i + dir[0]][j + dir[1]];
      if (curr === 1 || curr === 4) {
        count++;
      }      
    } else { continue; }
  }
  return count;
}