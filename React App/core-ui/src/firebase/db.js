import { db } from './firebase';

//user auth
export const fetchLoggedInUser = () => db.collection('users').get();

//ADD API
export const addWeeklyReport = (data) => db.collection('weeklyreport').add(data);
export const getWeeklyReport = () => db.collection('weeklyreport').get();

//projectsAPI
export const addProject = (data) => db.collection('project').add(data);
export const fetchProjects = () => db.collection('project').get();
