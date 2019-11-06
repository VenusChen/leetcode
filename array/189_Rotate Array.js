/**
 * Method 1 - 需要额外空间
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
 * Method 2 - 全部翻转
 * Desc:
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 * Hint:
 * 1. 翻转整个数组
 * 2. 翻转前k个元素
 * 3. 翻转剩余元素
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let reverse = (nums, lp, rp)=> {
    let tmp;
    while (lp < rp){
        tmp = nums[lp];
        nums[lp] = nums[rp];
        nums[rp] = tmp;
        lp++;
        rp--;
    }
};
var rotate = function(nums, k) {
    k = k%nums.length;
    reverse(nums, 0, nums.length-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length-1)
};
/**
 * test
 */
// let nums = [];
// let nums = [1,2]
// let nums = [1,2,3,4,5,6,7]
// let nums = [1]
// let nums = [-1]
// let nums = [1,2,3];
// rotate(nums, 1);
// console.log(nums);