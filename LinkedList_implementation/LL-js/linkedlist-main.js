class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(d) {
    const temp = new Node(d);
    temp.next = this.head;
    this.head = temp;
  }

  insertAtTail(d) {
    const node = new Node(d);
    
    if (!this.head) {
      this.head = node;
      return;
    }
    
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    temp.next = node;
  }

  insertAfterHead(d) {
    if (!this.head) {
      this.insertAtHead(d);
      return;
    }
    
    const node = new Node(d);
    const next = this.head.next;
    this.head.next = node;
    node.next = next;
  }

  insertAtPosition(position, d) {
    if (position === 1) {
      this.insertAtHead(d);
      return;
    }

    let temp = this.head;
    let cnt = 1;
    
    while (cnt < position - 1 && temp) {
      temp = temp.next;
      cnt++;
    }

    if (!temp) return;

    const nodeToInsert = new Node(d);
    
    if (temp.next === null) {
      this.insertAtTail(d);
      return;
    }

    nodeToInsert.next = temp.next;
    temp.next = nodeToInsert;
  }

  deleteAtPosition(position) {
    if (!this.head) return;

    if (position === 1) {
      this.head = this.head.next;
      return;
    }

    let curr = this.head;
    let prev = null;
    let cnt = 1;

    while (cnt < position && curr) {
      prev = curr;
      curr = curr.next;
      cnt++;
    }

    if (!curr) return;

    prev.next = curr.next;
  }

  print() {
    let temp = this.head;
    const values = [];
    
    while (temp !== null) {
      values.push(temp.data);
      temp = temp.next;
    }
    
    console.log(values.join(' '));
  }

  toArray() {
    let temp = this.head;
    const values = [];
    
    while (temp !== null) {
      values.push(temp.data);
      temp = temp.next;
    }
    
    return values;
  }
}

function createLinkedList(arr) {
  const list = new LinkedList();
  
  if (!arr || arr.length === 0) {
    return list;
  }
  
  for (let i = 0; i < arr.length; i++) {
    list.insertAtTail(arr[i]);
  }
  
  return list;
}

// LeetCode
function createListNode(arr) {
  if (!arr || arr.length === 0) return null;
  
  const head = new Node(arr[0]);
  let current = head;
  
  for (let i = 1; i < arr.length; i++) {
    current.next = new Node(arr[i]);
    current = current.next;
  }
  
  return head;
}

function listNodeToArray(head) {
  const result = [];
  let current = head;
  
  while (current !== null) {
    result.push(current.data);
    current = current.next;
  }
  
  return result;
}

module.exports = {
  Node,
  LinkedList,
  createLinkedList,
  createListNode,
  listNodeToArray
};