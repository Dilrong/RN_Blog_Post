import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Axios from 'axios';

class PostScreen extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen
    },
    Post: {
        screen: PostScreen
    }
},
{
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none'
});
  
export default createAppContainer(AppNavigator);