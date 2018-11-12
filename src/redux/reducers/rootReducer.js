import { combineReducers } from 'redux';
import userReducer from './userReducer';
import transactionReducer from './transactionReducer';
import errorReducer from "./errorReducer";
export default combineReducers({
    transactions: transactionReducer,
    userReducer,
    errors: errorReducer
});