Higher order function:
------------------------
A function which is passed as an argument to another function is called higher order function

Higher order component:
--------------------------
Passing a component to a function is called higher order component

Example:
---------
1.If you take the ButtonOne.js in which i have created a button which has some styles by default.
2.If i want to change the color of the button i can write another style and handle it with a condition based on the value i get.
3.But if i want to use some styles from the default i can do using the below steps

let newStyles = {...styles.default}
if (props.disable) {
  newStyles = {...newStyles, ...styles.disable}
}

4.In which i have used the default style when the value gets changed i am adding the new styles by taking the old style padding value

5.But for each component i want to do the same process means i can move it to an higher order component

6.In higher order component we will create a common function where the value gets changed based on the condition and it is called inside the component by

highercomponent(componentName)
