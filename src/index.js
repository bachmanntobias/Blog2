import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';
import PostIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
var createPost = console.log("7");
createPost;

class Hello extends React.Component {
  render() {return <div>Hello!</div>}
}
class Goodbye extends React.Component {
  render() {return <div>Goodbye!</div>}
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>

<Switch>
         <Route path="/" component={PostIndex} />
         <Route path="/posts/:id" component={PostsShow}/>
         <Route path="/posts/new" component={PostsNew} />
</Switch>
   </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
