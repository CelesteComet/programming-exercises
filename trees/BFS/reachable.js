//Given a board and an end position for the player, write a function to determine if it is possible to travel from every open cell on the board to the given end position.

board1 = [
    [ 0,  0,  0, 0, -1 ],
    [ 0, -1, -1, 0,  0 ],
    [ 0,  0,  0, 0,  0 ],
    [ 0, -1,  0, 0,  0 ],
    [ 0,  0,  0, 0,  0 ],
    [ 0,  0,  0, 0,  0 ],
]

board2 = [
    [  0,  0,  0, 0, -1 ],
    [  0, -1, -1, 0,  0 ],
    [  0,  0,  0, 0,  0 ],
    [ -1, -1,  0, 0,  0 ],
    [  0, -1,  0, 0,  0 ],
    [  0, -1,  0, 0,  0 ],
]

function getOpenSpots(board) {
    let count = 0;
    board.forEach(row => {
        row.forEach(square => {
            if (square === 0) {
                count++;
            }
        })
    })
    return count;
}

function reachable(board, pos) {

    // figure out how many open spots there are
    let numSpots = getOpenSpots(board);
    let count = 0;

    // do BFS starting from pos and mark every seen pos as -1 and count

    const bfs = (board, pos) => {
        let row = pos[0];
        let col = pos[1];
        let queue = [];

        if (board[row][col] === 0) {
            queue.push({row, col})
        }

        while (queue.length > 0) {
            let current = queue.pop();
            let {row, col} = current;

            // mark
            if (board[row][col] === 0) {
                board[row][col] = -1;
                count++;
            } 

            let directions = [
                [-1,0], [1,0], [0,-1], [0,1]
            ];

            directions.forEach(dir => {
                if (board[row + dir[0]] !== undefined && board[row+dir[0]][dir[1]+col] === 0) {
                    queue.unshift({row: row + dir[0], col: col + dir[1]});
                }
            });
        }
    }

    bfs(board, pos);

    return numSpots === count;
}

console.log(reachable(board1, [0,0]))
console.log(reachable(board2, [0,0]))