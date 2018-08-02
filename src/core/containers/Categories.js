import { connect } from 'react-redux';
import CategoriesComponent from '../components/Categories';

import { getCategories } from '../actions/categories';

const mapStateToProps = state => {
    return {
        loading: state.categories.loading,
        categories: state.categories.categories
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => dispatch(getCategories())
    };
}

const CategoriesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesComponent);

export default CategoriesContainer;