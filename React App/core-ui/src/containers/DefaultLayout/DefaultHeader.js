import React, { Component } from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav} from 'reactstrap';
import PropTypes from 'prop-types';

import { AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import avatar from '../../assets/avatars/profile.png';

import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { auth } from '../../firebase';



const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  logout = () => {
    auth.doSignOut();
    toast.success('Signed out successfully');
  };

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    // const mail = this.props.authUser.authUser.email;
    const mail = 'temp@gmail.com';
    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 150, height: 30, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />


        <Nav className="ml-auto" navbar>
          {mail}
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <img src={avatar} className="img-avatar" alt={mail} />
            </DropdownToggle>
            <DropdownMenu right style={{ right: 'auto' }}>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem onClick={this.logout}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser
});


DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default connect(mapStateToProps)(DefaultHeader);
