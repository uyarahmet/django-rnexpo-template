import React from 'react';
import Login from './screens/Login.js';
import Signup from './screens/Signup.js';
import Home from './screens/Home.js'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App(){
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component = {Login}/>
      <Stack.Screen name="Home" component = {Home}/>
      <Stack.Screen name="Signup" component = {Signup}/>
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App/>
    </ NavigationContainer>
  )
}
