/**
 * 单项链表
 *
 *
 */

import LinkedListNode from './LinkedListNode'

module.exports.default = class SingLinkedList {
  constructor () {
    this.head = this.tail = null
  }

  append (value) {
    const node = new LinkedListNode(value)
    if (this.head === null && this.tail === null) {
      this.head = this.tail = node
    }else{
      this.tail.next = node
      this.tail = node
    }

    return this
  }

  prepend (value) {

  }

  delete () {

  }

  find () {

  }

  deleteHead () {

  }

  deleteTail () {

  }

  toArray () {

  }

  toString () {

  }
}


