/**
 * 原地旋转方法。
 * 计算出每个节点旋转前后坐标公式
 * 转移公式节点(row,col)位置，应该由(n-1-col,row)节点占领
 */
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let n = matrix.length;
    for(let row = 0; row < Math.floor(n/2); row++) {           //Tip!!!!!矩阵的坐标表示是（行，列），（y，x）y坐标在前，x在后
        for(let col = row; col < n-row-1; col++) {              //Tip!!!!!列的遍历，要总行开始，n-row结束
            console.log(row,col);
            let tmp = matrix[row][col];             //保存左上角
            matrix[row][col] = matrix[n-1-col][row];    //左下开始依次挪动
            console.log(`(${row},${col})<=(${n-1-col},${row})`);
            matrix[n-1-col][row] = matrix[n-1-row][n-1-col];
            console.log(`(${n-1-col},${row})<=(${n-1-row},${n-1-col})`);
            matrix[n-1-row][n-1-col] = matrix[col][n-1-row];
            console.log(`(${n-1-row},${n-1-col})<=(${col},${n-1-row})`);
            matrix[col][n-1-row] = tmp;
            console.log(`(${col},${n-1-row})<=(${row},${col})`);
        }
    }

    return matrix;
};

console.log(rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]));