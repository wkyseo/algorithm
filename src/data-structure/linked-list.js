const listA = [1,3,5,7];
const listB = [2,4,6,8];
// 合并两个有序链表
class Node {
  constructor(val) {
    this.val = val; //当前节点的元素
    this.next = null; //下一个节点链接
  }
}
class List {
  constructor() {
    this.head = null; //头节点
    this.find = find; //查找节点
    this.insert = insert; //插入节点
    this.remove = remove; //删除节点
    this.display = display; //显示链表
    this.findPrevious = findPrevious; //查找前一个节点
  }
}
//下面的函数是操作方法：对应List类构造函数中的名称
//查找给定节点
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
//向链表插入一个节点
function insert(newVal,item) {
  var newNode = new Node(newVal);
  var current = this.find(item);
  if(current == null) {
    return console.log("can't find the item");
  }
  newNode.next = current.next;
  current.next = newNode;
}
//删除节点
function remove(item) {
  var prevNode = this.findPrevious(item);
  if(prevNode.next != null) {
    prevNode.next = prevNode.next.next;
  }
}
//从链表中删除节点时，我们先要找个待删除节点的前一个节点，找到后，我们修改它的 next 属性，使其不在指向待删除的节点，而是待删除节点的下一个节点。那么，我们就得需要定义一个 findPrevious 方法遍历链表，检查每一个节点的下一个节点是否存储待删除的数据。如果找到，返回该节点，这样就可以修改它的 next 属性了。
//查找带删除节点的前一个节点
function findPrevious(item) {
  var currNode = this.head;
  while(currNode.next !== null && currNode.next.val !== item) {
    currNode = currNode.next;
  }
  return currNode;
}
//显示链表元素
function display() {
  var current = this.head;
  while(current.next != null) {
    console.log(current.next.val);
    current = current.next;
  }
}

var mergeTwoLists = function(l1, l2) {
  // 模仿链表的数据结构
  var mergedHead = { val : -1, next : null }, // 哨兵节点
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


// 跳表
function skipList() {

}

// 链表反转
/* 
* 单链表反转
* 链表中环的检测
* 两个有序的链表合并
* 删除链表倒数第 n 个结点
* 求链表的中间结点
* 206，141，21，19，876
*/

/* 单链表反转 ，不用循环，使用递归？
* 输入：head = [1,2,3,4,5]
* 输出：[5,4,3,2,1]
*/
function reverseList(head) {
  if(head === null) {
    return null;
  }
  let prev = null;
  let curNode = head; 
  while(head !== null) {
    // 此步很关键，让 curNode 等于原链表剩余部分 指向 next(新建一个引用|指针)
    const next = curNode.next;
    // 链表剩余部分已被赋值给 next，所以此处可以直接修改 curNode.next
    curNode.next = prev;
    prev = curNode;
    
    curNode = next;
  }
  return prev;
  // if(head.length === 0) {
  //   return [];
  // }
  // // 数组转链表
  // function arrayToList(head) {
  //   let list = null;
  //   for(let i = head.length-1; i >= 0; i--) {
  //     list = {val: head[i], next: list};
  //   }
  //   return list;
  // }

  // let curNode = arrayToList(head);
  // let prev = null;
  // // 反转 
  // while(curNode !== null) {
  //   let next = curNode.next;
  //   curNode.next = prev;
  //   prev = curNode;
  //   curNode = next;
  // }
  // console.log('prev', prev);

  // // 链表转数组
  // const arr = [];
  // while(prev !== null) {
  //   arr.push(prev.val);
  //   prev = prev.next;
  // }
  // return arr;
}


// 链表中环的检测
// 解决思路：1.快慢指针，2.哈希表??
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




