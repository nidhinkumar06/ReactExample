import React, { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { Container } from 'reactstrap';

import {
  AppAside,
  AppBreadcrumb,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import { navigation, routes } from '../../config';
// routes config
import DefaultAside from './DefaultAside';
import DefaultFooter from './DefaultFooter';
import DefaultHeader from './DefaultHeader';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { compose } from 'recompose';
import { connect } from 'react-redux';


class DefaultLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const user = this.props;
    return (
      <div className="app">
        {user.authUser != null && (
          <AppHeader fixed>
            <DefaultHeader />
          </AppHeader>
        )}
        <div className="app-body">
          {user.authUser != null && (
            <AppSidebar fixed display="lg">
              <AppSidebarHeader />
              <AppSidebarForm />
              <AppSidebarNav navConfig={navigation} {...this.props} />
              <AppSidebarFooter />
              <AppSidebarMinimizer />
            </AppSidebar>
          )}
          <main className="main">
            <ToastContainer />
            {user.authUser != null && <AppBreadcrumb appRoutes={routes} />}
              <Container fluid>
                <Switch>
                  {routes.map((route, idx) => {
                      return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                          <route.component {...props} />
                        )} />)
                        : (null);
                    },
                  )}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Container>
          </main>
          {user.authUser != null && (
            <AppAside fixed hidden>
              <DefaultAside />
            </AppAside>
          )}
        </div>
        {user.authUser != null && (
          <AppFooter>
            <DefaultFooter />
          </AppFooter>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser
});

const composedObj = compose(connect(mapStateToProps))(DefaultLayout);

export default withRouter(composedObj);
