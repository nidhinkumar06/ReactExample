React Pure Components:
========================
No Re Rendring will occur in React pure Component

React.PureComponent is similar to React.Component. The difference between them is that React.Component doesn’t implement shouldComponentUpdate(), but React.PureComponent implements it with a shallow prop and state comparison.

If your React component’s render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases.

======================================================

When the componentDidMount is called the render method calls the app and the temp Component for every 2 seconds.To fix this problem we will use the following step.

2 ways we can fix this issue

1.shouldComponentUpdate:
===========================
shouldComponentUpdate(nextProps, nextState) {
   console.log('next state is', nextState);
   console.log('next props', nextProps);
   return(this.state.val === nextState.val ? false : true);
}

Which will check the previous val and current val if the value is different then it will render the temp and app Component else it won't

2.PureComponent:
=================
By extending React Component with PureComponent we can achieve the same result what we get in shouldComponentUpdate


Note:
-------
Don't use PureComponent in the project because of the following reasons:
1.When we have multiple state in a single component.It will do ShallowCompare
2.shallowcompare: It will compare the object reference of the previous state and the currentstate(If both has same reference then it will think nothing has changed).

3.React.PureComponent’s shouldComponentUpdate() only shallowly compares the objects. If these contain complex data structures, it may produce false-negatives for deeper differences. Only extend PureComponent when you expect to have simple props and state, or use forceUpdate() when you know deep data structures have changed. Or, consider using immutable objects to facilitate fast comparisons of nested data.

4.Furthermore, React.PureComponent’s shouldComponentUpdate() skips prop updates for the whole component subtree. Make sure all the children components are also “pure”.

Places where PureComponents can be used is:
---------------------------------------------
1.In Leaf node component (single state structure)

Video URL:
-----------
https://youtu.be/PXXjkq4A-OU  
