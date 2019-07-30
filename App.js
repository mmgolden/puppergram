import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image } from 'react-native';
import * as Font from 'expo-font';

export default class App extends Component {
  // Data for the app
  state = {
    loading: true,
    images: [],
  }

  // Runs immediately after the component mounts
  componentDidMount() {
    // Load fonts
    Font.loadAsync({
      'lobster-bold': require('./assets/fonts/LobsterTwo-Regular.ttf'),
    });

    // Dog API URL
    const url = "https://dog.ceo/api/breeds/image/random/3";

    // Get the images from the API
    fetch(url)
      .then((res) => res.json())
      .then (({ message }) => {
        this.setState({
          loading: false,
          images: message,
        });
      })
      .catch((error) => console.error(error));
  }

  // Renders the components to the screen
  render() {
    const { loading, images } = this.state;

    // If loading, return loading indicator
    if (loading) {
      return(
        <View style={styles.container}>
          <ActivityIndicator
            size="large"
            color="#777777"
          />
        </View>
      )
    }

    // Render images
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Puppergram</Text>
        </View>
        <FlatList
          data={images}
          renderItem={({ item }) => (
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{ uri: item }}
            />
          )}
          keyExtractor={item => item}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#f6f6f6',
    height: 90,
    alignItems: 'center',
    paddingTop: 45,
  },
  headerText: {
    fontFamily: 'lobster-bold',
    fontSize: 28,
  },
  image: {
    alignSelf: 'center',
    height: 400,
    width: 415,
    marginBottom: 5,
  },
});
