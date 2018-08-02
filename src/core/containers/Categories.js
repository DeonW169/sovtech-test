import { connect } from 'react-redux';
import CategoriesComponent from '../components/Categories';

import { getCategories } from '../actions/categories';
import { getCategory } from '../actions/categories';

const mapStateToProps = state => {
    return {
        loading: state.categories.loading,
        categories: state.categories.categories,
        category: state.category.category
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => dispatch(getCategories()),
        getCategory: (cat) => dispatch(getCategory(cat))
    };
}

const CategoriesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesComponent);

export default CategoriesContainer;