import React, { Component } from "react";

import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProtectedRoute extends Component {
    static propTypes = {
        prevent: PropTypes.bool.isRequired,
        redirect: PropTypes.string.isRequired
    }

    getProps({ component, ...rest }) {
        return { Component: component, rest};
    }

    render() {
        let { Component, rest } = this.getProps(this.props);
        return (
            <Route {...rest} render={props => this.props.prevent ?  
                <Redirect to={{
                    pathname: this.props.redirect,
                    state: { from: props.location }
                  }} /> :
                <Component {...props}/>
            }/>
        );
    }
}

export default ProtectedRoute;