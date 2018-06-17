Two Way Data Binding
======================
Two Way Data Binding using input should have the onChage method.If we want to display the value inside the text box then we should use value.
If we use only value and onChange is not added then it will become readonly mode and shows the follwing error:

Error:
========
index.js:2178 Warning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.

Solution:
============
If we are using value in input box we should use onChange


Tips:
=======

<button onClick={()=> {this.changeState("Kumar Coimbatore")}}>Change State using Anyonoums function</button>

this should not be used because it will have performance issue for that we should use the following

<button onClick={this.changeState.bind(this, "Name change using bind")}>Change State using Bind function</button>
