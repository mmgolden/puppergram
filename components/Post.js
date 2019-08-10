import React, { Component } from 'react';
import Avatar from './Avatar';
import PostImage from './PostImage';
import Actions from './Actions';
import Caption from './Caption';
import Comment from './Comment';

class Post extends Component {
  state={
    likes: 0,
    showComment: false,
    comment: '',
  }

  handlePress = () => {
    const { likes } = this.state;
    this.setState({
      likes: likes + 1,
    });
  }

  changeText = (input) => { this.setState({ comment: input }); }

  handleSubmit = () => { this.setState({ showComment: true }); }

  render() {
    const { likes } = this.state;

    return (
      <>
        <Avatar {...this.props} />
        <PostImage {...this.props} />
        <Actions likes={likes} handlePress={this.handlePress} />
        <Caption {...this.props} />
        <Comment changeText={this.changeText} handleSubmit={this.handleSubmit} {...this.state} />
      </>
    );
  }
}

export default Post;
