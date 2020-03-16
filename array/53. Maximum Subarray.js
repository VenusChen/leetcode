/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
 * Input: [-2,1,-3,4,-1,2,1,-5,4],
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 *
 * If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.
 */
/**
 * -- 暴力解法
 * 1. 因为要求连续，第一层遍历，遍历每个子数组开始节点
 * 2. 第二层遍历，确定子数组的结束节点
 * 3. 每次计算当前sum，与max比较。
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max= -Infinity;
    for(let i = 0; i < nums.length; i++) {
        let sum = 0;
        // for(let j = 0; j < nums.length-i; j++) {  //error1: j should start with i
        // for(let j = i; j < nums.length-i+1; j++) { error2: j is index, not loop cnt, so , should always < nums.length
        for(let j = i; j < nums.length; j++) {

            sum+=nums[j];
            if(sum > max) {
                max = sum;
            }
        }
    }
    return max;
};

console.log(maxSubArray([-2,-3,-1]));

