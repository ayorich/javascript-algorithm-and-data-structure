//-------------------------MAX BINARY HEAP-----------------//

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1; //2
        const element = this.values[idx];//55
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);//0
            let parent = this.values[parentIdx]; //41
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    print(){
        return this.values;
    }
}
let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
console.log(heap.print())
// insert => [41,39,33,18,27,12,55]
// result => [55,39,41,18,27,12,33]

//-------------PRIORITY QUEUE----------//
class PriorityQueue {
    constructor() {
        this.values = [];
    }
    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.values.length - 1;//4
        const element = this.values[idx];//p3
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);//1
            let parent = this.values[parentIdx];//p2
            if (element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    print() {
        return this.values.map(el => el.priority);
    }
}
class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}
let ER = new PriorityQueue();
ER.enqueue("common cold", 5)
ER.enqueue("gunshot wound", 1)
ER.enqueue("high fever", 4)
ER.enqueue("broken arm", 2)
ER.enqueue("glass in foot", 3)
console.log(ER.print())
//enqueue => [5,1,4,2,3]
// result=>[1,2,4,5,3]