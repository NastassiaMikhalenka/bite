import { combineReducers } from 'redux';
import shopReducer from './Shopping/shoppingReducer'

const rootReduscer = combineReducers({
    shop: shopReducer,

});

export default rootReduscer;

