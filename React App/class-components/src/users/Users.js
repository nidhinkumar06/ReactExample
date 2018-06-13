import React from 'react';

const Users = (props) => {
  let age = props.age ? props.age : 'NA';
  if (props.children) {
    return (<div>Name: {props.children} | Age: {age}</div>)
  }else {
    return "Invalid User"
  }

}

export default Users;
