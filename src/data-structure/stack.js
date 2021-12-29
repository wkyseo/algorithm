// ������Ŀ 20,155,232,844,224,682,496.

// ����ʵ��ջ
class ArrayStack {
  constructor(length) {
    this.stack = new Array(length);
    this.length = length;
    this.count = 0;
  }

  push(val) {
    if(this.count === this.length) {
      return false;
    }
    this.stack[this.count] = val;
    this.count++;
    return true;
  }

  pop() {
    if(this.count === 0) {
      return null;
    }
    const val = this.stack[this.count-1];
    this.stack[this.count-1] = null;
    this.count--
    return val;
  }
}


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// ����ջ
// ʱ�临�Ӷ� O(1)?
class LinkedListStack {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  push(node) {
    if(this.head === null) {
      this.head = node;
    } else {
      let curNode = this.head;
      while(curNode !== null && curNode.next !== null) {
        curNode= curNode.next;
      }
      curNode.next = node;
    }
    
    this.count++;
    return this.count;
  }

  pop() {
    if(this.head === null) {
      return null;
    }

    // �ҵ����Ľڵ�
    let lastVal = null;
    let curNode = this.head;
    if(curNode.next === null) {
      lastVal = curNode.val;
      this.head = null;
    } else {
      while (curNode.next !== null) {
        curNode = curNode.next;
      }
      lastVal = curNode.val;
      let previousNode = this.findPreviousNode(lastVal);
      previousNode.next = null;
    }

    this.count--;
    return lastVal;
  }

  findPreviousNode(val) {
    let curNode = this.head;
    while(curNode.next !== null && curNode.next.val !== val) {
      curNode = this.head.next;
    }
    return curNode;
  }
}