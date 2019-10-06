import React, { Component, useState } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

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

export const Fruit = (props) => {
  const { name } = props;
  return (
    <Text>{name}</Text>
  );
};

export const Fruits = () => (
  <>
    <View>
      <Fruit name="banana" />
    </View>
    <View>
      <Fruit name="apple" />
    </View>
  </>
);

export class Counter extends Component {
  state={
    count: 0,
  }

  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  render() {
    const { count } = this.state;
    return (
      <>
        <Text>{count}</Text>
        <Button
          title="Click me!"
          onPress={() => this.increment()}
        />
      </>
    );
  }
}

export const HookExample = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Text>{count}</Text>
      <Button
        title="Click me!"
        onPress={() => setCount(count + 1)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
  },
  blue: {
    backgroundColor: 'blue',
  },
  red: {
    backgroundColor: 'red',
  },
});

export const Boxes = () => (
  <View>
    <View style={[styles.box, styles.blue]}>
      <Text>Blue</Text>
    </View>
    <View style={[styles.box, styles.red]}>
      <Text>Red</Text>
    </View>
  </View>
);

// const styles = StyleSheet.create({
//   avatarContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   avatar: {
//     width: 36,
//     height: 36,
//     borderRadius: 36 / 2,
//   },
//   avatarText: {
//     marginLeft: 8,
//     color: '#222',
//   },
// });

// export const PostAvatar = ({ image, username }) => (
//   <View style={styles.avatarContainer}>
//     <Image
//       style={styles.avatar}
//       resizeMode="cover"
//       source={{ uri: image }}
//     />
//     <Text style={styles.avatarText}>{username}</Text>
//   </View>
// );

export const Caption = ({
  username,
  content,
}) => (
  <Text style={styles.caption}>
    <Text style={styles.captionUsername}>
      {username}
    </Text>
    <Text>{content}</Text>
  </Text>
);

export const Comment = ({
  comment,
  changeText,
}) => (
  <View>
    <Text>{comment}</Text>
    <TextInput
      placeholder="Add a comment..."
      onChangeText={changeText}
      value={comment}
    />
  </View>
);

export const Icon = () => (
  <Image
    style={{
      width: 30,
      height: 30,
    }}
    source={require('../assets/pawprint.png')}
  />
);

export const Background = () => (
  <ImageBackground
    style={{ width: '100%', height: '100%' }}
    source={require('../assets/background.jpg')}
  >
    <Text>This goes on top</Text>
  </ImageBackground>
);

export const PrimaryButton = ({
  handlePress,
}) => (
  <Button
    onPress={handlePress}
    title="Learn more"
    color="#1044b5"
    accessibilityLabel="Learn more"
  />
);

export const Action = ({
  handlePress,
}) => (
  <TouchableOpacity onPress={handlePress}>
    <Image
      style={{
        height: 30,
        width: 30,
      }}
      source={require('../assets/pawprint.png')}
    />
  </TouchableOpacity>
);

export const ScrollablePage = ({
  image,
}) => (
  <ScrollView>
    <Text>This is a ScrollView</Text>
    <Image
      style={{ height: 30, width: 30 }}
      source={{ uri: image }}
    />
    <Text>Keep on scrolling!</Text>
    <Image
      style={{ height: 30, width: 30 }}
      source={{ uri: image }}
    />
  </ScrollView>
);

export const LazyList = () => (
  <FlatList
    data={[
      { id: 'a123', name: 'Jeff' },
      { id: 'b456', name: 'Sarah' },
      { id: 'c789', name: 'Carlos' },
    ]}
    renderItem={({ item }) => (
      <Text>{item.name}</Text>
    )}
    keyExtractor={item => item.id}
  />
);
