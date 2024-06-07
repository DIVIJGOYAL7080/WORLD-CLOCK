import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert
} from 'react-native';
import { Header, Icon, Badge } from 'react-native-elements';
import AppHeader from '../components/AppHeader';
import db from '../database';
export default class InputScreen extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
      time: {},
    };
  }
  worldTime = () => {
    fetch('http://worldtimeapi.org/api/').then((response) => {
      this.setState({time: response.data})
    })
    .catch(error=>{
      Alert.alert(error.message)
    })
  };
  render() {
    return (
      <View>
        <View style={styles.container}>
          <AppHeader />
        </View>
        <View
          style={{
            marginLeft: 60,
            marginRight: 60,
            marginTop: 50,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#9c8210',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 30, color: 'white' }}>
            Enter Name Of The COUNTRY
          </Text>
        </View>
        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <View
          style={{
            marginLeft: 80,
            marginRight: 80,
            borderRadius: 50,
            marginTop: 50,
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: '#9c8210',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => this.worldTime()}>
            <Text style={{ color: 'white', fontSize: 30 }}>Time</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBox: {
    marginTop: 60,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imageIcon: {
    width: 275,
    height: 275,
    marginLeft: 30,
  },
});
