// ����ַ�����ͨ�����������洢�ģ��Ǹ�������ж���һ�����Ĵ��أ�
// ��Ӧ��ʱ��ռ临�Ӷ����Ƕ����أ�

// ����˼·��ʹ�ÿ�������ָ���ҵ������е㣬��ָ��ÿ��ǰ��һ������ָ��ÿ��ǰ������������ָ��ǰ���Ĺ����У�ͬʱ�޸��� next ָ�룬ʹ������ǰ�벿�ַ������Ƚ��е�����������Ƿ���ȡ�
// �˺�����ı�ԭ�����������ס���
function isPalindrome(head) {
  if(head === null || head.next === null) {
    return true;
  }
  let prev = null;
  let slow = head;
  let fast = head;
  debugger;
  // ����ָ���ҳ��м�ڵ�
  while(fast !== null && fast.next !== null) {
    fast = fast.next.next;
    // ǰ�벿������
    const next = slow.next;
    slow.next = prev;
    prev = slow;

    slow = next;
  }

  // ����λ�ַ�������һλ
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