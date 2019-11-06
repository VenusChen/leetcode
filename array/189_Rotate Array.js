/**
 * Desc:
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * Hint:
 * 1. 逻辑最简单的实现，并不是原地算法。
 * 2. 注意当k(移动次数)>数组长度时候，说明情况出现了循环，取余处理
 * 3. 结果通过改变nums来实现
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    if(k === 0) {
        return nums;
    }
    if(k > nums.length) {
        k = k%nums.length;
    }
    let res = [];
    for(let i = nums.length-k; i < nums.length; i++) {
        res.push(nums[i]);
    }
    for(let i = 0; i < nums.length-k; i++) {
        res.push(nums[i]);
    }
    for(let i = 0; i < res.length; i++) {
        nums[i] = res[i];
    }
    return nums;
};

/**
 * test
 */
// let nums = [1,2]
// let nums = [1,2,3,4,5,6,7]
// let nums = [1]
// let nums = [-1]
// let nums = [1,2,3];
// rotate(nums, 4);
// console.log(nums);