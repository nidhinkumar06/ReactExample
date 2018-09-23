import React, { Component } from 'react';
import { Fab } from 'react-mdc-web/lib';
import MaterialIcon from 'material-icons-react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import '../../../styles/scss/coding.css';
import ProjectList from './List';
import withAuthorization from '../../../hoc/session/withAuthorization';
import { fetchProjects } from '../../../redux/actions/fetchProject';

class Project extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchProjects());
  }

  addProject = () => {
    this.props.history.push('/project/add');
  };

  render() {
    const projects = this.props.projects;
    return (
      <div className="animated fadeIn">
        {projects.length > 0 ? (
          <ProjectList reports={projects} {...this.props} />
        ) : (
          <h2> No Projects Available, Click + to add new Projects</h2>
        )}
        <Fab className="fab" onClick={this.addProject}>
          <MaterialIcon icon="add" color="#FFFFFF" />
        </Fab>
      </div>
    );
  }

}


const authCondition = (authUser) => !!authUser;

function mapStateToProps(state) {
  return {
    projects: state.projectState.projects
  };
}

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(Project);
