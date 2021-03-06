// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, node = null) {
    this.data = data;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // this.head = new Node(data, this.head);
    return this.insertAt(data, 0);
  }

  size() {
    let count = 0;
    let node = this.head;

    while (node) {
      count++;
      node = node.next;
    }

    return count;
  }

  getFirst() {
    // return this.head;
    return this.getAt(0);
  }

  getLast() {
    // if (!this.head) {
    //   return null;
    // }

    // let node = this.head;

    // while (node) {
    //   if (!node.next) {
    //     return node;
    //   }

    //   node = node.next;
    // }
    return this.getAt(this.size() - 1);
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    // if (!this.head) {
    //   return;
    // }

    // this.head = this.head.next;
    return this.removeAt(0);
  }

  removeLast() {
    // if (!this.head) {
    //   return;
    // }

    // if (!this.head.next) {
    //   this.head = null;
    //   return;
    // }

    // let previous = this.head;
    // let node = this.head.next;

    // while (node.next) {
    //   previous = node;
    //   node = node.next;
    // }

    // previous.next = null;
    return this.removeAt(this.size() - 1);
  }

  insertLast(data) {
    // const last = this.getLast();

    // if (last) {
    //   last.next = new Node(data);
    // } else {
    //   this.head = new Node(data);
    // }
    return this.insertAt(data, this.size());
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);

    if (!previous || !previous.next) {
      return;
    }

    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;

    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
