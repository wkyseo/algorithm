// https://leetcode-cn.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// �ݹ�ʱ�临�Ӷ��Ƕ��٣��ο���https://zhuanlan.zhihu.com/p/129887381
// ����ѭ�����Խ��
// hashMap ? ���������������
// ʱ�临�Ӷ� O(n2)
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

// �ռ任ʱ��
// ʱ�临�Ӷ� O(n)
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


// ɾ�����������е��ظ���
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
 * ˫�����
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