/** Node: node for a queue. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;

  // constructor()  { this._ll = new LinkedList(); }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size ++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) throw new Error("The queue is empty");
    let returnVal ;
    if (this.size === 1) {
      returnVal = this.first.val;
      this.first = null;
      this.last = null;
      
    } else {
      returnVal = this.first.val;
      this.first = this.first.next;
    }


    this.size --;
    return returnVal;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this._ll.head;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size > 0 ? true : false;
  }
}


/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (this.head === null) this.head = newNode;
    if (this.tail === null) {
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.tail === null) this.tail = newNode;

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length < 1) throw new Error("List is empty");

    const lstItem = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== null) {
        if (current.next === lstItem) {
          this.tail = current;
          current.next = null;
        }
      }
    }
    this.length--;
    return lstItem.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length < 1) throw new Error("List is empty");

    const firstItem = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }

    this.length--;
    return firstItem.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) throw new Error("Invalid index.");

    const count = 0;
    let result = this.head;
    for (let i = 0; i < idx; i++) {
      result = result.next;
    }

    return result.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) throw new Error("Invalid index.");

    let result = this.head;
    for (let i = 0; i < idx; i++) {
      result = result.next;
    }
    result.val = val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) throw new Error("Invalid index.");

    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }

    if (idx === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    let previous = this.head;
    let nextNode = this.head.next;

    for (let i = 1; i < idx; i++) {
      previous = nextNode;
      nextNode = nextNode.next;
    }

    previous.next = newNode;
    newNode.next = nextNode;

    this.length++;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) throw new Error("Invalid index.");

    let removedNode = new Node();
    if (this.length === 1) {
      removedNode = this.head;
      this.head = null;
      this.tail = null;
    } else if (idx === this.length - 1) {
      removedNode.val = this.pop();
    } else if (idx === 0) {
      removedNode.val = this.shift();
    } else {
      let currentNode = this.head;
      let nextNode = this.head.next;
      for (let i = 1; i < idx; i++) {
        currentNode = nextNode;
        nextNode = nextNode.next;
      }
      currentNode.next = nextNode.next;
      removedNode = nextNode;
    }

    this.length--;
    return removedNode.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;

    let sum = 0;
    let nodeCount = 1;
    let current = this.head;
    while (current.next !== null) {
      sum += current.val;
      nodeCount++;
      current = current.next;
    }
    sum += this.tail.val;
    return (sum / nodeCount);
  }
}

module.exports = Queue;
