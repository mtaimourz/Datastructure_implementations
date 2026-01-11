class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.tail = null;
  }

  insertNode(element, d) {
    // Empty list
    if (this.tail === null) {
      const newNode = new Node(d);
      this.tail = newNode;
      newNode.next = newNode;
      return;
    } else {
      // Non-empty list
      // Assuming that the element is present in the list
      let curr = this.tail;
      do {
        if (curr.data === element) {
          // Element found, insert after curr
          const temp = new Node(d);
          temp.next = curr.next;
          curr.next = temp;
          return;
        }
        curr = curr.next;
      } while (curr !== this.tail);
      
      // Element not found, insert at end
      const temp = new Node(d);
      temp.next = this.tail.next;
      this.tail.next = temp;
      this.tail = temp;
    }
  }

  deleteNode(d) {
    if (this.tail === null) {
      return;
    }

    let prev = this.tail;
    let curr = prev.next;

    // Find the node to delete
    do {
      if (curr.data === d) {
        break;
      }
      prev = curr;
      curr = curr.next;
    } while (curr !== this.tail.next);

    // Node not found
    if (curr.data !== d) {
      return;
    }

    prev.next = curr.next;

    // 1 Node Linked list
    if (curr === prev) {
      this.tail = null;
    }
    // >=2 Node linked list
    else if (this.tail === curr) {
      this.tail = prev;
    }

    curr.next = null;
  }

  print() {
    if (this.tail === null) {
      console.log('');
      return;
    }

    let temp = this.tail.next;
    const values = [];

    do {
      values.push(temp.data);
      temp = temp.next;
    } while (temp !== this.tail.next);

    console.log(values.join(' '));
  }

  toArray() {
    if (this.tail === null) {
      return [];
    }

    let temp = this.tail.next;
    const values = [];

    do {
      values.push(temp.data);
      temp = temp.next;
    } while (temp !== this.tail.next);

    return values;
  }
}

function createCircularLinkedList(arr) {
  const list = new CircularLinkedList();

  if (!arr || arr.length === 0) {
    return list;
  }

  list.insertNode(null, arr[0]);

  for (let i = 1; i < arr.length; i++) {
    list.insertNode(arr[i - 1], arr[i]);
  }

  return list;
}

module.exports = {
  Node,
  CircularLinkedList,
  createCircularLinkedList
};