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

npm run flow init

and then run the command npm run Flow

To check whether flow is working or not add the following code in any of your react file

//@flow

and then run the command which will give you the result


Type Guards
------------
1.num? - Means optional even if there is no value it will allow
2.ary: Array<number> = For arrays we need to provide type whether it is string or number


Refs are reference type which would access a particular element
