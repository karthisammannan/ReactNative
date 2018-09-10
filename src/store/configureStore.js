import { createStore, combineReducers } from 'redux';

import reducer from '../reducers/';

const rootReducer = combineReducers({
    addToCart: reducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;