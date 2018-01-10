# object-immutable-set

[![npm version](https://badge.fury.io/js/object-immutable-set.svg)](https://badge.fury.io/js/object-immutable-set)
[![CircleCI](https://circleci.com/gh/GhystonSoftware/object-immutable-set.svg?style=shield)](https://circleci.com/gh/GhystonSoftware/object-immutable-set)

Updated deeply nested objects in an immutable and type-safe way. Written and providing first class support for [Typescript](https://www.typescriptlang.org/)

## Usage

`yarn add object-immutable-set` 

or using npm 

`npm install object-immutable-set --save`

```typescript
import { set } from 'object-immutable-set'

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

updatedObject.b.c.d.deepProperty // 'updated value'
deeplyNestedObject.b.c.d.deepProperty // 'original value'
updatedObject.b.c.d.deeper === deeplyNestedObject.b.c.d.deeper // true 

```

Note that the second parameter is type safe meaning that if you attempted to do something like:

```typescript
const updatedObject: ComplexObjectType = set(deeplyNestedObject, ['b', 'oops', 'd', 'deepProperty'], 'updated value')

```

you will get a compilation error similar to:

```
error TS2345: Argument of type '["b", "oops", "d", "deepProperty"]' is not assignable to parameter of type '["b", "c", "d", "deepProperty", "length" | ...'.
  
86     const updatedObject: ComplexObjectType = set(deeplyNestedObject, ['b', 'oops', 'd', 'deepProperty'], 'updated value')
                                                                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

```


## Motivation

Sometimes you want to immutably update a deeply nested property, currently you are faced with either
- losing type safety using an existing javascript-only / non-typesafe option e.g [_.set](https://lodash.com/docs/4.17.4#set) or [object-path-immutable](https://www.npmjs.com/package/object-path-immutable)
- creating a [deep clone](https://lodash.com/docs/4.17.4#cloneDeep) and mutating it which can be expensive, and additionally will fail to re-use any of the previous object:

```javascript
import { cloneDeep } from 'lodash'

const updatedObject = cloneDeep(originalObject)
updatedObject.a.b.c.d = 'This was a bit expensive'
```

- lots of error-prone boilerplate

```javascript
const updatedObj = {
  ...originalObject,
  a: {
    ...originalObject.a,
    b: {
      ...originalObject.a.b,
      c: {
        ...originalObject.a.b.c,
        d: 'You can see where this is going'
      },
    },
  },
}

```

We found this to be particularly useful when working with [React component state](https://reactjs.org/docs/state-and-lifecycle.html) or, less often, a complex [Redux reducer](https://redux.js.org/docs/basics/Reducers.html).

## Contributing

Pull requests and issues welcome and encouraged! 

Before submitting a PR please make sure that you:
- Check that everything compiles: `yarn lint`
- Run the tests: `yarn test` adding new tests to preserve the code coverage
- Run the linter: `yarn lint` to make sure new code conforms to the existing style
