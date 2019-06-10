/*

HashMap, key value pairs

Java initiates with a 16 bucket array
each bucket holds a linked list
each node on the list has a key value pair associated with the hash.

to distribute evenly on the array we use a hash

hash the key to some big number
hash % array.length to store it at some bucket
store as linkedlists


*/



String.prototype.hashCode = function() {
    var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

class LinkedList {
  constructor(key, val) {
    this.key = key;
    this.value = val;
    this.next = null;
  }
}

class HashMap {
  constructor() {
    this.array = new Array(16); // JAVA HashMap starts at 16
  }

  set(key, value) {
    // hash the key
    let hashed = key.hashCode();

    // choose the bucket
    let bucketIndex = Math.abs(hashed % this.array.length);

    // put it in as a linked list
    if (this.array[bucketIndex] === undefined || this.array[bucketIndex] === null) {
      this.array[bucketIndex] = new LinkedList(key, value);
    } else {
      let current = this.array[bucketIndex];
      while (current.next !== null && current.key !== key) {
        current = current.next;
      }
      if (current.key === key) {
        return current.value = value;
      }
      current.next = new LinkedList(key, value);
    }
  }

  get(key) {
    
    let hashed = key.hashCode();

    let bucketIndex = Math.abs(hashed % this.array.length);

    let current = this.array[bucketIndex];
    while (current && current.key !== key && current.next) {
      current = current.next;
    }

    if (!current) {
      return null;
    } else {
      return current.value;
    }
  }

  delete(key) {
    let hashed = key.hashCode();

    let bucketIndex = Math.abs(hashed % this.array.length);

    let current = this.array[bucketIndex];
    let prev = current;
    while (current && current.next && current.key !== key) {
      prev = current;
      current = current.next;
    }
    if (current) {
      if (prev.key === current.key) {
        this.array[bucketIndex] = null; 
        return;
      }
      prev.next = current.next;
      current.next = null;
    } 
  }
}


let map = new HashMap;

map.set("Bruce", "lexus");
map.set("Alice", "bmw");
map.set("Raymond", "mercedes");
map.set("Raymond2", "mercedes");
map.set("Raymond3", "mercedes");
map.set("Bruce", "bmw");
map.set("Raymond", "jaguar");
map.delete("Bruce");
map.set("Bruce", "isgreat");
console.log(map.get("Bruce"));



