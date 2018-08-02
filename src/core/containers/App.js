import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => {
    return {
        isLoggedIn: true
    }
}

const AppContainer = connect(
    mapStateToProps
)(App);

export default AppContainer;