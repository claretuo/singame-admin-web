import * as React from 'react';
import * as ReactDOM from 'react-dom';
import routes from './routes';
import StoreConfig from './store';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { ConnectedRouter } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import asyncMatchRoutes from './utils';
import './index.css';
import Loadable from 'react-loadable';

(async () => {
  const history = createBrowserHistory();
  const store = StoreConfig(history);
  const hydrate = async routeList => {
    const {  match, params } = await asyncMatchRoutes(routeList, history.location.pathname);
    ReactDOM.render(
      <Provider store={store}>
        <ConnectedRouter history={history} store={store}>
          {renderRoutes(routeList)}
        </ConnectedRouter>
      </Provider>,
      document.getElementById('root') as HTMLElement
    );
  }
  
  await Loadable.preloadReady();
  await hydrate(routes);
})()


