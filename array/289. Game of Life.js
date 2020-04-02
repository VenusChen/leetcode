/**
 * According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

 Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

 Any live cell with fewer than two live neighbors dies, as if caused by under-population.
 Any live cell with two or three live neighbors lives on to the next generation.
 Any live cell with more than three live neighbors dies, as if by over-population..
 Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
 Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.
 */

/**
 * 不是原地算法。
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let res = [];
    for(let m = 0; m < board.length; m++) {
        let line = [];
        for(let n = 0; n < board[m].length; n++){
            let alivecnt = getAroundAliveCnt(board, m, n);
            if(board[m][n] === 1) {
                if(alivecnt !== 2 && alivecnt !== 3) {
                    line.push(0);
                }
                else{
                    line.push(1);
                }
            }
            else{
                if(alivecnt === 3) {
                    line.push(1);
                }
                else {
                    line.push(0);
                }
            }
        }
        res.push(line);
    }
    for(let m = 0; m < board.length; m++) {
        for(let n = 0; n < board[m].length; n++) {
            board[m][n] = res[m][n];
        }
    }
};

var getAroundAliveCnt = function(board, m, n) {
    let res = 0;
    if(m>0) {
        res += board[m-1][n];
    }
    if(n>0) {
        res += board[m][n-1];
    }
    if(m>0 && n>0) {
        res += board[m-1][n-1];
    }
    if(m<board.length-1) {
        res += board[m+1][n];
    }
    if(board.length > 0 && n<board[0].length-1) {
        res += board[m][n+1];
    }
    if(m<board.length-1 && board.length > 0 && n<board[0].length-1) {
        res += board[m+1][n+1];
    }
    if(m>0 && board.length > 0 && n<board[0].length-1) {
        res += board[m-1][n+1];
    }
    if(n>0 && m<board.length-1) {
        res += board[m+1][n-1];
    }
    return res;
};

/**
 说真的，状态稍微多一点，这种用特定的新数字表示新状态的做法容易把自己搞懵，又是2又是-1的，自己的代码隔一天看，自己都捋不顺。

 我咋干的？首先遍历的时候我不让每一个格子都看一眼周围的八个格子去更新自己状态。我换个角度，遍历的时候，如果这个格子里是活的，我就让它去“影响”周围的八个格子。这样一来，大批原来是死了的格子就省了很多检查的时间。怎么“影响”？简单，我给被影响的格子里的数字加10。这样一来，个位存着这格子原来的状态，十位就存着它周围有多少个活格子了。比如遍历完了之后一个格子里是41，那就表示它原来自己是1，然后被周围的四个活格子加了四个10，于是周围有四个活细胞。

 等之后再遍历一遍，更新到最新状态就完事了。代码：
 */