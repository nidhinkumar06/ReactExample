import React from 'react';

const Tick = (props) => {
  console.log('props', props);
  return (
    <div>Time is {props.date.toLocaleTimeString()}</div>
  );
}

export default Tick;
