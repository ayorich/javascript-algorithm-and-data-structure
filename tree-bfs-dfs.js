// -------recursive-----------//

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function preorderTraversal(root) {
  let res = [];
  preorder(root, res);
  return res;
}

function preorder(root, res) {
  if (root === null) return;

  res.push(root.val);
  preorder(root.left, res);
  preorder(root.right, res);
}

// Example:
let rootNode = new TreeNode(1);
rootNode.left = new TreeNode(2);
rootNode.right = new TreeNode(3);
rootNode.left.left = new TreeNode(4);
rootNode.left.right = new TreeNode(5);

console.log('Preorder Traversal:');
console.log(preorderTraversal(rootNode));

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function inorderTraversal(root) {
  let res = [];
  inorder(root, res);
  return res;
}

function inorder(root, res) {
  if (root === null) return;

  inorder(root.left, res);
  res.push(root.val);
  inorder(root.right, res);
}

// Example:
let rootNode = new TreeNode(1);
rootNode.left = new TreeNode(2);
rootNode.right = new TreeNode(3);
rootNode.left.left = new TreeNode(4);
rootNode.left.right = new TreeNode(5);
rootNode.right.left = new TreeNode(6);
rootNode.right.right = new TreeNode(7);

console.log('Inorder Traversal:');
console.log(inorderTraversal(rootNode));

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function postorderTraversal(root) {
  let res = [];
  postorder(root, res);
  return res;
}

function postorder(root, res) {
  if (root === null) return;

  postorder(root.left, res);
  postorder(root.right, res);
  res.push(root.val);
}

// Example:
let rootNode = new TreeNode(1);
rootNode.left = new TreeNode(2);
rootNode.right = new TreeNode(3);
rootNode.left.left = new TreeNode(4);
rootNode.left.right = new TreeNode(5);

console.log('Postorder Traversal:');
console.log(postorderTraversal(rootNode));

//---------stack travesal
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function preorderTraversal(root) {
  let stack = [];
  let res = [];

  if (root === null) return res;

  stack.push(root);

  while (stack.length > 0) {
    let currentNode = stack.pop();
    res.push(currentNode.val);

    if (currentNode.right !== null) {
      stack.push(currentNode.right);
    }
    if (currentNode.left !== null) {
      stack.push(currentNode.left);
    }
  }

  return res;
}

// Example:
let rootNode = new TreeNode(1);
rootNode.left = new TreeNode(2);
rootNode.right = new TreeNode(3);
rootNode.left.left = new TreeNode(4);
rootNode.left.right = new TreeNode(5);

console.log('Preorder Traversal using Stack:');
console.log(preorderTraversal(rootNode));

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function inorderTraversal(root) {
  let stack = [];
  let res = [];
  let curr = root;

  while (curr !== null || stack.length > 0) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    res.push(curr.val);
    curr = curr.right;
  }

  return res;
}

// Example:
let rootNode = new TreeNode(1);
rootNode.left = new TreeNode(2);
rootNode.right = new TreeNode(3);
rootNode.left.left = new TreeNode(4);
rootNode.left.right = new TreeNode(5);

console.log('Inorder Traversal using Stack:');
console.log(inorderTraversal(rootNode));
