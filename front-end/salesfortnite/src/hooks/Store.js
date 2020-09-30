import { createStore,combineReducers } from 'redux';
import { todoApp } from '../helpers/Reducer';
import { cartReducer } from '../reducers/cartReducer';
import { uiReducer } from '../reducers/uiReducer';

const reducers = combineReducers({
    auth:todoApp,
    ui:uiReducer,
    cart:cartReducer
});
export const Store=createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());