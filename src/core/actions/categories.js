import axios from 'axios';

export const CATEGORIES_LOADING = 'CORE_CATEGORIES_LOADING';
export const CATEGORIES_SUCCESS = 'CORE_CATEGORIES_SUCCESS';

export const CATEGORY_LOADING = 'CORE_CATEGORY_LOADING';
export const CATEGORY_SUCCESS = 'CORE_CATEGORY_SUCCESS';

const categoriesUrl = 'https://api.chucknorris.io/jokes/categories';
const categoryUrl = 'https://api.chucknorris.io/jokes/random?category=';

export const getCategories = () => {
    return (dispatch) => {
        dispatch(setCategoriesLoading(true))
        return axios.get(categoriesUrl)
            .then((response) => {
                dispatch(categoriesSuccess(response.data));
            }, (error) => {
                // dispatch(httpError(error.response.data.message));
            }).finally(() => {
                dispatch(setCategoriesLoading(false))
            });
    }
}

export const setCategoriesLoading = (loading) => {
    return {
        type: CATEGORIES_LOADING,
        payload: loading
    };
}

export const categoriesSuccess = (data) => {
    return {
        type: CATEGORIES_SUCCESS,
        payload: data
    };
}

export const getCategory = (cat) => {
    return (dispatch) => {
        dispatch(setCategoryLoading(true))
        return axios.get(categoryUrl + cat)
            .then((response) => {
                dispatch(categorySuccess(response.data));
            }, (error) => {
                // dispatch(httpError(error.response.data.message));
            }).finally(() => {
                dispatch(setCategoryLoading(false))
            });
    }
}

export const setCategoryLoading = (loading) => {
    return {
        type: CATEGORY_LOADING,
        payload: loading
    };
}

export const categorySuccess = (data) => {
    return {
        type: CATEGORY_SUCCESS,
        payload: data
    };
}