import React, { Component } from 'react'
import { connect } from 'react-redux';

import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';
class PostList extends Component {
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }
    renderlist() {
        const posts = this.props.posts;
        return posts.map(post => {
            return (
                <div key={post.id} className="item">
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <h2>{post.body}</h2>
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            );
        })
    }
    render() {
        console.log(this.props.posts);
        return (
            <div className="ui relaxed divided list">
                {this.renderlist()}
            </div>
        )
    }
};
const mapStateToProps = (state) => {
    return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
