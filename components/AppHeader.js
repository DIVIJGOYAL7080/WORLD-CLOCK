import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header,Icon,Badge } from 'react-native-elements';
export default class AppHeader extends Component{
render(){
  return(
    
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'World Clock',
            style: { color: '#fff', fontSize: 30 },
          }}
        />
  )
}


} 