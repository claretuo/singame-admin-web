import Hello from './containers/Hello';
import About from './containers/About';
const routes = [
  {
    component: Hello,
    routes: [
      { path: '/', exact: true, component: Hello },
      { path: '/about', component: About },
    ]
  }
];

export default routes;