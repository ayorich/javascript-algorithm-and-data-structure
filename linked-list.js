// https://onecompiler.com/javascript/4239qpp7f
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
  }

  traverse() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
  delete(pos) {
    if (this.head === null) {
      return;
    }
    let current = this.head;
    let previous = null;
    let count = 0;
    if (pos === 0) {
      this.head = current.next;
    } else {
      while (current !== null && count < pos) {
        previous = current;
        current = current.next;
        count++;
      }
      if (current === null) {
        return;
      }
      previous.next = current.next;
    }
  }
  insert(data, pos) {
    const newNode = new Node(data);
    if (pos === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let count = 0;

      while ((count < pos) & (current !== null)) {
        previous = current;
        current = current.next;
        count++;
      }
      newNode.next = current;
      previous.next = newNode;
    }
  }
  reverse() {
    let prev = null;
    let curr = this.head;
    let forw = null;

    while (curr !== null) {
      forw = curr.next;
      curr.next = prev;

      prev = curr;
      curr = forw;
    }
    this.head = prev;
  }
  middle() {
    let fast = this.head;
    let slow = this.head;

    if (fast.next === null) return this.head;

    while (fast != null && fast.next !== null) {
      slow = slow.next;
      fast = slow.next;
    }
    return slow;
  }
  getANode(pos) {
    if (pos == null) return this.head;

    let curr = this.head;
    let count = 0;

    while (count < pos && curr !== null) {
      curr = curr.next;
      count++;
    }

    return curr;
  }
  getLastNode() {
    let node = this.head;

    while (node !== null && node.next !== null) {
      node = node.next;
    }
    return node;
  }
  // makeNodeCycle(pos){//tail cycled/point to node at pos
  //   let lastNode=this.getLastNode()
  //   let lastNodeNext=this.getANode(pos)
  //   lastNode.next=lastNodeNext
  // }
  hasCycle() {
    let fast = this.head;
    let slow = this.head;

    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast == slow) {
        console.log(fast, slow);
        return true;
      }
    }
    return false;
  }
  isPalindrone() {
    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    let prev = null;
    let curr = slow;
    let forw = null;

    while (curr !== null) {
      forw = curr.next;
      curr.next = prev;
      prev = curr;
      curr = forw;
    }
    slow = prev;

    while (slow !== null && slow.data == this.head.data) {
      this.head = this.head.next;
      slow = slow.next;
    }

    return slow == null;
  }
  display() {
    let current = this.head;
    let result = '';

    while (current !== null) {
      result += current.data + ' -> ';
      current = current.next;
    }

    result += 'null';
    console.log(result);
  }
}

const linked = new linkedList();

linked.add(1);
linked.add(2);
linked.add(3);
linked.add(3);
linked.add(2);
linked.add(1);
linked.display();
// linked.delete(3)
// linked.insert(5,4)
// linked.reverse()
// linked.makeNodeCycle(1)
console.log(linked.isPalindrone());
// linked.traverse()
linked.display();
