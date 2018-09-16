import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../../components/Loading';

const MyLoadable = (options) => {
  return Loadable({
    loader: options.loader,
    loading: Loading,
    render(loaded, props) {
      let Component = loaded.default;
      return <Component {...props} />;
    }
  });
};
export default MyLoadable;
