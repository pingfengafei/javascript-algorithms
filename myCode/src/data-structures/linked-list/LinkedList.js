/**
 * 单项链表
 *
 *
 */

import LinkedListNode from './LinkedListNode'

class SingLinkedList {
  constructor () {
    this.head = this.tail = null
  }

  append (value) {
    const node = new LinkedListNode(value)
    if (this.head === null && this.tail === null) {
      this.head = this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }

    return this
  }

  prepend (value) {
    const node = new LinkedListNode(value, this.head)
    this.head = node

    if (!this.tail) {
      this.tail = node
    }

    return this
  }

  delete (value) {
    if (!this.head) {
      return null
    }

    let curNode = this.head, prevNode

    while (curNode.value !== value) {
      prevNode = curNode
      curNode = curNode.next
    }

    if (!curNode) {
      return null
    }

    prevNode.next = curNode.next

    return prevNode
  }

  find (value) {
    if (!this.head) {
      return null
    }

    let curNode
    while (curNode.value !== value) {
      curNode = curNode.next
    }

    return curNode
  }

  deleteHead () {
    if (!this.head) {
      return null
    }

    this.head = this.head.next

    return this
  }

  deleteTail () {
    console.log(this.head)
    console.log(this.tail)
    console.log(this.head === this.tail)

    if (!this.head) {
      return this
    }

    if(this.head === this.tail){
      this.head = this.tail = null
      return this
    }

    let curNode = this.head, prevNode = null

    while (curNode.next) {
      prevNode = curNode
      curNode = curNode.next
    }

    this.tail = prevNode
    prevNode.next = null

    return this
  }

  toArray () {
    let list = [], curNode = this.head

    while (curNode) {
      list.push(curNode.value)
      curNode = curNode.next
    }

    return list
  }

  toString () {
    return this.toArray().join(' ')
  }
}

const LinkedList = SingLinkedList

export default LinkedList
