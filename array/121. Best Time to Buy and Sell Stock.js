/**
 * 暴力法。
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0;
    for(let buypos = 0; buypos < prices.length -1; buypos++) {
        for(let sellpos = (buypos+1); sellpos < prices.length; sellpos++) {
            let curprofit = prices[sellpos] - prices[buypos];   //tip 注意是卖出价格-买进价格
            if(curprofit > res) {
                res = curprofit;
            }
        }
    }
    return res;
};

/**
 * 动态规划。
 *
 * @param prices
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    if(prices.length === 0) {
        return 0;
    }
    let dp = new Array(prices.length).fill(0);
    for(let i = 1; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        dp[i] = Math.max(dp[i-1], prices[i]-minPrice);
    }
    return dp[dp.length-1];
};

console.log(maxProfit([7,1,5,3,6,4]));