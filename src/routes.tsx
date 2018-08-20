import About from './containers/About';
import App from './containers/App';
import Hello from './containers/Hello';
const routes = [
  {
    component: App,
    routes: [
      { path: '/', exact: true, component: Hello },
      { path: '/about', component: About },
    ]
  }
];

export default routes;