/**
 * Desc：
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

 Note:
 The number of elements initialized in nums1 and nums2 are m and n respectively.
 You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.
 Example:

 Input:
 nums1 = [1,2,3,0,0,0], m = 3
 nums2 = [2,5,6],       n = 3

 Output: [1,2,2,3,5,6]
 * Hint：
 * 1. 双指针，从前向后比对，插入。
 * 2. 缺点是插入nums2中元素的时候，nums1中元素都要向后移动一位。
 * 3. cnt变量是记录nums1中已经遍历了多少个元素，方便判断nums1元素遍历完成的标志。
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = 0;
    let j = 0;
    let cnt = 0;//关于cnt的变化，修改调整了很多次。cnt主要用来记录nums1总共走了多少次，方便判断什么时候nums1已经遍历完，只需要赋值nums2中的内容。
    for(let i = 0; i < m+n; i++) {
        if(cnt>=m) {
            nums1[i] = nums2[j];
            j++;
        }
        else if(nums1[i] > nums2[j]) {
            insertElem(nums1, nums2[j], i);
            j++;
        }
        else {
            cnt++;
        }
    }
};

let insertElem = (nums, val, i)=>{
    for(let k = nums.length-1; k > i; k--) {
        nums[k] = nums[k-1];
    }
    nums[i] = val;
};


let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];
merge(nums1, 3, nums2, 3);
console.log(nums1);
