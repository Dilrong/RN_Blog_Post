import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Provider } from 'mobx-react';
import HomeScreen from './src/screen/HomeScreen';
import postStore from './src/store/postStore';
import DoneScreen from './src/screen/DoneScreen';
import ErrorScreen from './src/screen/ErrorScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Done: DoneScreen,
  Error: ErrorScreen
}, 
{
  initialRouteName: 'Home',
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