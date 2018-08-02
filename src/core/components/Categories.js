import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavbarComponent from './Navbar';

class CategoriesComponent extends Component {
    static propTypes = {
        loading: PropTypes.bool.isRequired,
        categories: PropTypes.array.isRequired,
        getCategories: PropTypes.func.isRequired,
        getCategory: PropTypes.func.isRequired
    }

    static defaultProps = {
        categories: []
    }

    componentWillMount() {
        this.props.getCategories();
    }

    loadCategory(category) {
        debugger
        this.props.getCategory(category);
    }

    render() {
        let { loading, categories } = this.props;

        const _categories = [];
        this.props.categories.map(_category => {
            if (_categories.indexOf(_category) === -1) {
                _categories.push(_category)
            }
        });
        return ( 
            <div>
                <NavbarComponent> </NavbarComponent> 
                <div className="container">
                    <div className="col-sm-6" >
                        <div className="row" >
                            <h4 className=""> Categories </h4> 

                            <section className='display-item'>
                                <div className="wrapper">
                                    <ul>
                                    {_categories.map((cat, index) => {
                                        return (
                                        <li key={index}>
                                            <h3>{cat}</h3>
                                            <p>
                                                Content about <strong>{cat}</strong> <br />
                                                Click the button to learn more
                                                <button onClick={this.loadCategory({cat})}>Open {cat}</button>
                                            </p>
                                        </li>
                                        )
                                    })}
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row" >
                            <h4 className=""> Category </h4>
                            <CategoryComponent ></CategoryComponent>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoriesComponent;