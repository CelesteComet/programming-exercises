/**
 * @param {number} capacity
 */
function Node(key, val) {
   this.key = key;
   this.val = val;
   this.next = null;
   this.prev = null;
   
};

function LinkedList() {
    this.head = null;
    this.tail = null;
};

LinkedList.prototype.append = function(key, value) {
    let newNode = new Node(key, value);
    console.log('linked', this)
    if (this.tail === null) {
      this.tail = newNode;
      console.log(this);
      this.head = newNode;
      console.log(this);
      console.log('done');
      return newNode;
    }
    this.tail.next = new Node(key, value);
    this.tail = this.tail.next;
    return newNode;
};

LinkedList.prototype.remove = function(key, value) {
    let curr = this.head;
    if (curr.key === key) {
      this.head = curr.next;
      curr.next = null
      return curr;
    }
    while (curr !== null && curr.key !== key) {
        curr = curr.next;
    }

    curr.prev.next = curr.next;
    curr.next = null;
    curr.prev = null;
    return curr;
};


var LRUCache = function(capacity = 2) {
    this.map = {};
    this.linkedList = new LinkedList;
    this.capacity = capacity;
    this.length = 0;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let nodeNotFound = this.map[key] === undefined;
    if (nodeNotFound) {
      return -1;
    }
    console.log('beforeinget', this);
    let node = this.map[key];
    let removed = this.linkedList.remove(key);
    this.linkedList.append(removed.key, removed.val);
    this.map[removed.key] = node;
    console.log('inget', this);
    return node.val;   
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  this.length++;
  if (this.length > this.capacity) {
    this.evict();
  } 
  let node = this.linkedList.append(key, value);
  this.map[key] = node;
};

LRUCache.prototype.print = function() {
  let arr = [];
  let curr = this.linkedList.head;
  while (curr !== null) {
    arr.push(curr.val);
    curr = curr.next;
  }
  console.log(arr);
  return null;
};

LRUCache.prototype.evict = function() {
  let linkedList = this.linkedList;
  let firstNode = linkedList.head;
  linkedList.head = linkedList.head.next;
  firstNode.next = null;
  firstNode.prev = null;
  delete this.map[firstNode.key]
  this.length--;
  return firstNode;
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let cache = new LRUCache(1);
cache.put(2, 1);
cache.get(2);
cache.print();



