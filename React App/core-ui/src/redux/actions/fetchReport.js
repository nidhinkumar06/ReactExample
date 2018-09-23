import { db } from '../../firebase';

export const startUpdating = () => ({ type: 'ACTION_START' });
export const reportUpdateSuccess = (data) => ({ type: 'ACTION_SUCCESS', payLoad: data });
export const reportUpdateFailure = () => ({ type: 'ACTION_ERROR' });

export const fetchReports = () => {
  return (dispatch) =>
  {
    dispatch(startUpdating());
    db.getWeeklyReport().then((snapshot) => {
      let reports = [];
      snapshot.docs.forEach((doc) => {
        let report = doc.data();
        report = {...report, ...{id: doc.id}};
        reports.push(report);
      });
      dispatch(reportUpdateSuccess(reports));
    });
  };
};
