/**
 * 暴力法
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length-1; j++) {
            if(nums[j] === 0 && nums[j+1] !== 0) {
                swap(nums, j, j+1);
            }
        }
    }
};

let swap = (nums, m, n)=> {
    let tmp = nums[m];
    nums[m] = nums[n];
    nums[n] = tmp;
};
