import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducer';
import App from './components/App.jsx';
import Results from './components/Results.jsx';
import {VotingContainer} from './components/Voting.jsx';

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 Days Later'],
      tally: { Sunshine: 2 }
    }
  }
});

const routes = (
  <Route component={App}>
    <Route path="/" component={VotingContainer} />
    <Route path="/results" component={Results} />
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