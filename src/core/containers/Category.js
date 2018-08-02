import { connect } from 'react-redux';
import CategoryComponent from '../components/Categories';

import { getCategory } from '../actions/categories';

const mapStateToProps = state => {
    return {
        loading: state.category.loading,
        category: state.category.category
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getCategory: () => dispatch(getCategory())
    };
}

const CategoryContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryComponent);

export default CategoryContainer;