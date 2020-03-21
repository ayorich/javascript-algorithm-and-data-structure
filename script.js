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