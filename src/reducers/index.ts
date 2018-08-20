import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import enthusiasm from './hello';

export default combineReducers({
    router: routerReducer,
    enthusiasm
});
