import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReduscer from './rootReducer';

const store = createStore(rootReduscer, composeWithDevTools());

export default store;
