import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';

import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';

//browserHistory
//ex. http://www.stuff.com[/post/5] - tracks the url changes using this method

//hashHistory
//ex. http://www.stuff.com/[#something/5] - tracks the url changes this way

//All of our actions will now flow through the promise middleware
const createStoreWithMiddleware = applyMiddleware(
	promise
)(createStore);
ReactDOM.render(
//We pass off rendering control to our router
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
