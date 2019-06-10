
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor(value, parent) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  insert(value) {
    if (!this.value) { this.value = value; return; }

    // if value at root is greater than insertion value
    if (value >= this.value) {

      if (!this.right) {
        this.right = new BinarySearchTree(value, this);
      } else {
        this.right.insert(value);
      }

    // if value at root is less than insertion value
    } else if (value < this.value) {

      if (!this.left) {
        this.left = new BinarySearchTree(value, this);
      } else {
        this.left.insert(value);
      }
    }
  }

  delete(value, parent) {

    if (!value) { return false; }

    if (this.value === value) {

      // delete with no children 
      if (!this.left && !this.right) { this.value = null; return true; }

      // delete with two childs

      // delete with one child 
      if (parent.left && parent.left.value === value) {
        parent.left = null;
        return true;
      } else if (parent.right && parent.right.value === value) {
        parent.right = null
        return true;
      }
    } 

    if (value >= this.value) {
      if (this.right) {
        return this.right.delete(value, this);
      } else {
        return null;
      }
    } else {
      if (this.left) {
        return this.left.delete(value, this);
      } else {
        return null;
      }
    }    
  }

  search(value) {
    if (!value) { return null; }
    if (this.value === value) { return this; }

    if (value >= this.value) {
      if (this.right) {
        return this.right.search(value);
      } else {
        return null;
      }
    } else {
      if (this.left) {
        return this.left.search(value);
      } else {
        return null;
      }
    }
  }

  preOrder() {
    let arr = [];

    const exec = (bstNode) => {
      if (!bstNode) { return; }

      arr.push(bstNode.value);

      exec(bstNode.left);
      exec(bstNode.right);
    };

    exec(this);

    return arr;
  }

  inOrder() {
    let arr = [];

    const exec = (bstNode) => {
      if (!bstNode) { return; }

      if (bstNode.left !== undefined) {
        exec(bstNode.left);
      }

      arr.push(bstNode.value);

      if (bstNode.right !== undefined) {
        exec(bstNode.right);
      }
    };

    exec(this);
    return arr;
  }

  postOrder() {
    let arr = [];
    const exec = (bstNode) => {
      if (!bstNode) { return; }

      if (bstNode.left !== undefined) {
        exec(bstNode.left);
      }

      if (bstNode.right !== undefined) {
        exec(bstNode.right);
      }

      arr.push(bstNode.value);
    };
    exec(this);
    return arr;
  }
}

let tree = new BinarySearchTree;
tree.insert(100)
tree.insert(20)
tree.insert(200)
tree.insert(10)
tree.insert(30)
tree.insert(150)
tree.insert(300)
console.log(tree.search(30));
console.log(tree.delete(30));
console.log(tree.search(30));
console.log(tree.preOrder());
console.log(tree.inOrder());
console.log(tree.postOrder());


