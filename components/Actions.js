import React from 'react';
import {
  TouchableOpacity, Text, Image, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  likesText: {
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});

const Actions = ({ likes, handlePress }) => {
  const { icon, likesText } = styles;
  return (
    <>
      <TouchableOpacity style={{ padding: 10 }} onPress={handlePress}>
        <Image style={icon} source={require('../assets/pawprint.png')} />
      </TouchableOpacity>
      <Text style={likesText}>{`${likes} like${likes === 1 ? '' : 's'}`}</Text>
    </>
  );
};

export default Actions;
