import React, {Component} from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Axios from 'axios';
import { inject, observer } from 'mobx-react';

@inject('postStore')
@observer
class HomeScreen extends Component{
  constructor(props) {
    super(props);
  }

  submitContent(){
    const apiArray = [
      {url: 'http://localhost:3000/1/functions/createPost', data:{body: this.props.postStore.text}},
      {url: 'http://localhost:3001/post', data:{content: this.props.postStore.text}}
    ];

    for(let i in apiArray){
      Axios.post(apiArray[i].url, apiArray[i].data)
      .then((req) => {
        console.log(req)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="내용을 입력해주세요."
          multiline = {true}
          onChangeText={(text) => this.props.postStore.text=text}/>
          <Button
            onPress={() => {
              this.submitContent();
            }}
            title="Post"
            color="#2ecc71"
          />
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
  textInput: {
    fontSize: 16,
    textAlign: 'center',
    shadowColor: "#000",
  },
});

const AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen
    }
},
{
    initialRouteName: "Home",
    header: null,
    headerMode: 'none'
});
  
export default createAppContainer(AppNavigator);