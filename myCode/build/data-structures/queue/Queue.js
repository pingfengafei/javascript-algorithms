'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LinkedList = require('../linked-list/LinkedList');

var _LinkedList2 = _interopRequireDefault(_LinkedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this.queue = new _LinkedList2.default();
  }

  _createClass(Queue, [{
    key: 'isEmpty',
    value: function isEmpty() {
      return !!!this.queue.head;
    }
  }, {
    key: 'push',
    value: function push(val) {
      this.queue.append(val);
      return val;
    }
  }, {
    key: 'pop',
    value: function pop() {
      var headNode = this.queue.deleteHead();
      return headNode && headNode.value;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return this.queue.toString();
    }
  }]);

  return Queue;
}();

exports.default = Queue;