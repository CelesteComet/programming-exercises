const MaxHeap = function() {
  this.data = [null]; // for easier calculation (2n for left, 2n+1 for right)
};

MaxHeap.prototype.push = function(val) {
  this.data.push(val);
  this.heapify();
};

MaxHeap.prototype.pop = function() {
  let temp = this.data[1];
  this.data[1] = this.data[this.data.length - 1];
  this.heapify();
  return temp;
};

MaxHeap.prototype.heapify = function() {
  let indexOfLastNode = this.data.length - 1;
  if (indexOfLastNode < 1) { return; } // no need to heapify
  let parent; 
  // if index is odd, it is a left child
  if (indexOfLastNode % 2 === 0) {
    parent = 2 * indexOfLastNode;
  } else { // if index is even, it is a right child
    parent = (2 * indexOfLastNode) - 1;
  }
  

};

// [1,2,3,4,5]












let maxHeap = new MaxHeap;
maxHeap.push(1);
console.log(maxHeap.data === [1]);
maxHeap.push(3);
maxHeap.push(2);
maxHeap.push(5);
maxHeap.push(2);
console.log(maxHeap.pop() === 5);
console.log(maxHeap.pop() === 3);
console.log(maxHeap.pop() === 2);
console.log(maxHeap.pop() === 2);