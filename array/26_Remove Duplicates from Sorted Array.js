/**
 * Des:
 * Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * hint:
 * 1. 数组是引用，因此不必考虑将数组返回回去
 * 2. 要求空间复杂度是O(1)
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    //这里需要有特殊情况的判断
    if(nums.length === 0) {
        return 0;
    }
    let curidx = 0;
    //感觉for的写法要比while简洁一些
    for(let ridx = 1; ridx < nums.length; ridx++) {
        if(nums[ridx]>nums[curidx]) {
            nums[++curidx] = nums[ridx];
        }
    }
    return (curidx+1);
};