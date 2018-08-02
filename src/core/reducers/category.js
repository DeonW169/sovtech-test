import { CATEGORY_LOADING, CATEGORY_SUCCESS } from '../actions/categories';

const initialState = {
    loading: true,
    category: {}
}
const category = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case CATEGORY_SUCCESS:
            return {
                ...state,
                category: [...action.payload]
            }
        default:
            return state;
    }
}
export default category;