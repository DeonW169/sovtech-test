import { combineReducers } from 'redux';
import categories from './categories';

const coreReducers = combineReducers({
    // Reducers
    categories
});

export default coreReducers;