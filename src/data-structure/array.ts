// https://leetcode-cn.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 递归时间复杂度是多少，参考：https://zhuanlan.zhihu.com/p/129887381
// 两次循环可以解决
// hashMap ? 看力扣有人用这个
// 时间复杂度 O(n2)
function twoSum(nums, target) {
  function recursion(startCount) {
    console.log('startCount:', startCount);
    const remainVal = target - nums[startCount];
    for (let i = startCount + 1; i < nums.length; i++) {
      let nextVal = nums[i];``
      if (nextVal === remainVal) {
        return [startCount, i];
      } else if (i === nums.length - 1) {
        startCount = startCount + 1;
        return recursion(startCount);
      } else if (startCount === nums.length - 1) {
        return [];
      }
    }
  }
  return recursion(0);
}

// 空间换时间
// 时间复杂度 O(n)
const twoSumHash = (nums, target) => {
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i];
    const remainNum = target - curNum;
    if (hashMap.has(remainNum)) {
      return [i, hashMap.get(remainNum)];
    }
    hashMap.set(curNum, i);
  }
  return [];
};


// 删除有序数组中的重复项
function removeDuplicates(nums: number[]): number {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }
  let slow = 0;
  let fast = 1;
  while (fast < n) {
    if(nums[fast] !== nums[slow]) {
      ++slow;
      nums[slow] = nums[fast];
    }
    fast++;
  }
  nums = nums.slice(0,slow);
  return fast;
}


function removeElement(nums: number[], val: number): number {
  const n = nums.length;
  if (n === 0) {
    return 0;
  }

  let slow = 0;
  let fast = 0;
  while (fast < n) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast];
      slow ++;
    }
    fast++;
  }

  return slow;
};

/**
 * 双向查找
 * @param nums 
 * @param val 
 * @returns 
 */
var removeElement2 = function(nums, val) {
  let left = 0, right = nums.length;
  while (left < right) {
      if (nums[left] === val) {
          nums[left] = nums[right - 1];
          right--;
      } else {
          left++;
      }
  }
  return left;
};