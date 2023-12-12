// 如果字符串是通过单链表来存储的，那该如何来判断是一个回文串呢？
// 相应的时间空间复杂度又是多少呢？

// 别人思路：使用快慢两个指针找到链表中点，慢指针每次前进一步，快指针每次前进两步。在慢指针前进的过程中，同时修改其 next 指针，使得链表前半部分反序。最后比较中点两侧的链表是否相等。
// 此函数会改变原有链表，不明白。。
function isPalindrome(head) {
  if(head === null || head.next === null) {
    return true;
  }
  let prev = null;
  let slow = head;
  let fast = head;
  debugger;
  // 快慢指针找出中间节点
  while(fast !== null && fast.next !== null) {
    fast = fast.next.next;
    // 前半部分逆序
    const next = slow.next;
    slow.next = prev;
    prev = slow;

    slow = next;
  }

  // 奇数位字符串后移一位
  if(fast !== null) {
    slow = slow.next;
  }

  while(slow !== null) {
    if(slow.val !== prev.val) {
      return false;
    }
    slow = slow.next;
    prev = prev.next;
  }

  return true;
}