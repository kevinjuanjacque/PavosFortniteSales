import { createStore,combineReducers } from 'redux';
import { todoApp } from '../helpers/Reducer';

const reducers = combineReducers({
    auth:todoApp,
});
export const Store=createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());