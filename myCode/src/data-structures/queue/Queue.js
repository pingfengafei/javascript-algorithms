import LinkedList from '../linked-list/LinkedList'

class Queue {
  constructor () {
    this.queue = new LinkedList()
  }

  isEmpty () {
    return !!!this.queue.head
  }

  push (val) {
    this.queue.append(val)
    return val
  }

  pop () {
    let headNode = this.queue.deleteHead()
    return headNode && headNode.value
  }

  toString () {
    return this.queue.toString()
  }
}

export default Queue
