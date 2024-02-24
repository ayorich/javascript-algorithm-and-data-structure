//-------------------------sorting array--------------------
// [9,2,3,1,6]
//1. call sort function
//2. pop each values and call sort of remaining array
//3. start inserting recursively the arr and popped value
//4. if temp val is greater than last val in arr pop and recall insert
//5. insert temp val
//6. return arr sorted
const sort = (arr) => {
  if (arr.length === 1) {
    return arr; // base condition
  }

  const temp = arr.pop();
  sort(arr);
  insert(arr, temp);
  return arr;
};

const insert = (arr, temp) => {
  if (arr.length === 0 || temp >= arr[arr.length - 1]) {
    arr.push(temp);
    return;
  }

  const val = arr.pop();
  insert(arr, temp);
  arr.push(val);
};

const main = () => {
  const arr = [3, 2, 4, 1];
  sort(arr);
};

main();

// -------------sort stack-------------

class Stack {
  constructor() {
    this.items = [];
  }

  push(data) {
    this.items.push(data);
  }

  printStack() {
    for (let i = this.items.length - 1; i >= 0; i--) {
      console.log(this.items[i]);
    }
  }

  sort() {
    if (this.items.length === 1) {
      return this;
    }
    const temp = this.items.pop();
    this.sort();
    this.insert(temp);
    return this;
  }

  insert(temp) {
    if (this.items.length === 0 || temp >= this.items[this.items.length - 1]) {
      this.items.push(temp);
      return;
    }

    const val = this.items.pop();
    this.insert(temp);
    this.items.push(val);
  }
}

const stack = new Stack();

stack.push(2);
stack.push(5);
stack.push(1);
stack.push(3);

stack.printStack();

stack.sort();

stack.printStack();
