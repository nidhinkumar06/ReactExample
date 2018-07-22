Lifecycle Components:
What is Lifecycle:
Every object in the world works through Lifecycle Birth, living and death
Similarly every Component in react goes through the Lifecycle process which is done in four phases:

1.Initialization
2.Mounting
3.Updation
4.Unmounting

1.Initialization:
==================
  In this phase we will setup the initial states and default props.
Eg:

  ```javascript
    class MusicApp extends Component {
      constructor(props) {
        super(props);
        this.state = {
          volume: 70,
          status: 'pause'
        }
      }
      MusicApp.defaultProps = {
        theme: 'dark'
      }
    }
  ```

The Component is Setting up the initial state in constructor and then the state can be changed later in setState.
The defaultProps is defined as a property of Component to define all the default value of props, which can be overridden with new prop values.

2.Mounting:
============
  After setting the inital state React Component is ready to mount in DOM Browser.This will have the methods before and after mounting of Components.

  * Bullet list
    componentWillMount
    render
    componentDidMount

  componentDidMount:
  -------------------
    It is executed just before the react component is about to mount on the DOM.
    Things to be done before a component mounts should be defined in componentDidMount()
    It is executed only once in the lifecycle of a component before render

  render:
  --------
     render mounts the component onto the browser. This is a pure method, which means it gives the same output every time the same input is provided.

  componentDidMount:
  --------------------
  this is the hook method which is executed after the component did mount on the dom.
  This method is executed once in a lifecycle of a component and after the first render.
  As, in this method, we can access the DOM, we should initialize JS libraries like D3 or Jquery which needs to access the DOM.

3.Updation:
============
This phase gets started when the react component takes birth and grows by receiving props.The component can be updated in 2 ways:
      1.Using props
      2.Using states
The list of hook methods that is updated by calling setState
    A.shouldComponentUpdate
    B.componentWillUpdate
    C.render
    D.componentDidUpdate

A.shouldComponentUpdate:
-------------------------
It tells the React that when the component receives new props or state is being updated, should React re-render or it can skip rendering?
This method is a question, should the Component be Updated?
Hence this method should return true or false, and accordingly the component would be re-rendered or skipped. By default, this method return true.

B.componentWillUpdate:
-----------------------
It is called only when shouldComponentUpdate returns true.
It is used only for presentation similar like constructor or componentWillMount
Eg: When user wants to do some calculation before rendering this method should be used.

C.render:
-----------
Component gets rendered

D.componentDidUpdate:
----------------------
 It is executed when the new updated component has been updated in the DOM.
 It is used to re-trigger the third party libraries which is used to make sure that the libraries reload themselves.


List of methods which gets called when parent sends new props:

    A.componentWillReceiveProps
    B.shouldComponentUpdate
    C.componentWillUpdate
    D.render
    E.componentDidUpdate

A.componentWillReceiveProps:
-----------------------------
When the props get changed and it is not the first render.
Sometimes State depends on the props,whenever the props changes the state should be in sync
Usage: This is how the state get sync with new props

```javascript
 componentWillReceiveProps(nextProps) {
   if (this.props.status !== nextProps.status) {
     this.setState({
       state: nextProps.status
     });
   }
 }
```  

4.Unmounting:
==============

In this phase, the component is not needed and the component will get unmounted from the DOM. The method which is called in this phase

   componentWillUnmount

componentWillUnmount:
----------------------
This method is the last method in the lifecycle. This is executed just before the component gets removed from the DOM.
Usage: In this method, we do all the cleanups related to the component.
For example, on logout, the user details and all the auth tokens can be cleared before unmounting the main component.     

```javascript
  componentWillUnmount() {
    this.chart.destroy()
    this.resetLocalStorage()
  }
```
