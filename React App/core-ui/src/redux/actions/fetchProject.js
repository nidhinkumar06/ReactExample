import { db } from '../../firebase';

export const startUpdating = () => ({ type: 'ACTION_START' });
export const projectUpdateSuccess = (data) => ({ type: 'ACTION_SUCCESS', payLoad: data });
export const projectUpdateFailure = () => ({ type: 'ACTION_ERROR' });

export const fetchProjects = () => {
  return (dispatch) =>
  {
    dispatch(startUpdating());
    db.fetchProjects().then((snapshot) => {
      let projects = [];
      snapshot.docs.forEach((doc) => {
        let project = doc.data();
        project = {...project, ...{id: doc.id}};
        projects.push(project);
      });
      dispatch(projectUpdateSuccess(projects));
    });
  };
};
