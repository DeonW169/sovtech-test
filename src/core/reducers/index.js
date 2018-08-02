import { combineReducers } from 'redux';
import categories from './categories';
import category from './category';

const coreReducers = combineReducers({
    // Reducers
    categories,
    category
});

export default coreReducers;