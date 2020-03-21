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
            let parentIdx = Math.floor((idx - 1) / 2);//1
            let parent = this.values[parentIdx]; //39
            if (element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
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
// insert => [41,39,33,18,27,12,55]
// result => [41,55,39,18,27,12,33]