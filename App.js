import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, Image } from 'react-native';

export default class App extends Component {
  // Data for the app
  state = {
    loading: true,
    images: [],
  }

  // Runs immediately after the component mounts
  componentDidMount() {
    const url = "https://dog.ceo/api/breeds/image/random/3";

    // Get the images from the API
    fetch(url)
      .then((res) => res.json())
      .then ((resJSON) => {
        this.setState({
          loading: false,
          images: resJSON.message,
        });
      })
      .catch((error) => console.error(error));
  }

  // Renders the components to the screen
  render() {
    const { loading, images } = this.state;

    if (loading) {
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          style={{
            marginTop: 40,
          }}
          data={images}
          renderItem={({ item }) => (
            <Image
              style={{
                alignSelf: 'center',
                height: 400,
                width: 400,
                marginBottom: 5,
              }}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
