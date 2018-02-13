import { get, set } from './index'

describe('set', () => {
  const initial = {a: {b: {c: 19}}, aa: 'shallow'}
  const result = set(initial, ['a', 'b', 'c'], 20)

  it('returns the same object when given no path', () => {
    const input = {}
    // Turn off the type system here, we want to test this behaviour so it is supported when being used in a JS only
    // context, but from a typescript perspective it is fine to be given a type error in this situation
    // tslint:disable-next-line:no-any
    expect(set(input, [] as any, undefined)).toBe(input)
  })

  it('can immutably set a deeply nested property', () => {
    expect(result.a.b.c).toBe(20)
  })

  it('does not mutate the original', () => {
    expect(initial.a.b.c).toBe(19)
  })

  it('will preserve other structure', () => {
    const shallowResult = set(initial, ['aa'], 'deep')
    expect(shallowResult.aa).toBe('deep')
    expect(shallowResult.a.b.c).toBe(19)
    expect(initial.aa).toBe('shallow')
    expect(initial.a.b.c).toBe(19)
  })

  it('can immutably update a dictionary type', () => {
    const someDictionary: { [key: string]: { key: number } } = {someKey: {key: 1}, otherKey: {key: 2}}
    const updatedDictionary = set(someDictionary, ['someKey', 'key'], 3)
    expect(updatedDictionary.someKey.key).toBe(3)
    expect(updatedDictionary.otherKey.key).toEqual(someDictionary.otherKey.key)
  })

  it('can immutably update tuples', () => {
    const someTuple: [number, string, { key: number }, { otherKey: string }] =
      [1, 'two', {key: 3}, {otherKey: 'four'}]
    // TODO this doesn't type check
    // tslint:disable-next-line:no-any
    const updatedTuple = set(someTuple, [2, 'key'] as any, 4)
    expect(updatedTuple[2].key).toBe(4)
    expect(updatedTuple[3]).toEqual(someTuple[3])
  })

  it('can immutably update arrays', () => {
    const someArray: Array<{ key: string }> = [{key: 'zero'}, {key: 'one'}, {key: 'two'}]
    // TODO this doesn't type check
    // tslint:disable-next-line:no-any
    const updatedArray = set(someArray, [1, 'key'] as any, 'updated-one')
    expect(updatedArray[1].key).toBe('updated-one')
    expect(updatedArray[0]).toEqual(updatedArray[0])
  })

  it('works as described in the documentation', () => {
    type ComplexObjectType = {
      a: number,
      b: {
        c: {
          d: {
            deepProperty: string,
            deeper: {
              otherProperty: Array<number>,
            },
          },
        },
      },
    }

    const deeplyNestedObject: ComplexObjectType = {
      a: 1,
      b: {
        c: {
          d: {
            deepProperty: 'original value',
            deeper: {
              otherProperty: [1, 2, 3],
            },
          },
        },
      },
    }

    const updatedObject: ComplexObjectType = set(deeplyNestedObject, ['b', 'c', 'd', 'deepProperty'], 'updated value')

    expect(updatedObject.b.c.d.deeper).toEqual(deeplyNestedObject.b.c.d.deeper)
  })

  describe('set simple object with two nested properties', () => {
    const deepObject = {a: {b: 'deep', bb: 'also deep'}, aa: 'shallow'}
    const deepResult = set(deepObject, ['a', 'b'], 'deepest')

    it('can immutably set a deeply nested property', () => {
      expect(deepResult.a.b).toBe('deepest')
    })

    it('shallow nested values are not changed', () => {
      expect(deepResult.aa).toBe('shallow')
    })

    it('deep nested values are not changed', () => {
      expect(deepResult.a.bb).toBe('also deep')
    })
  })

  describe('set more complicated structure', () => {
    const veryNestedObject = {
      a: {
        aa: {
          aaa: {
            aaaa: 'world',
            aaab: 'info',
          },
          aab: {
            aaaa: 'some',
            aaab: 'stuff',
          },
        },
        ab: {
          aaa: {
            aaaa: 'more',
            aaab: 'things',
          },
        },
      },
      b: 'hello',
    }
    const veryNestedResult = set(veryNestedObject, ['a', 'aa', 'aab', 'aaaa'], 'lots of')

    it('changes the desired result', () => {
      expect(veryNestedResult.a.aa.aab.aaaa).toBe('lots of')
    })

    it('shallow nested fields are not changed', () => {
      expect(veryNestedResult.b).toBe(veryNestedObject.b)
    })

    it('deep nested fields are not changed', () => {
      expect(veryNestedResult.a.aa.aaa.aaaa).toBe(veryNestedObject.a.aa.aaa.aaaa)
      expect(veryNestedResult.a.ab.aaa.aaaa).toBe(veryNestedObject.a.ab.aaa.aaaa)
    })
  })
})

describe('get', () => {
  it('Can access a deeply nested value', () => {
    const value = get({ a: { b: { c: { d: 5 } } } }, ['a', 'b', 'c', 'd'])
    expect(value).toBe(5)
  })
})
