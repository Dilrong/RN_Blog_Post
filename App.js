import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from "react-navigation";
import { Provider } from "mobx-react";
import HomeScreen from './src/HomeScreen';
import postStore from './src/postStore';

const AppNavigator = createStackNavigator({
  Home: HomeScreen
}, 
{
  initialRouteName: "Home",
  header: null,
  headerMode: 'none'
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{
  render() {
    return (
      <Provider postStore={postStore}>
        <AppContainer/>
      </Provider>
    );
  }
}