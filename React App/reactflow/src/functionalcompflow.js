import React from 'react';
type funcProp = {
  str: string
};
const FunctionalComp = (props:funcProp) => {
  return(
    <h1>
       {props.str}
    </h1>
  );
}

export default FunctionalComp;
