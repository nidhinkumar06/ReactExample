Static Type checking in React

PropTypes -
Flow - Light Weight
TypeScript - High weight


Flow Installation:
--------------------
npm i flow-bin

Once installed check package.json and then add the below code in scripts

// "flow" : "flow"

once added run using the command
```javascript
npm run flow init
```


and then run the command
```javascript
npm run Flow
```

To check whether flow is working or not add the following code in any of your react file

//@flow

and then run the command which will give you the result


Type Guards
------------
1.num? - Means optional even if there is no value it will allow
2.ary: Array<number> = For arrays we need to provide type whether it is string or number


Flow Types:
--------------
1.Type Annotations
2.Primitive Types (current)
3.Literal Types
4.Mixed Types
5.Any Types
6.Maybe Types
7.Variable Types
8.Function Types
9.Object Types
10.Array Types
11.Tuple Types
12.Class Types
13.Type Aliases
14.Opaque Type Aliases
15.Interface Types
16.Generic Types
17.Union Types
18.Intersection Types
19.Typeof Types
20.Type Casting Expressions
21.Utility Types
21.Module Types
22.Comment Types

Refs are reference type which would access a particular element

Questions/Doubts:

Optional Object properties:
-------------------------------
In some cases we are using like this
num?: number  //It is called as Optional Object properties

Object types can have optional properties where a question mark ? comes after the property name.

In addition to their set value type, these optional properties can either be void or omitted altogether. However, they cannot be null.

Maybe types:
--------------
and in some part we are using like this
num: ?number  //It is called as Maybe type

Maybe types are for places where a value is optional and you can create them by adding a question mark in front of the type such as ?string or ?number.

In addition to the type in ?type, maybe types can also be null or void.


Flow Link:
https://flow.org/en/docs/types/primitives
