/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(grid.length === 0) {
        return 0;
    }
    let xcnt = grid.length;
    let ycnt = grid[0].length;
    let num = 0;

    for(let i = 0; i < xcnt; i++) {
        for(let j = 0; j < ycnt; j++) {
            if(grid[i][j] == 1) {
                num++;
                dfs(grid, i, j);
            }
        }
    }
    return num;
};

var dfs = (grid, i, j) => {
    // if(grid[i][j] == 1) {
        grid[i][j] = 0;
        if(i-1>=0 && grid[i-1][j] == 1) dfs(grid, i-1, j);
        if(i+1<grid.length && grid[i+1][j] == 1) dfs(grid, i+1, j);
        if(j-1>=0 && grid[i][j-1] == 1) dfs(grid, i, j-1);
        if(j+1<grid[0].length && grid[i][j+1] == 1) dfs(grid, i, j+1);
    // }
    // else {
    //     return;
    // }
};
