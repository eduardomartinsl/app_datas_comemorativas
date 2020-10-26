import { NavigationContainer, StackActions } from "@react-navigation/native";
import React from "react";
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './modules/HomeScreen'

const stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name='home'
          component={HomeScreen}
          options={{ title: "tela principal" }} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;