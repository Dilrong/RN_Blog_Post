import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, Button} from 'react-native';

export default class DoneScreen extends Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width:50, height: 50}}
          source={require('../asset/checked.png')}
        />
        <Text style={styles.statusText}>포스팅이 완료 되었습니다.</Text>
        <Text style={styles.link}>http://localhost:3000</Text>
        <Text style={styles.link}>http://localhost:3001</Text>
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
  link: {
    fontSize: 12,
    color: '#3498db',
    padding: 5
  },
  backButton: {
    backgroundColor: '#3498db',
    borderRadius: 4,
    margin: 10,
    paddingLeft: 5,
    paddingRight: 5,
  }
});