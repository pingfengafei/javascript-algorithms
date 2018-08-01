import LinkedList from '../LinkedList'

describe('LinkedList', () => {
  it('test empty list', () => {
    const list = new LinkedList()
    expect(list.toString()).toBe('')
  })

  it('test nonEmpty list && append && preappend && del && delHead', () => {
    const list = new LinkedList()
    list.append(1)
    expect(list.toString()).toBe('1')
    list.append(2)
    expect(list.toString()).toBe('1 2')
    list.append(3)
    expect(list.toString()).toBe('1 2 3')
    list.prepend(4)
    expect(list.toString()).toBe('4 1 2 3')
    list.deleteHead()
    expect(list.toString()).toBe('1 2 3')
    list.deleteTail()
    expect(list.toString()).toBe('1 2')
    list.deleteTail()
    expect(list.toString()).toBe('1')
    list.deleteTail()
    expect(list.toString()).toBe('')
  })
})
