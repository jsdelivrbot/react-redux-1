import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

//The Route object will find a match between a path and a component
//The IndexRoute sets what the default component will be when the path is '/'
//If the route only matches the parent then it will default to IndexRoute
export default (
	<Route path="/" component={App}>
	    <IndexRoute component={PostsIndex} />
	    <Route  path='posts/new' component={PostsNew} />
	</Route>
);

//ex. google.com/ => render App 