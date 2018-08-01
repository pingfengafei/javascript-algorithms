class LinkedListNode {
  constructor (value, next = null) {
    this.value = value
    this.next = next
  }

  toString(callback){
    return callback ? callback(this.value) : this.value
  }
}


//不能混用import 和 module.exports.default , exports default 会使用Object.defineProperty定义一个__esModule
 export default LinkedListNode
