import React from 'react';
import {
  View, Image, Text, StyleSheet,
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
});

const Avatar = ({ item: { image, login: { username } } }) => {
  const { avatarContainer, avatar, avatarText } = styles;
  return (
    <View style={avatarContainer}>
      <Image
        style={avatar}
        resizeMode="cover"
        source={{ uri: image }}
      />
      <Text style={avatarText}>{username}</Text>
    </View>
  );
};

export default Avatar;
