function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;

  this.insert = (val) => {
    if (this.value === undefined) {
      this.root = new Node(val);
      return;
    }
    if (val > this.value) {
      if (!this.right) {
        this.right = new Node(val);
      } else {
        this.right.insert(val);
      }
    } else {
      if (!this.left) {
        this.left = new Node(val);
      } else {
        this.left.insert(val);
      }
    }
  }

  this.isPresent = (val) => {
    if (this.value === val) { return true; }
    if (val > this.value && this.right) {
      return this.right.isPresent(val);
    } else if (val <= this.value && this.left) {
      return this.left.isPresent(val);
    }
    return false;
  }
}

let BST = new Node(2);
BST.insert(1);
BST.insert(3);
BST.insert(4);
console.log(BST.isPresent(4) === true);
console.log(BST.isPresent(5) === false);
console.log(BST.isPresent(1) === true);
console.log(BST.isPresent(0) === false);

