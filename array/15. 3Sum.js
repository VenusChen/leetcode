/**
 * 暴力法
 * 1. 排序
 * 2. 遍历加和
 * 注意：
 * 1. 结果要去重。i相同略过实现。
 * 2. 注意去重中，j和k的判断开始条件,不能等于上个idx+1。输入[0,0,0,0]却返回[ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]
 * @param nums
 */
var threeSum = function(nums) {
    let res = [];
    nums.sort((a, b)=>{return (a-b);});
    for(let i = 0; i+2 < nums.length; i++) {
        for(let j = i+1; j+1 < nums.length; j++) {
            for(let k = j+1; k < nums.length; k++) {
                if ( /*i > 0 &&*/ nums[i] === nums[ i - 1] ) continue;
                if ( j > i + 1 && nums[j] === nums[ j - 1] ) continue;
                if ( k > j + 1 && nums[k] === nums[ k - 1] ) continue;
                if(nums[i]+nums[j]+nums[k] === 0) {
                    res.push([nums[i], nums[j], nums[k]]);
                }
            }
        }
    }
    return res;
};

/**
 * 1. 固定一个值，剩下两个双指针夹逼。有序数组其中两个值加和是0
 * 2. 效率优化1：第一个值就>0可以直接返回
 * 3. 效率优化2：i,j,k移动过程中去重。
 * 注意！j去重时候需要额外判断，值与当前i相同，不要去重！！j只和自己去重！！
 * @param nums
 */
var threeSum = function(nums) {
    let res = [];
    if(nums.length < 3) {
        return res;
    }
    nums = nums.sort((a,b)=>a-b);
    for(let i = 0; i < nums.length-2;i++) {
        //1.第一个值就>0可以直接返回
        if (nums[i] > 0) {
            return res;
        }
        //2.跳过值相同的i元素
        if(i > 0 && nums[i] === nums[i-1]) {
            continue;
        }
        for(let j = i + 1, k = nums.length-1; j < k ;) {
            if(nums[i]+nums[j]+nums[k] === 0) {
                res.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
            }
            //移动j，k
            else if(nums[i]+nums[j]+nums[k] < 0) {
                j++;
            }
            else {
                k--;
            }
            //todo 跳过j，k 要放到最后跳过，避免指针重复后续没有判断。注意要判断j值与i值不同才跳过
            while (j < k && nums[j]>nums[i] && nums[j] === nums[j - 1]) {
                j++;
            }
            while (j < k && nums[k] === nums[k + 1]) {
                k--;
            }
        }

    }
    return res;
};

// console.log(threeSum([0,0,0,0]));
console.log(threeSum([-2,0,0,2,2]));
