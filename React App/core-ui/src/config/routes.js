import DefaultLayout from '../containers/DefaultLayout';
import MyLoadable from '../hoc/MyLoadable';

const Dashboard = MyLoadable({
  loader: () => import('../../src/pages/secure/Dashboard')
});

const Report = MyLoadable({
  loader: () => import('../../src/pages/secure/Report')
});

const Mom = MyLoadable({
  loader: () => import('../../src/pages/secure/Mom')
});

const Login = MyLoadable({
  loader: () => import('../pages/Login')
});

const Add = MyLoadable({
  loader: () => import('../../src/pages/secure/Add')
});


const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/login', exact: true, name: 'Login', component: Login },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/report', exact: true, name: 'SivagangaWeekly Report', component: Report },
  { path: '/agents', exact: true, name: 'Minutes of Meeting', component: Mom },
  { path: '/add', exact: true, name: 'Add Data', component: Add}
];

export default routes;
