/* 
* LRU Least Recently Used
* 我们维护一个有序单链表，越靠近链表尾部的结点是越早之前访问的。当有一个新的数据被访问时，我们从链表头开始顺序遍历链表。
1. 如果此数据之前已经被缓存在链表中了，我们遍历得到这个数据对应的结点，并将其从原来的位置删除，然后再插入到链表的头部。
2. 如果此数据没有在缓存链表中，又可以分为两种情况：如果此时缓存未满，则将此结点直接插入到链表的头部；如果此时缓存已满，则链表尾结点删除，将新的数据结点插入链表的头部
时间复杂度 O(n)，都需要遍历查找
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Lru {
  constructor(limit) {
    this.head = null;
    this.size = 0;
    this.limit = limit
  }

  insert(val) {
    // 链表为空
    if(this.head === null) {
      this.head = new Node(val);
      this.size++;
      return;
    } 

    const curNode = this.find(val);
    // 此数据已在链表中
    if(curNode) {
      // 删除原来位置
      const previousNode = this.findPrevious(val);
      if(previousNode === null) {
        return;
      }
      previousNode.next = curNode.next;
      // 插入链表头部
      curNode.next = this.head;
      this.head = curNode;
      return;
    }

    if(this.size >= this.limit) {
      this.delLastNode();
      this.size--;
    }
    const headNode = new Node(val);
    headNode.next = this.head;
    this.head = headNode;
    this.size++;
  }

  find(val) {
    let curNode = this.head;
    while(curNode !== null && val !== curNode.val) {
      curNode = curNode.next;
    }
    return curNode;
  }

  findPrevious(val) {
    let curNode  = this.head;
    while(curNode.next !== null && curNode.next.val !== val) {
      curNode = curNode.next;
    }
    return curNode;
  }

  delLastNode() {
    let curNode  = this.head;
    while(curNode !== null && curNode.next !== null) {
      curNode = curNode.next;
    }
    const previousNode = this.findPrevious(curNode.val);
    previousNode.next = null;
  }

  reverse() {
    if(this.head === null) {
      return;
    }
    let prev = null;
    let curNode = this.head; 
    while(curNode !== null) {
      // 此步很关键，让 curNode 等于原链表剩余部分 指向 next(新建一个引用|指针)
      const next = curNode.next;
      // 链表剩余部分已被赋值给 next，所以此处可以直接修改 curNode.next
      curNode.next = prev;
      prev = curNode;
      
      curNode = next;
    }
    return prev;
  }
}


/*
* 散列表
* 时间复杂度 O(1) ????
参考？：https://juejin.cn/post/6844904183426973710， 不一定准确，借鉴下
*/