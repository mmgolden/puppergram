import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  postImage: {
    alignSelf: 'center',
    height: 400,
    width: 415,
  },
});

const PostImage = ({ item: { image } }) => {
  const { postImage } = styles;
  return (
    <Image
      style={postImage}
      resizeMode="cover"
      source={{ uri: image }}
    />
  );
};

export default PostImage;
