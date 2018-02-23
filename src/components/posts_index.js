import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts } from '../actions';

class PostIndex extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }
    renderPosts() {
    return   _.map(this.props.posts, post => {
        return (
          <li className="mdl-list__item" key={post.id}>
sers

          </li>
        );
      });
    }
    render() {
      console.log(this.props.post);
        return (
          <div>
             <h3>Posts</h3>
             <ul className="demo-list-item mdl-list">
                {this.renderPosts()}
                oki
             </ul>
          </div>
        );
    }
}

function mapStateToProps(state){
  return {posts: state.posts};
}

export default connect(null, {fetchPosts: fetchPosts})(PostIndex);
