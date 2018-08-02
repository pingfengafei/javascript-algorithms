import Queue from '../Queue'

describe('test Queue', ()=>{
  let queue = new Queue()

  it('init an empty queue', ()=>{
    expect(queue.isEmpty()).toBe(true)
  })

  it('push queue', ()=>{
    queue.push(0)
    expect(queue.toString()).toBe('0')
    queue.push(1)
    expect(queue.toString()).toBe('0 1')
    queue.push(2)
    expect(queue.toString()).toBe('0 1 2')
    queue.push(3)
    expect(queue.toString()).toBe('0 1 2 3')
  })


  it('pop queue', ()=>{
    queue.pop()
    expect(queue.toString()).toBe('1 2 3')
    queue.pop()
    expect(queue.toString()).toBe('2 3')
    queue.pop()
    expect(queue.toString()).toBe('3')
    queue.pop()
    expect(queue.toString()).toBe('')
    expect(queue.isEmpty()).toBe(true)
  })
})
