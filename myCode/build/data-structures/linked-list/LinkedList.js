'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * 单项链表
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _LinkedListNode = require('./LinkedListNode');

var _LinkedListNode2 = _interopRequireDefault(_LinkedListNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports.default = function () {
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
    value: function prepend(value) {}
  }, {
    key: 'delete',
    value: function _delete() {}
  }, {
    key: 'find',
    value: function find() {}
  }, {
    key: 'deleteHead',
    value: function deleteHead() {}
  }, {
    key: 'deleteTail',
    value: function deleteTail() {}
  }, {
    key: 'toArray',
    value: function toArray() {}
  }, {
    key: 'toString',
    value: function toString() {}
  }]);

  return SingLinkedList;
}();