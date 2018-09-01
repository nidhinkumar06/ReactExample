NewBoston Link: https://github.com/buckyroberts/React-Redux-Boilerplate

1.For installing React-Redux from npm command

> https://www.npmjs.com/package/react-redux
  https://www.npmjs.com/package/redux
  https://www.npmjs.com/package/redux-logger
  https://www.npmjs.com/package/redux-promise
  https://github.com/reduxjs/redux-thunk

1.npm i react-redux is used for the following:
---------------------------------------------
Provider
connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])

2.npm i redux
---------------
To create store

3.npm i redux logger
---------------------
To log the redux things we use redux logger

4.npm i redux promise
-----------------------
Actions which will have promises we will use redux promises

5.npm i redux thunk
---------------------

Command to installing

> npm i react-redux

2.For installing Redux from npm command is

> npm i redux

3.For installing redux logger command is

> npm i redux-logger

4.For installing redux promise

> npm i redux-promise

5.For installing redux thunk

> npm install --save redux-thunk

Reducer:

Reducer is a piece of data which is stored in the store

createStore - used to created store
combineReducers - used to combine all the reducers which we define

<Provider>
  <App />
</Provider>

Provider will take all of the data from the store and since it is wrapped to App which means the store object will be available to all the components in the app.

Actions:

It has two type
1.type
2.argument

Error:
mapDispatchToProps() in Connect(UserList) must return a plain object. Instead received undefined.

Solution:  return is not added for bindActionCreators
