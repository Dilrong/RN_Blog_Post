import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';

export default class ErrorScreen extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
            style={{width:50, height: 50}}
            source={require('../asset/cancel.png')}
        />
        <Text style={styles.statusText}>서버에 문제가 발생하였습니다.</Text>
        <View style={styles.backButton}>
          <Button
            onPress={() => {
              this.props.navigation.goBack()
            }}
            title="< Back"
            color="#ffffff"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  backButton: {
    backgroundColor: '#3498db',
    borderRadius: 4,
    margin: 10,
    paddingLeft: 5,
    paddingRight: 5,
  }
});