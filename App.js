import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import * as Font from 'expo-font';
import Post from './components/Post';

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
  icon: {
    width: 30,
    height: 30,
  },
  navigation: {
    backgroundColor: '#f6f6f6',
    height: Platform.OS === 'ios' ? 70 : 50,
    borderColor: '#d0d0d0',
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: Platform.OS === 'ios' ? 30 : 10,
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
      'lobster-bold': require('./assets/fonts/LobsterTwo-Regular.ttf'),
    });

    // Number of results we want back from the API
    const numberOfResults = '5';

    // Fetch requests to APIs
    const dogAPICall = fetch(`https://dog.ceo/api/breeds/image/random/${numberOfResults}`);
    const randomUserAPICall = fetch(`https://randomuser.me/api/?format=json&nat=us&inc=login&results=${numberOfResults}`);
    const quoteAPICall = fetch(`https://api.quotable.io/quotes?limit=${numberOfResults}`);

    // Make API requests
    Promise.all([dogAPICall, randomUserAPICall, quoteAPICall])
      .then(responses => Promise.all(responses.map(response => response.json())))
      .then((resJSON) => {
        const { message } = resJSON[0];
        const { results: users } = resJSON[1];
        const { results: quotes } = resJSON[2];
        this.setState({
          loading: false,
          images: message.map(msg => ({
            image: msg,
          })),
          users,
          quotes,
        });
      })
      .catch(error => console.error(error));
  }

  // Combine all of the data
  getData = () => {
    const { images, users, quotes } = this.state;
    const data = [];

    images.forEach((image, index) => {
      data.push(Object.assign({}, image, users[index], quotes[index]));
    });

    return data;
  }

  // Component to render for FlatList
  renderItem = ({ item }) => (<Post item={item} />);

  // Key extractor for FlatList
  keyExtractor = item => item._id;

  // Renders the components to the screen
  render() {
    const { loading } = this.state;
    const {
      container,
      header,
      headerText,
      icon,
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

    // Render posts
    return (
      <>
        <KeyboardAvoidingView style={container} behavior="padding" enabled>
          <View style={header}>
            <Text style={headerText}>Puppergram</Text>
          </View>
          <FlatList
            data={data}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
          />
        </KeyboardAvoidingView>
        <View style={navigation}>
          <Image style={icon} source={require('./assets/house.png')} />
        </View>
      </>
    );
  }
}
