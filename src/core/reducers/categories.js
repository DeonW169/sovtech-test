import { CATEGORIES_LOADING, CATEGORIES_SUCCESS } from '../actions/categories';

const initialState = {
    loading: true,
    categories: []
}
const categories = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORIES_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: [...action.payload]
            }
        default:
            return state;
    }
}
export default categories;