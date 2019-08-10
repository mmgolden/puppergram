import React from 'react';
import { Text, TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  commentText: {
    marginLeft: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#d0d0d0',
    borderWidth: 1,
    marginLeft: 10,
    marginRight: 10,
    padding: 8,
    borderRadius: 20,
  },
});

const Comment = ({
  showComment, comment, changeText, handleSubmit,
}) => {
  const { commentText, username, input } = styles;
  return (
    <>
      { showComment ? (
        <Text style={commentText}>
          <Text style={username}>mrpeanut2019</Text>
          {` ${comment}`}
        </Text>
      ) : (
        <TextInput
          style={input}
          placeholder="Add a comment..."
          onChangeText={changeText}
          value={comment}
          onSubmitEditing={handleSubmit}
        />
      )}
    </>
  );
};

export default Comment;
