import React from 'react';
import stylesWrapper from './../HOC/styleWrapper';
const ButtonOne = (props) => {
  return (
    <button style={props.styles}>I am new button</button>
  );
}

export default stylesWrapper(ButtonOne);
