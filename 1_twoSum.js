/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var obj = {};
    
    for (var x = 0; x < nums.length; x++) {
        var complement = target - nums[x];
        if (obj[complement] != undefined) {
            return [obj[complement], x];
        }
        obj[nums[x]] = x;
    }
};