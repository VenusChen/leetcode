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

/**
 * -- 动态规划
 * 定义dp(k)代表 以nums[k]元素为结尾的连续序列最大和 ！！！注意，nums[k]必须是子序列最后一个元素，否则没法保证连续性
 * 方程：dp(k) = max(nums[k], dp(k-1)+nums[k])  ！！！！ 注意，为了连续性，不能是dp(k) = max(dp(k-1), dp(k-1)+nums[k])
 * @param nums
 */
var maxSubArray = function(nums) {
    if(!nums || nums.length === 0) {
        return null;
    }
    let dp = nums[0];
    let max = nums[0];
    for(let i = 1; i < nums.length; i++) {
        dp = Math.max(nums[i], dp+nums[i]);
        max = Math.max(dp, max);
    }
    return max;
};

/**
 * 分治法
 * 时间复杂度： nlog(n)
 * 空间复杂度： log(n)
 * 1. 数组分成三部分，分别是数组左侧，数组右侧，数组中间。
 * 2. 每个部分求最大和子序列。
 * 3. 最后归并求总最大和子序列。
 */

var findMaxCrossingSubArray = function(nums, left, mid, right) {
    let sum = 0;
    let leftSum = -Infinity;
    for(let i = mid; i >= left; i--) {
        sum += nums[i];
        leftSum = Math.max(leftSum, sum);
    }

    sum = 0;
    let rightSum = -Infinity;
    for(let i = mid+1; i <= right; i++) {  //tip: 这里要从mid+1开始，避免mid重复计算
        sum += nums[i];
        rightSum = Math.max(rightSum, sum);
    }
    return (leftSum+rightSum);
};

var findMaxSubArray = function (nums, left, right) {
    //1. 左右指针相遇，返回
    if(left === right) {
        return nums[left];
    }
    let mid = parseInt((left+right)/2);
    let leftSum = findMaxSubArray(nums, left, mid);
    let rightSum = findMaxSubArray(nums, mid+1, right); //tip: 这里要注意从mid+1开始
    let midSum = findMaxCrossingSubArray(nums, left, mid, right);
    return Math.max(leftSum, rightSum, midSum);
};

var maxSubArray = function(nums) {
    return findMaxSubArray(nums, 0, nums.length-1);
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

