import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, hashHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';

import reducer from './reducer';
import App from './components/App.jsx';
import {VotingContainer} from './components/Voting.jsx';
import {ResultsContainer} from './components/Results.jsx';
import {setState} from './action_creators.jsx';
import remoteActionMiddleware from './remote_action_middleware';

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware
)(createStore);
const store = createStoreWithMiddleware(socket);

const socket = io(`${location.protocol}//${location.hostname}:8090`);
socket.on('state', state =>
  store.dispatch(setState(state))
);

const routes = (
  <Route component={App}>
    <Route path="/" component={VotingContainer} />
    <Route path="/results" component={ResultsContainer} />
  </Route>
);


ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={hashHistory}>{routes}</Router>
    </Provider>
  ),
  document.getElementById('app')
);