/**
 * Desc:
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.

 You may assume that each input would have exactly one solution, and you may not use the same element twice.

 * Hint
 * 暴力法
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var res = [];
    for(var i = 0; i < nums.length; i++) {
        var a = nums[i];
        for(var j = i+1; j < nums.length; j++) {
            var b =nums[j];
            if(a + b === target) {
                res.push(i);
                res.push(j);
                return res;
            }
        }
    }

};

/**
 * Hint
 * 数组转换成hash，加快查询速度
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var res = [];
    var map = {};
    for(var i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }
    for(var i = 0; i < nums.length; i++) {
        var a = nums[i];
        var b = target - nums[i];
        if(map[b] >= 0 && map[b] !== i) {
            res.push(i);
            res.push(map[b]);
            return res;
        }
    }

};

/**
 * Hint:
 * 优化掉上一个方法中的第一次遍历，hash表的生成
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var res = [];
    var map = {};
    for(var i = 0; i < nums.length; i++) {
        var b = target - nums[i];
        if(map[b] >= 0 && map[b] !== i) {
            res.push(i);
            res.push(map[b]);
            return res;
        }
        else {
            map[nums[i]] = i;
        }
    }

};