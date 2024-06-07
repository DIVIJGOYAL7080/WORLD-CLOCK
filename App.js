import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import InputScreen from './screens/InputScreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
export default function App() {
  return (
    <SafeAreaProvider>
   <AppContainer/>
    </SafeAreaProvider>
  );
  
}
const SwitchNavigator=createSwitchNavigator({
WelcomeScreen:{
  screen:WelcomeScreen
},
InputScreen:{
  screen:InputScreen
}
})
const AppContainer=createAppContainer(SwitchNavigator)


