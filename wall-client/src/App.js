import React, { Component } from 'react';
import logo from './logo.svg';
import { render } from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import { makeStore } from './redux/makestore';
import { Provider } from 'react-redux';
import RegisterComponent from './components/RegisterComponent'

var user = null;
var token = null;


const store = makeStore({
    showMessageBox: false,
    showSpinner: false,
    user: user,
    token: token,


});


class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Route path="/login" component={RegisterComponent}/>
                    <Route path="/*" component={RegisterComponent}/>
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;




