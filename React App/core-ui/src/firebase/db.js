import { db } from './firebase';

//ADD API
export const addWeeklyReport = (data) => db.collection('weeklyreport').add(data);
