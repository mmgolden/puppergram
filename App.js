import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  Platform,
} from 'react-native';
import * as Font from 'expo-font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginTop: 5,
  },
  header: {
    backgroundColor: '#f6f6f6',
    height: Platform.OS === 'ios' ? 90 : 78,
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 45 : 30,
    borderBottomColor: '#d0d0d0',
    borderBottomWidth: 1,
  },
  headerText: {
    fontFamily: 'lobster-bold',
    fontSize: 28,
  },
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
  navigation: {
    backgroundColor: '#f6f6f6',
    height: 45,
    borderColor: '#d0d0d0',
    borderWidth: 1,
  },
});

export default class App extends Component {
  // Data for the app
  state = {
    loading: true,
    images: [],
    users: [],
    quotes: [],
  }

  // Runs immediately after the component mounts
  componentDidMount() {
    // Load fonts
    Font.loadAsync({
      'lobster-bold': require('./assets/fonts/LobsterTwo-Regular.ttf'), //eslint-disable-line
    });

    // Number of results we want back from the API
    const numberOfResults = '3';

    // Dog API URL
    const dogURL = `https://dog.ceo/api/breeds/image/random/${numberOfResults}`;

    // Random user API URL
    const randomURL = `https://randomuser.me/api/?format=json&nat=us&inc=login&results=${numberOfResults}`;

    // Random quote API URL
    const quoteURL = `https://api.quotable.io/quotes?limit=${numberOfResults}`;

    // Get the images from the API
    fetch(dogURL)
      .then(res => res.json())
      .then(({ message }) => {
        const images = message.map(msg => ({
          image: msg,
        }));
        this.setState({
          loading: false,
          images,
        });
      })
      .catch(error => console.error(error));

    // Get the random usernames from the API
    fetch(randomURL)
      .then(res => res.json())
      .then(({ results }) => {
        this.setState({
          loading: false,
          users: results,
        });
      })
      .catch(error => console.error(error));

    // Get random quotes from API
    fetch(quoteURL)
      .then(res => res.json())
      .then(({ results }) => {
        this.setState({
          loading: false,
          quotes: results,
        });
      })
      .catch(error => console.error(error));
  }

  getData = () => {
    const { images, users, quotes } = this.state;
    const data = [];

    images.forEach((image, index) => {
      data.push(Object.assign({}, image, users[index], quotes[index]));
    });

    return data;
  }

  // Renders the components to the screen
  render() {
    const { loading } = this.state;
    const {
      container,
      header,
      headerText,
      avatarContainer,
      avatar,
      avatarText,
      postImage,
      caption,
      captionUsername,
      navigation,
    } = styles;

    const data = this.getData();

    // If loading, return loading indicator
    if (loading) {
      return (
        <View style={container}>
          <ActivityIndicator
            size="large"
            color="#777777"
          />
        </View>
      );
    }

    // Render images
    return (
      <View style={container}>
        <View style={header}>
          <Text style={headerText}>Puppergram</Text>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => {
            const { image, content, login: { username } } = item;
            return (
              <>
                <View style={avatarContainer}>
                  <Image
                    style={avatar}
                    resizeMode="cover"
                    source={{ uri: image }}
                  />
                  <Text style={avatarText}>{username}</Text>
                </View>
                <Image
                  style={postImage}
                  resizeMode="cover"
                  source={{ uri: image }}
                />
                <Text style={caption}>
                  <Text style={captionUsername}>
                    {username}
                  </Text>
                  {` ${content}`}
                </Text>
              </>
            );
          }}
          keyExtractor={item => item.login.uuid}
        />
        <View style={navigation} />
      </View>
    );
  }
}
