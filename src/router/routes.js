import Layout from '@/views/layout/index';
// eslint-disable-next-line
const _import = require(`./_import_${process.env.NODE_ENV}`);

const routes = [
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        redirect: { name: 'home' },
        component: _import('Dashboard/index'),
        children: [
          { path: 'home', name: 'home', component: _import('Dashboard/Home/index') },
          { path: 'gallery', name: 'gallery', component: _import('Dashboard/Gallery/index') },
          { path: 'fav', name: 'fav', component: _import('Dashboard/Fav/index') },
        ],
      },
    ],
  },
];

export default routes;
