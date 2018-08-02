'use strict';

var _Queue = require('../Queue');

var _Queue2 = _interopRequireDefault(_Queue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('test Queue', function () {
  var queue = new _Queue2.default();

  it('init an empty queue', function () {
    expect(queue.isEmpty()).toBe(true);
  });

  it('push queue', function () {
    queue.push(0);
    expect(queue.toString()).toBe('0');
    queue.push(1);
    expect(queue.toString()).toBe('0 1');
    queue.push(2);
    expect(queue.toString()).toBe('0 1 2');
    queue.push(3);
    expect(queue.toString()).toBe('0 1 2 3');
  });

  it('pop queue', function () {
    queue.pop();
    expect(queue.toString()).toBe('1 2 3');
    queue.pop();
    expect(queue.toString()).toBe('2 3');
    queue.pop();
    expect(queue.toString()).toBe('3');
    queue.pop();
    expect(queue.toString()).toBe('');
    expect(queue.isEmpty()).toBe(true);
  });
});