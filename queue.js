"use strict";
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
    if (this.size === 0) return null;
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}

module.exports = Queue;
