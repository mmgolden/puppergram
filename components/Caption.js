import React from 'react';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  caption: {
    padding: 10,
  },
  captionUsername: {
    fontWeight: 'bold',
    marginRight: 10,
  },
});

const Caption = ({ item: { content, login: { username } } }) => {
  const { caption, captionUsername } = styles;
  return (
    <Text style={caption}>
      <Text style={captionUsername}>
        {username}
      </Text>
      {` ${content}`}
    </Text>
  );
};

export default Caption;
