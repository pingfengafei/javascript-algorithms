'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 单项链表
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _LinkedListNode = require('./LinkedListNode');

var _LinkedListNode2 = _interopRequireDefault(_LinkedListNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SingLinkedList = function () {
  function SingLinkedList() {
    _classCallCheck(this, SingLinkedList);

    this.head = this.tail = null;
  }

  _createClass(SingLinkedList, [{
    key: 'append',
    value: function append(value) {
      var node = new _LinkedListNode2.default(value);
      if (this.head === null && this.tail === null) {
        this.head = this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }

      return this;
    }
  }, {
    key: 'prepend',
    value: function prepend(value) {
      var node = new _LinkedListNode2.default(value, this.head);
      this.head = node;

      if (!this.tail) {
        this.tail = node;
      }

      return this;
    }
  }, {
    key: 'delete',
    value: function _delete(value) {
      if (!this.head) {
        return null;
      }

      var curNode = this.head,
          prevNode = void 0;

      while (curNode.value !== value) {
        prevNode = curNode;
        curNode = curNode.next;
      }

      if (!curNode) {
        return null;
      }

      prevNode.next = curNode.next;

      return prevNode;
    }
  }, {
    key: 'find',
    value: function find(value) {
      if (!this.head) {
        return null;
      }

      var curNode = void 0;
      while (curNode.value !== value) {
        curNode = curNode.next;
      }

      return curNode;
    }
  }, {
    key: 'deleteHead',
    value: function deleteHead() {
      if (!this.head) {
        return null;
      }

      this.head = this.head.next;

      return this;
    }
  }, {
    key: 'deleteTail',
    value: function deleteTail() {
      console.log(this.head);
      console.log(this.tail);
      console.log(this.head === this.tail);

      if (!this.head) {
        return this;
      }

      if (this.head === this.tail) {
        this.head = this.tail = null;
        return this;
      }

      var curNode = this.head,
          prevNode = null;

      while (curNode.next) {
        prevNode = curNode;
        curNode = curNode.next;
      }

      this.tail = prevNode;
      prevNode.next = null;

      return this;
    }
  }, {
    key: 'toArray',
    value: function toArray() {
      var list = [],
          curNode = this.head;

      while (curNode) {
        list.push(curNode.value);
        curNode = curNode.next;
      }

      return list;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.toArray().join(' ');
    }
  }]);

  return SingLinkedList;
}();

var LinkedList = SingLinkedList;

exports.default = LinkedList;