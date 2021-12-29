/* 
* LRU Least Recently Used
* ����ά��һ����������Խ��������β���Ľ����Խ��֮ǰ���ʵġ�����һ���µ����ݱ�����ʱ�����Ǵ�����ͷ��ʼ˳���������
1. ���������֮ǰ�Ѿ����������������ˣ����Ǳ����õ�������ݶ�Ӧ�Ľ�㣬�������ԭ����λ��ɾ����Ȼ���ٲ��뵽�����ͷ����
2. ���������û���ڻ��������У��ֿ��Է�Ϊ��������������ʱ����δ�����򽫴˽��ֱ�Ӳ��뵽�����ͷ���������ʱ����������������β���ɾ�������µ����ݽ����������ͷ��
ʱ�临�Ӷ� O(n)������Ҫ��������
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
    // ����Ϊ��
    if(this.head === null) {
      this.head = new Node(val);
      this.size++;
      return;
    } 

    const curNode = this.find(val);
    // ����������������
    if(curNode) {
      // ɾ��ԭ��λ��
      const previousNode = this.findPrevious(val);
      if(previousNode === null) {
        return;
      }
      previousNode.next = curNode.next;
      // ��������ͷ��
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
      // �˲��ܹؼ����� curNode ����ԭ����ʣ�ಿ�� ָ�� next(�½�һ������|ָ��)
      const next = curNode.next;
      // ����ʣ�ಿ���ѱ���ֵ�� next�����Դ˴�����ֱ���޸� curNode.next
      curNode.next = prev;
      prev = curNode;
      
      curNode = next;
    }
    return prev;
  }
}


/*
* ɢ�б�
* ʱ�临�Ӷ� O(1) ????
�ο�����https://juejin.cn/post/6844904183426973710�� ��һ��׼ȷ�������
*/