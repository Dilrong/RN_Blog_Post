import React, {Component} from 'react';
import {StyleSheet, View, Text, TextInput, Button, SafeAreaView} from 'react-native';
import { inject, observer } from 'mobx-react';
import Axios from 'axios';

@inject('postStore')
@observer
export default class HomeScreen extends Component{
  constructor(props) {
    super(props);
  }

  submitContent = async () => {
    const apiArray = [
      {url: 'http://localhost:3000/1/functions/createPost', data:{body: this.props.postStore.text}},
      {url: 'http://localhost:3001/post', data:{content: this.props.postStore.text}}
    ];

    for(let i in apiArray){
      await Axios.post(apiArray[i].url, apiArray[i].data)
      .then((req) => {
        console.log(req)
        console.log(i)
        if((req.status == 200) && (i == Object.keys(apiArray).length-1))
          this.props.navigation.push('Done')
      })
      .catch((err) => {
        console.log(err)
        if(!(req.status == 200) && (i == Object.keys(apiArray).length-1))
          this.props.navigation.navigate('Error')
      })
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Blog Post App</Text>
        <View style={styles.textInput}>
          <TextInput
            placeholder="내용을 입력해주세요."
            multiline = {true}
            onChangeText={(text) => this.props.postStore.text=text}/>
        </View>
        <View style={styles.postButton}>
          <Button
            onPress={() => {
              this.submitContent();
            }}
            title="Post"
            color="#ffffff"
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
    color: '#1abc9c',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    width: '90%',
    height: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#bdc3c7',
    padding: 10,
  },
  postButton: {
    width: '90%',
    backgroundColor: '#1abc9c',
    borderRadius: 4,
    margin: 10,
    paddingLeft: 5,
    paddingRight: 5,
  }
});