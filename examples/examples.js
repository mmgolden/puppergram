import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

// Stateful
export class Post extends Component {
  state={
    description: 'This is a post!',
  }

  render() {
    const { description } = this.state;
    return (
      <Text>{description}</Text>
    );
  }
}

// Stateless functional component
export const PostStateless = ({
  description,
}) => (
  <Text>{description}</Text>
);

// React
export const Hello = () => (
  <div>
    <p>Hello world!</p>
  </div>
);

// React native
export const HelloNative = () => (
  <View>
    <Text>Hello world!</Text>
  </View>
);

export const Avatar = ({
  image,
  username,
}) => (
  <View>
    <Image
      style={{
        width: 100,
        height: 100,
      }}
      source={{ uri: image }}
    />
    <Text>{username}</Text>
  </View>
);
