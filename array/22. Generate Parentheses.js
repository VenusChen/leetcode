/**
 * dfs - 回溯法
 * @param n
 * @return {Array}
 */

var generateParenthesis = function(n) {
    let res = [];
    put('', 0, 0, res, n);
    return res;
};

var put = function (str, leftcnt, rightcnt, res, n) {
    if(str.length === 2*n) {
        res.push(str);
        return;
    }
    //递归放入左括号前提，左括号有剩余
    if(leftcnt < n) {
        put(str+'(', leftcnt+1, rightcnt, res, n);
    }
    //递归放入右括号前提，右括号小于当前左括号数量
    if(rightcnt < leftcnt) {
        put(str+')', leftcnt, rightcnt+1, res, n);
    }
};

console.log(generateParenthesis(3));