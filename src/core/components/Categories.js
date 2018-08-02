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
        categories: [],
        category: {}
    }

    componentWillMount() {
        this.props.getCategories();
    }

    loadCategory(category) {
        this.props.getCategory(category);
    }

    render() {

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
                    <div className="col-sm-8" >
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
                                                <button onClick={this.loadCategory.bind(this, cat)}>Open {cat}</button>
                                            </p>
                                        </li>
                                        )
                                    })}
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="row">
                            <div className="col-sm-4">
                                <a href="https://sov.tech/"><img src={this.props.category ? this.props.category.icon_url : ''} alt="sovtech" /></a>
                            </div>
                            <div className="col-sm-8">
                                <div className="row" >
                                    <h4 className=""> Joke </h4>
                                    <p>
                                        {this.props.category ? this.props.category.value : 'no category chosen'}
                                    </p>
                                </div>
                                <div className="row" >
                                    <h4 className=""> Chucks Id </h4>
                                    <p>
                                        {this.props.category ? this.props.category.id : ''}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CategoriesComponent;