import React, { Component } from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { Header, Icon, Badge } from 'react-native-elements';
import AppHeader from '../components/AppHeader';
import InputScreen from './InputScreen'
export default class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppHeader />
        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://www.divilayouts.com/wp-content/uploads/2020/07/Divi-animated-clock-layout.jpg',
          }}
        />
        <View style={{marginLeft:80,marginRight:80,borderRadius:50,marginTop:50,paddingTop:10,paddingBottom:10,backgroundColor:'#9c8210',alignItems:"center"}}>
        <TouchableOpacity
       onPress={()=>this.props.navigation.navigate('InputScreen')}
        >
<Text style={{fontSize:30,color:'white'}}>Next</Text>
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
    marginTop: 50,
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
