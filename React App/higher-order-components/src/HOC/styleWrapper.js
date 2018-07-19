import React from 'react';
import Styles from './../styles/commonStyles';

const translateProps = (props) => {
  let newStyles = {...Styles.default}
  if (props.disable) {
    newStyles = {...newStyles, ...Styles.disable}
  }
  const newProps = {...props, styles:newStyles};
  return newProps;
}

export default (WrappedComponent) => {
   return function wrappedRender(args) {
     return WrappedComponent(translateProps(args));
   }
}
