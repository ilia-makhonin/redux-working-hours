import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { store } from './App';
import App from './App';
import Track from './Track';

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={ store }>
        <Router history={ history }>
            <Route path="/" component={ App }/>
            <Route path="/tracks/:id" component={ Track }/>
        </Router>
    </Provider>, document.getElementById('root'));