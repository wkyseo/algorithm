// https://leetcode-cn.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// �ݹ�ʱ�临�Ӷ��Ƕ��٣��ο���https://zhuanlan.zhihu.com/p/129887381
// ����ѭ�����Խ��
// hashMap ? ���������������
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
