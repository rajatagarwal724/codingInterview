import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash'; 

class PostIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={ post.id }>
                    {post.title}
                </li>
            );
        });
    }

    render() {
        console.log(this.props.posts);

        return(
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <h2>HYPERLOOP,TESLA,SPACEX,PAYPAL</h2>
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);