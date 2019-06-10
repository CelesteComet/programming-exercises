image1 = [
  [0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 0, 0, 1, 1],
  [1, 1, 1, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 0],
];

function getCoords(pos, board) {
  let {row, col} = pos;
  while (board[row] && board[row][col+1] === 0) {
    col++;
  }

  // get bot
  while (board[row+1] && board[row+1][col] === 0) {
    row++;
  }
  let botRight = [row, col];
  let topLeft = [pos.row, pos.col];

  for (let i = topLeft[0]; i < botRight[1] + 1; i++) {
    for (let j = topLeft[1]; j < botRight[1] + 1; j++) {
      board[i][j] = 2;
    }
  }

  // 2,3  3,5


  return [topLeft, botRight];
}

function findRectangles(board) {
  let rects = [];
  board.forEach((row, i)=> {
    row.forEach((col, j) => {
      if (board[i][j] === 0) {
        let coords = getCoords({row: i, col: j}, board);
        rects.push(coords);
      }
    })
  });
  return rects;
}

console.log(findRectangles(image1))
