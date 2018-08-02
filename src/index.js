import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './core/containers/App';
import registerServiceWorker from './registerServiceWorker';


// React Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Material UI
import { MuiThemeProvider, createMuiTheme } from 'material-ui';


// Reducers
import coreReducers from './core/reducers';

// Log App Environment
console.log('ENVIRONEMNT:', process.env.REACT_APP_ENV);

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#E60000'
        },
        secondary: {
            main: '#9C2AA0'
        }
    }
});

let store = createStore(
    coreReducers,
    applyMiddleware(thunk)
);

ReactDOM.render( 
    <MuiThemeProvider theme = { theme } >
        <Provider store = { store } >
            <AppContainer />
        </Provider> 
    </MuiThemeProvider>, document.getElementById('root')
);

registerServiceWorker();