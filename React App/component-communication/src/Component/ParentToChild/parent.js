import React from 'react';
import Child from './child';

const Parent = (props) => {
  return (
    // <div>
    //   <Child {...props}/>
    // </div>
    <div>
      <Child doWhatEver={props.changeTheWorldEvent} title={props.title}/>
      <Child doWhatEver={props.changeThePeopleEvent} title={props.title}/>
    </div>
  )
}

export default Parent;
