import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

// BrowserRouter is interacts with the History Library 
// in case of URL Change and what to do.

// Route Component is used to provide some Customization 
// or Configuration to the React Component

// Switch resolves the confusion in case we have 2 routes leading 
// to the same route.

import PostIndex from './components/post_index';

import promise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';
import PostNew from './components/posts_new';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class Success extends React.Component {
  render() { return <div> Success! </div> }
}

class WorkEthic extends React.Component {
  render() { return <div> 100 Hours/week Work Ethic Success !</div> }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostNew} />
          <Route path="/ElonMusk" component={Success} />
          <Route path="/Ethic" component={WorkEthic} />
          <Route path="/" component={PostIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
