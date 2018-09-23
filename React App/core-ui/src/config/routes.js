import DefaultLayout from '../containers/DefaultLayout';
import MyLoadable from '../hoc/MyLoadable';

const Dashboard = MyLoadable({
  loader: () => import('../../src/pages/secure/Dashboard')
});

const ReportList = MyLoadable({
  loader: () => import('../../src/pages/secure/Report')
});

const Mom = MyLoadable({
  loader: () => import('../../src/pages/secure/Mom')
});

const Login = MyLoadable({
  loader: () => import('../pages/Login')
});

const ReportAdd = MyLoadable({
  loader: () => import('../../src/pages/secure/Report/Add')
});


const ProjectList = MyLoadable({
  loader: () => import('../../src/pages/secure/Project')
});

const ProjectAdd = MyLoadable({
  loader: () => import('../../src/pages/secure/Project/Add')
});

const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/login', exact: true, name: 'Login', component: Login },
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/report', exact: true, name: 'SivagangaWeekly Report', component: ReportList },
  { path: '/report/add', exact: true, name: 'Add Data', component: ReportAdd},
  { path: '/project', exact: true, name: 'Project', component: ProjectList},
  { path: '/project/add', exact: true, name: 'Add Project', component: ProjectAdd}
];

export default routes;
