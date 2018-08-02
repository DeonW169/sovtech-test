import React, { Component } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

import CategoriesContainer from '../containers/Categories';
import ProtectedRoute from './ProtectedRoute';
import './App.css';

const styles = theme => ({
  root: {
      flexGrow: 1,
      height: '100%'
  }
})

class App extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

static defaultProps = {
    isLoggedIn: true
}

render() {
  let {classes} = this.props;
  return (
      <div className={classes.root}>
          <Router>
              <Switch>
                  <ProtectedRoute exact path="/" component={CategoriesContainer}  prevent={!this.props.isLoggedIn} redirect="/categories"/>
              </Switch>
          </Router>
      </div>
  );
}
}

export default withStyles(styles)(App);
