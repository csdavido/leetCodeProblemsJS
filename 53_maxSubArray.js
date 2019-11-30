/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var finalMax = -Infinity;
    var curMax = 0;
    
    for (var i = 0; i < nums.length; i++) {
        curMax = Math.max(nums[i], curMax + nums[i]);
        finalMax = Math.max(curMax, finalMax);
    }
    
    return finalMax;
}