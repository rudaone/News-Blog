import { createStore, combineReducers } from 'redux';
import { uiReducer } from './reducers/uiReducer';


export default createStore(
    combineReducers({
        ui: uiReducer,
    }),
);


const store = createStore(
    combineReducers({
        ui: uiReducer,
    }), {},

);


export { store }
