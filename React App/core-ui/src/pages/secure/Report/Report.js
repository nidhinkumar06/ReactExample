import React, { Component } from 'react';
import { Fab } from 'react-mdc-web/lib';
import MaterialIcon from 'material-icons-react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import '../../../styles/scss/coding.css';
import ReportList from './List';
import withAuthorization from '../../../hoc/session/withAuthorization';
import { fetchReports } from '../../../redux/actions/fetchReport';

class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(fetchReports());
  }

  addReport = () => {
    this.props.history.push('/report/add');
  };

  render() {
    const reports = this.props.reports;
    return (
      <div className="animated fadeIn">
        {reports.length > 0 ? (
          <ReportList reports={reports} {...this.props} />
        ) : (
          <h2> No Reports Available, Click + to add new Reports</h2>
        )}
        <Fab className="fab" onClick={this.addReport}>
          <MaterialIcon icon="add" color="#FFFFFF" />
        </Fab>
      </div>
    );
  }

}

const authCondition = (authUser) => !!authUser;

function mapStateToProps(state) {
  return {
    reports: state.reportState.reports
  };
}

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(Report);
