// Write code to remove duplicates from an unsorted linked list.
// FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?

function removeDups(node) {
  let set = new Set();
  let previous = null;

  while (node !== null) {
    if (set.has(node.data)) {
      previous.next = node.next;
    } else {
      set.add(node.data);
      previous = node;
    }
    node = node.next;
  }
}
// The above solution takes O(N) time, where N is the number ofelements in the linked list.

// Follow Up: No Buffer Allowed
function removeDups(node) {
  let current = node;
  while (current !== null) {
    /* Remove all future nodes that have the same value */
    let runner = current;

    while (runner.next !== null) {
      if (runner.next.data === current.data) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
}

/**------------------------- EXAMPLE ----------------------------------- */
function LinkedListNode(data) {
  this.data = data;
  this.next = null;
}

// Add a method to the LinkedListNode class
LinkedListNode.prototype.deleteDups = function () {
  let set = new Set();
  let previous = null;
  let node = this;

  while (node !== null) {
    if (set.has(node.data)) {
      previous.next = node.next;
    } else {
      set.add(node.data);
      previous = node;
    }

    node = node.next;
  }
};

// Creating the linked list
let node1 = new LinkedListNode(10);
let node2 = new LinkedListNode(15);
let node3 = new LinkedListNode(10);
let node4 = new LinkedListNode(30);
let node5 = new LinkedListNode(15);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Removing duplicates
node1.deleteDups();

// Printing the linked list
let currentNode = node1;
while (currentNode !== null) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}
