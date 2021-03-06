import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPosts } from '../actions';

class PostIndex extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }
    renderPosts() {
    return   _.map(this.props.posts, post => {
        return (
          <li className="list-group-item" key={post.id}>
<Link to={`/posts/${post.id}`}>
{post.title}
</Link>
          </li>
        );
      });
    }
    render() {
      //console.log(this.props.post);
        return (
          <div>
            <div className="text-xs-right">
                <Link to="/posts/new" className="btn btn-primary<">
                  	Posten
                </Link>
                  </div>
             <h3>Posts</h3>
             <ul className="mdl-list">
                <li className="mdl-list__item">
                    <span className="mdl-list__item-primary-content">
                      {this.renderPosts()}

                    </span>
                </li>
            </ul>
          </div>
        );
    }
}

function mapStateToProps(state){
  return {posts: state.posts};
}

export default connect(null, {fetchPosts: fetchPosts})(PostIndex);
