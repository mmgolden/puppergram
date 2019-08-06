import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  avatarContainer: {
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 36 / 2,
  },
  avatarText: {
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#222',
  },
  postImage: {
    alignSelf: 'center',
    height: 400,
    width: 415,
  },
  caption: {
    padding: 10,
  },
  captionUsername: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  likesText: {
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});

class Post extends Component {
  state={
    likes: 0,
  }

  handlePress = () => {
    const { likes } = this.state;
    this.setState({
      likes: likes + 1,
    });
  }
  
  render() {
    const {
      avatarContainer,
      avatar,
      avatarText,
      postImage,
      caption,
      captionUsername,
      icon,
      likesText,
    } = styles;
    const { item } = this.props;
    const { image, content, login } = item;
    const { username } = login;
    const { likes } = this.state;

    return (
      <>
        {/* Avatar */}
        <View style={avatarContainer}>
          <Image
            style={avatar}
            resizeMode="cover"
            source={{ uri: image }}
          />
          <Text style={avatarText}>{username}</Text>
        </View>
        {/* Post image */}
        <Image
          style={postImage}
          resizeMode="cover"
          source={{ uri: image }}
        />
        {/* Like icon */}
        <TouchableOpacity style={{ padding: 10 }} onPress={this.handlePress}>
          <Image style={icon} source={require('../assets/pawprint.png')} />
        </TouchableOpacity>
        {/* Likes */}
        <Text style={likesText}>{likes} likes</Text>
        {/* Caption */}
        <Text style={caption}>
          <Text style={captionUsername}>
            {username}
          </Text>
          {` ${content}`}
        </Text>
      </>
    );
  }
};

export default Post;