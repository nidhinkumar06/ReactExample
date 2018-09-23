import React, { Component } from 'react';
import '../node_modules/@coreui/coreui/dist/css/coreui.min.css';
import '../node_modules/@coreui/icons/css/coreui-icons.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/simple-line-icons/css/simple-line-icons.css';
import '../src/styles/scss/style.scss';
import 'material-components-web/dist/material-components-web.min.css';

import { HashRouter } from 'react-router-dom';
import { DefaultLayout } from './containers';
import withAuthentication from '../src/hoc/session/withAuthentication';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <DefaultLayout />
      </HashRouter>
    );
  }
}

export default withAuthentication(App);
