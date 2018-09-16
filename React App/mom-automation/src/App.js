import React, { Component } from 'react';
import '../node_modules/@coreui/coreui/dist/css/coreui.min.css';
import '../node_modules/@coreui/icons/css/coreui-icons.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/simple-line-icons/css/simple-line-icons.css';
import '../src/styles/scss/style.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <div>
        <ToastContainer />
        <Dashboard />
      </div>
    );
  }
}

export default App;
