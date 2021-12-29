const listA = [1,3,5,7];
const listB = [2,4,6,8];
// �ϲ�������������
class Node {
  constructor(val) {
    this.val = val; //��ǰ�ڵ��Ԫ��
    this.next = null; //��һ���ڵ�����
  }
}
class List {
  constructor() {
    this.head = null; //ͷ�ڵ�
    this.find = find; //���ҽڵ�
    this.insert = insert; //����ڵ�
    this.remove = remove; //ɾ���ڵ�
    this.display = display; //��ʾ����
    this.findPrevious = findPrevious; //����ǰһ���ڵ�
  }
}
//����ĺ����ǲ�����������ӦList�๹�캯���е�����
//���Ҹ����ڵ�
function find(item) {
  if(this.head === null) {
    this.head = new Node(item);
    return;
  }
  var curNode = this.head;
  while(curNode !== null && curNode.val != item) {
    curNode = curNode.next;
  }
  return curNode;
}
//���������һ���ڵ�
function insert(newVal,item) {
  var newNode = new Node(newVal);
  var current = this.find(item);
  if(current == null) {
    return console.log("can't find the item");
  }
  newNode.next = current.next;
  current.next = newNode;
}
//ɾ���ڵ�
function remove(item) {
  var prevNode = this.findPrevious(item);
  if(prevNode.next != null) {
    prevNode.next = prevNode.next.next;
  }
}
//��������ɾ���ڵ�ʱ��������Ҫ�Ҹ���ɾ���ڵ��ǰһ���ڵ㣬�ҵ��������޸����� next ���ԣ�ʹ�䲻��ָ���ɾ���Ľڵ㣬���Ǵ�ɾ���ڵ����һ���ڵ㡣��ô�����Ǿ͵���Ҫ����һ�� findPrevious ���������������ÿһ���ڵ����һ���ڵ��Ƿ�洢��ɾ�������ݡ�����ҵ������ظýڵ㣬�����Ϳ����޸����� next �����ˡ�
//���Ҵ�ɾ���ڵ��ǰһ���ڵ�
function findPrevious(item) {
  var currNode = this.head;
  while(currNode.next !== null && currNode.next.val !== item) {
    currNode = currNode.next;
  }
  return currNode;
}
//��ʾ����Ԫ��
function display() {
  var current = this.head;
  while(current.next != null) {
    console.log(current.next.val);
    current = current.next;
  }
}

var mergeTwoLists = function(l1, l2) {
  // ģ����������ݽṹ
  var mergedHead = { val : -1, next : null }, // �ڱ��ڵ�
    cur = mergedHead;
  while (l1 && l2){
    if(l1.val <= l2.val){
      cur.next = l1;
      l1 = l1.next;
    }
    else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 || l2
  return mergedHead.next;
};


// ����
function skipList() {

}

// ����ת
/* 
* ������ת
* �����л��ļ��
* �������������ϲ�
* ɾ���������� n �����
* ��������м���
* 206��141��21��19��876
*/

/* ������ת ������ѭ����ʹ�õݹ飿
* ���룺head = [1,2,3,4,5]
* �����[5,4,3,2,1]
*/
function reverseList(head) {
  if(head === null) {
    return null;
  }
  let prev = null;
  let curNode = head; 
  while(head !== null) {
    // �˲��ܹؼ����� curNode ����ԭ����ʣ�ಿ�� ָ�� next(�½�һ������|ָ��)
    const next = curNode.next;
    // ����ʣ�ಿ���ѱ���ֵ�� next�����Դ˴�����ֱ���޸� curNode.next
    curNode.next = prev;
    prev = curNode;
    
    curNode = next;
  }
  return prev;
  // if(head.length === 0) {
  //   return [];
  // }
  // // ����ת����
  // function arrayToList(head) {
  //   let list = null;
  //   for(let i = head.length-1; i >= 0; i--) {
  //     list = {val: head[i], next: list};
  //   }
  //   return list;
  // }

  // let curNode = arrayToList(head);
  // let prev = null;
  // // ��ת 
  // while(curNode !== null) {
  //   let next = curNode.next;
  //   curNode.next = prev;
  //   prev = curNode;
  //   curNode = next;
  // }
  // console.log('prev', prev);

  // // ����ת����
  // const arr = [];
  // while(prev !== null) {
  //   arr.push(prev.val);
  //   prev = prev.next;
  // }
  // return arr;
}


// �����л��ļ��
// ���˼·��1.����ָ�룬2.��ϣ��??
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if(head === null || head.next === null) {
    return false;
  }
  let slow = head;
  let fast = head.next;
  while(slow !== fast) {
    if(fast === null || fast.next === null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};




