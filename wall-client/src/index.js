import React  from 'react';
import ReactDOM from 'react-dom'

import {

    Route
} from 'react-router-dom';

import { makeStore } from './redux/makestore';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import RegisterContainer from './containers/RegisterContainer'
import registerServiceWorker from './registerServiceWorker';

var user = null;
var token = null;


const store = makeStore({
    showMessageBox: false,
    showSpinner: false,
    user: user,
    token: token,


});

const history = createHistory();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route path="/login" component={RegisterContainer}/>
                <Route path="/*" component={RegisterContainer}/>
            </div>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
