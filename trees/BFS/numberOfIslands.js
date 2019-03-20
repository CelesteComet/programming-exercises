/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    // iterate through the grid
    let islands = 0; 
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            var cell = grid[i][j];
            if (cell === "1") {
                bfs(grid, i, j); // bfs the shit out of the island
                islands++;
            }
        }
    }
    return islands;
};

var bfs = function(grid, i, j) {
    var stack = [];
    var cell = {i, j};
    stack.push(cell);
    
    while (stack.length) {
        let currentCell = stack.pop();
        let i = currentCell.i;
        let j = currentCell.j;
        
        // process the cell
        grid[i][j] = "2";
        
        // get cell's children
        let maxRow = grid.length - 1;
        let maxCol = grid[0].length - 1;
        
        [[1,0],[-1,0],[0,-1],[0,1]].forEach(set => {
           let row = i + set[0];
           let col = j + set[1];
           
           // if i and j are within the grid
           if ((row >= 0 && row <= maxRow) && (col >= 0 && col <= maxCol)) {
               if (grid[row][col] === "1") {
                 let cell = {i: row, j: col};
                 stack.push(cell);
               }
           }
        });
    }
    return grid;
}
