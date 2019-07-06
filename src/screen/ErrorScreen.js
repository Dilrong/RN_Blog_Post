import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

class ErrorScreen extends Component{
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
    Done: {
        screen: DoneScreen
    },
    Error: {
        screen: ErrorScreen
    }
},
{
    initialRouteName: 'Home',
    header: null,
    headerMode: 'none'
});
  
export default createAppContainer(AppNavigator);