import { createStore,combineReducers } from 'redux';
import { todoApp } from '../helpers/Reducer';
import { uiReducer } from '../reducers/uiReducer';

const reducers = combineReducers({
    auth:todoApp,
    ui:uiReducer,
});
export const Store=createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());