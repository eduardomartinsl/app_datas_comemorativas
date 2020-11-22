import { NavigationContainer, StackActions } from "@react-navigation/native";
import React from "react";
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './modules/HomeScreen'
import CalendarioScreen from "./modules/CalendarioScreen";

const stack = createStackNavigator()

const HOME_SCREEN = 'home'
const CALENDARIO_SCREEN = 'calendario'

function App() {

  return (
    <NavigationContainer>
      <stack.Navigator>
      <stack.Screen
          name={HOME_SCREEN}
          component={HomeScreen}
          options={{ title: "tela principal" }} />
      <stack.Screen
          name={CALENDARIO_SCREEN}
          component={CalendarioScreen}
          options={{ title: 'Calendário' }} />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export {HOME_SCREEN, CALENDARIO_SCREEN};
export default App;