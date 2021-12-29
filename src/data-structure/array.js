// https://leetcode-cn.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 递归时间复杂度是多少，参考：https://zhuanlan.zhihu.com/p/129887381
// 两次循环可以解决
// hashMap ? 看力扣有人用这个
var twoSum = function(nums, target) {

  function recursion(startCount) {
    console.log('startCount:', startCount);
    const remainVal = target - nums[startCount];
    for(let i = startCount + 1; i < nums.length; i++) {
      let nextVal = nums[i];
      if(nextVal === remainVal ) {
        return [startCount, i];
      } else if(i === nums.length -1 ) {
        startCount = startCount + 1;
        return recursion(startCount)
      } else if(startCount === nums.length - 1) {
        return [];
      }
    }
  }
  return recursion(0);
};
