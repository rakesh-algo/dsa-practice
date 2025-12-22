class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head)
      this.head = this.tail = newNode;
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head)
      return undefined;
    if (this.length === 1) {
      const poppedNode = this.head;
      this.head = this.tail = null;
      this.length--;
      return poppedNode;
    } else {
      let currentNode = this.head;
      let newTail = currentNode;

      while (currentNode.next) {
        newTail = currentNode;
        currentNode = currentNode.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      currentNode.next = null;
      return currentNode;
    }
  }

  shift() {
    if (!this.head)
      return undefined;
    if (this.length === 1) {
      const removedNode = this.head;
      this.head = this.tail = null;
      this.length--;
      return removedNode;
    } else {
      const removedNode = this.head;
      this.head = this.head.next;
      this.length--;
      removedNode.next = null;
      return removedNode;
    }
  }

  unshift(val) {
    const newNode = new Node(val);
    if(!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length)
      return undefined;
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentIndex !== index) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (!foundNode)
      return false;
    foundNode.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }
    const previousNode = this.get(index - 1);
    if (!previousNode)
      return false;
    const newNode = new Node(val);
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length)
      return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const previousNode = this.get(index - 1);
    const removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    this.length--;
    removedNode.next = null;
    return removedNode;
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;

    let prev = null;
    let next = null;

    for (let i = 0;i < this.length; i++) {
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
list.push(4);
list.push(5);

console.log(list);
list.insert(1, 6);
console.log(list.reverse());


