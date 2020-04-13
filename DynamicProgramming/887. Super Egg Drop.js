/**
 * 参考题解：https://leetcode-cn.com/problems/super-egg-drop/solution/ji-ben-dong-tai-gui-hua-jie-fa-by-labuladong/
 有的读者也许会有这种想法：二分查找排除楼层的速度无疑是最快的，那干脆先用二分查找，等到只剩 1 个鸡蛋的时候再执行线性扫描，这样得到的结果是不是就是最少的扔鸡蛋次数呢？

 很遗憾，并不是，比如说把楼层变高一些，100 层，给你 2 个鸡蛋，你在 50 层扔一下，碎了，那就只能线性扫描 1～49 层了，最坏情况下要扔 50 次。

 如果不要「二分」，变成「五分」「十分」都会大幅减少最坏情况下的尝试次数。比方说第一个鸡蛋每隔十层楼扔，在哪里碎了第二个鸡蛋一个个线性扫描，总共不会超过 20 次​。

 */

/**
 * 超时的解法
 */
var superEggDrop = function(K, N) {
    let dp = new Array(K + 1)
    for(let i = 0 ;i <= K; i++) dp[i] = new Array(N + 1).fill(-1)
    console.log(dp);
    // dp = new Array(K+1).fill(new Array(N+1).fill(-1))     //为什么不能这么写？？？？？
    // console.log(dp);

    //初始化
    for(let j = 1; j <= N; j++) {
        dp[1][j] = j;
    }
    for(let i = 1; i <= K; i++) {
        dp[i][0] = 0;
    }

    console.log(dp);

    for(let i = 2; i <= K; i++) {               //初始化了所有一个鸡蛋情况，所以动态规划从两个鸡蛋开始
        for(let j = 1; j <= N; j++) {
            dp[i][j] = j; //最多投掷次数 = 挨个层扔鸡蛋 = 楼层数
            for(let k = 1; k <= j; k++) {   //假设从k层开始扔，需要扔多少次，总有一种k策略，使得扔的次数最少
                dp[i][j] = Math.min(dp[i][j], (Math.max(dp[i - 1][k - 1], dp[i][j - k])+1));
            }
        }
    }
    return dp[K][N];
};

console.log(superEggDrop(2,7));



/**
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
let dp = undefined
var superEggDrop = function(K, N) {
    dp = new Array(K + 1)
    for(let i = 0 ;i <= K; i++) dp[i] = new Array(N + 1).fill(-1)
    return dpf(K, N)
};

// 剩余k个鸡蛋、n层楼需要遍历
function dpf(k, n) {
    if(dp[k][n]!== -1) return dp[k][n]
    if(n === 0) return 0
    if(k === 1) return n
    let ans = Infinity
    let left = 1
    let right = n
    /*
    注意， 这里的二分法不是二分法抛鸡蛋，每次抛鸡蛋实际还是暴力循环遍历。
    这里能用二分法，是因为dpf（k - 1, i - 1）和dpf(k, n - i)一个单调递增， 一个单调递减
    最大最小问题其实就是要找两者相交的那个点， 所以可以用二分法
    */
    while(left <= right) {
        const mid = Math.floor((left + right) / 2)
        const broken = dpf(k - 1, mid - 1)
        const not_broken = dpf(k, n - mid)
        if(broken > not_broken) {
            right = mid - 1
            ans = Math.min(ans, broken + 1)
        } else if(broken < not_broken){
            left = mid + 1
            ans = Math.min(ans, not_broken + 1)
        } else {
            ans = Math.min(ans, broken + 1)
            break
        }
    }
    dp[k][n] = ans
    console.log(dp, k, n, dp[k][n]);
    return ans
}

// console.log(superEggDrop(2,6));
