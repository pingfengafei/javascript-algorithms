'use strict';

var _LinkedList = require('../LinkedList');

var _LinkedList2 = _interopRequireDefault(_LinkedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('LinkedList', function () {
  it('test empty list', function () {
    var list = new _LinkedList2.default();
    expect(list.toString()).toBe('');
  });

  it('test nonEmpty list && append && preappend && del && delHead', function () {
    var list = new _LinkedList2.default();
    list.append(1);
    expect(list.toString()).toBe('1');
    list.append(2);
    expect(list.toString()).toBe('1 2');
    list.append(3);
    expect(list.toString()).toBe('1 2 3');
    list.prepend(4);
    expect(list.toString()).toBe('4 1 2 3');
    list.deleteHead();
    expect(list.toString()).toBe('1 2 3');
    list.deleteTail();
    expect(list.toString()).toBe('1 2');
    list.deleteTail();
    expect(list.toString()).toBe('1');
    list.deleteTail();
    expect(list.toString()).toBe('');
  });
});